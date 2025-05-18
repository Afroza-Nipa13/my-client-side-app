import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,  getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';

export const auth = getAuth(app);
const AuthProvider = ({children}) => {

 const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email, password )
 }   

 const logInUser=(email,password)=> {
   return signInWithEmailAndPassword(auth,email,password)
 }

//  const removeUser = ()=>{
//    return deleteUser(auth.currentUser)
//  }




 const userInfo = {
    createUser,
    logInUser,
    
 }   
    return (<AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
    )
};

export default AuthProvider;