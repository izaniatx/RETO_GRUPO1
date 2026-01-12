import MainLayout from "../layouts/MainLayout";
import CatalogoPage from "../components/CatalogoPage.js";

function catalogo() { 
    return (
        <div>
            <MainLayout > 
                <CatalogoPage />
            </MainLayout>
        </div>
    );
}

export default catalogo;