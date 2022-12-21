import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"; //Método proporcionado por firebase
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  //Nos dará la info del user
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

//AuthProvider debe estar en los componentes que accederán a sus datos
export function AuthProvider({ children }) {

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  //Todos los componentes tendrán acceso a user
  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
}
