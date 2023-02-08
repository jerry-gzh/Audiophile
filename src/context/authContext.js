import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"; //Métodos proporcionados por firebase
import { auth, app } from "../firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore"; //Libreria BD CloudFirestore

export const authContext = createContext();

export const useAuth = () => {
  //Nos dará la info del user
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

//AuthProvider debe estar en los componentes que accederán a sus datos
export function AuthProvider({ children }) {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async(email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password)// ⚠️ rol:"user"
    console.log(res.user.uid);

    const firestore = getFirestore(app);//Instrucciones BD CloudFirestore
    const docuRef = doc(firestore, `usuarios/${res.user.uid}`)
    setDoc(docuRef, {correo: email, rol: "user"})
  }
  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
  }, []);

  //Todos los componentes tendrán acceso a user
  return (
    <authContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}
