import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from './pages/landingpage.jsx'
import Inicio from './pages/inicio.jsx'
import Registro from './pages/registro.jsx'
import Catalogo from './pages/catalogo.jsx'
import RecoveryPassword from './pages/recoveryPassword.jsx'

function App() {

  return (
    <Routes>  
        <Route path='/' element={<Landingpage />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/recoveryPassword' element={<RecoveryPassword />} />
    </Routes>
  )
} 

export default App
