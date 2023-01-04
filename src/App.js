
import AllRoutes from './routes/index';
import { AuthProvider } from './context/authContext' //Los componentes dentro de AuthProvider tendrán acceso al user

import './App.css'


// classname= bg-slate-300 h-screen text-black flex 
function App() {
  return(  
    <div className='App'>
      <AuthProvider>
        <AllRoutes/>
      </AuthProvider>
    </div>
  )
}

export default App;