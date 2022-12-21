import {Routes, Route} from 'react-router-dom'; //Definir rutas
import { Home } from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return(  
    <div className='bg-slate-300 h-screen text-black flex'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App;