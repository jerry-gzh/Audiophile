//import { useNavigate } from "react-router-dom"; // No es necesario si se usa el ProtectedRoute
import { useAuth } from "../context/authContext";



export function Home() {

  const {user, logout, loading} = useAuth()
  //const navigate = useNavigate()

  const handleLogout = async() => {
    await logout()
    //navigate("/")
  }
  
  if (loading) return <h1>Loading...</h1>

  return (<div>
    <h1>Welcome {user.email}</h1>

    <button onClick={handleLogout}>LogOut</button>
  </div>);
}
