import { Routes, Route} from 'react-router-dom'; //Definir rutas
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ShopingCart } from './components/ShopingCart'
import { ProtectedRoute } from './components/ProtectedRoute';
import { Register } from './components/Register';
import { AuthProvider } from './context/authContext' //Los componentes dentro de AuthProvider tendrán acceso al user

import './App.css'


// classname= bg-slate-300 h-screen text-black flex 
function App() {
  return(  
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/shopingCart' element={ <ProtectedRoute> <ShopingCart/> </ProtectedRoute> }/>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App;