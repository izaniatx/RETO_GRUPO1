import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from './pages/landingpage.jsx'
import Inicio from './pages/inicio.jsx'
import Registro from './pages/registro.jsx'
import Catalogo from './pages/catalogo.jsx'

function App() {

  return (
    <Routes>  
        <Route path='/' element={<Landingpage />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/catalogo' element={<Catalogo />} />
    </Routes>
  )
} 

export default App
