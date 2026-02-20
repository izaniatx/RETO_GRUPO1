FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /var/www/html

# 1️⃣ Instalar dependencias básicas
RUN apt update && apt install -y \
    software-properties-common \
    curl \
    git \
    unzip \
    nginx \
    mysql-server \
    nodejs \
    npm

# 2️⃣ Instalar PHP 8.2
RUN add-apt-repository ppa:ondrej/php -y && apt update && apt install -y \
    php8.2 \
    php8.2-fpm \
    php8.2-mysql \
    php8.2-intl \
    php8.2-mbstring \
    php8.2-xml \
    php8.2-curl \
    php8.2-zip

# 3️⃣ Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

# 4️⃣ Copiar proyecto
COPY . .

# 5️⃣ Instalar dependencias Laravel
RUN composer install --no-dev --optimize-autoloader

# 6️⃣ Instalar dependencias Node y compilar Vite
RUN npm install
RUN npm run build

# 7️⃣ Crear base de datos
RUN service mysql start && \
    mysql -uroot  -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';" && \
    mysql -uroot -proot -e "CREATE DATABASE automocion;"

# 8️⃣ Permisos
RUN chown -R www-data:www-data storage bootstrap/cache \
	&& chmod -R 775 storage bootstrap/cache

EXPOSE 80

CMD service mysql start && \
    php artisan migrate --force && \
    php artisan serve --host=0.0.0.0 --port=80
