import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"; //Métodos proporcionados por firebase
import { auth, app } from "../firebase";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; //Libreria BD CloudFirestore


const firestore = getFirestore(app);

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

    const docuRef = doc(firestore, `usuarios/${res.user.uid}`)//Instrucciones BD CloudFirestore
    setDoc(docuRef, {correo: email, rol: "user"})
  }
  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => {signOut(auth); setUser()};

  async function getROl(uid){
    const docuRef = doc(firestore, `usuarios/${uid}`)
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser){
        getROl(currentUser.uid).then((rol) => {
          const userData = {
            uid: currentUser.uid,
            email: currentUser.email,
            rol: rol, 
          };
          setUser(userData);
          //console.log("userData final:", userData);
          setLoading(false)
        });
        //console.log("user final:", user);
      }
    });
  }, []);

  //Todos los componentes tendrán acceso a user
  return (
    <authContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}
