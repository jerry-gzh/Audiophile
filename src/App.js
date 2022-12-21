import { Routes, Route} from 'react-router-dom'; //Definir rutas
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AuthProvider } from './context/authContext' //Los componentes dentro de AuthProvider tendrán acceso al user

function App() {
  return(  
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App;