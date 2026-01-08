import './css/Catalogo.css';

const Sidebar = ({ filters, setFilters, searchTerm, setSearchTerm }) => {
  
  const handleMarcaChange = (marca) => {
    const nuevasMarcas = filters.marcas.includes(marca)
      ? filters.marcas.filter(m => m !== marca)
      : [...filters.marcas, marca];
    setFilters({ ...filters, marcas: nuevasMarcas });
  };

  // Función para resetear todo
  const resetFilters = () => {
    setSearchTerm(""); // Limpia el input del buscador
    setFilters({
      searchQuery: "",
      marcas: [],
      precioMax: 100000,
      combustible: 'todos'
    });
  };

  // Comprobar si hay algún filtro activo para mostrar u ocultar el botón
  const hayFiltrosActivos = 
    searchTerm !== "" || 
    filters.marcas.length > 0 || 
    filters.precioMax !== 100000 || 
    filters.combustible !== 'todos';

  return (
    <aside className="w-full md:w-64 bg-white p-6 rounded-xl shadow-sm h-fit sticky top-4">
      <h2 className="text-xl font-bold mb-6">Filtros</h2>

      {hayFiltrosActivos && (
          <button 
            onClick={resetFilters}
            className="text-xs text-red-500 hover:text-red-700 font-semibold underline transition-colors"
          >
            Limpiar
          </button>
        )}

      {/* Buscador de texto */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Buscar</label>
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Modelo o marca..."
          className="w-full p-2 border rounded-lg outline-none focus:border-blue-500"
        />
      </div>

      {/* Filtro de Marcas */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Marcas</label>
        {['Toyota', 'BMW', 'Tesla', 'Audi'].map(marca => (
          <label key={marca} className="flex items-center gap-2 mb-2 cursor-pointer text-sm">
            <input 
              type="checkbox" 
              checked={filters.marcas.includes(marca)}
              onChange={() => handleMarcaChange(marca)}
              className="rounded text-blue-600"
            />
            {marca}
          </label>
        ))}
      </div>

      {/* Filtro de Precio */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">
          Precio Máximo: <span className="text-blue-600">{filters.precioMax}€</span>
        </label>
        <input 
          type="range" 
          min="10000" 
          max="100000" 
          step="5000"
          value={filters.precioMax}
          onChange={(e) => setFilters({...filters, precioMax: parseInt(e.target.value)})}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Filtro de Combustible */}
      <div>
        <label className="block text-sm font-semibold mb-2">Combustible</label>
        <select 
          value={filters.combustible}
          onChange={(e) => setFilters({...filters, combustible: e.target.value})}
          className="w-full p-2 border rounded-lg outline-none bg-white"
        >
          <option value="todos">Todos</option>
          <option value="hibrido">Híbrido</option>
          <option value="electrico">Eléctrico</option>
          <option value="diesel">Diésel</option>
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;