// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD1kGLY3VagqiTOv76SCUgGmnLn03JslaI",
//   authDomain: "client-management-server.firebaseapp.com",
//   projectId: "client-management-server",
//   storageBucket: "client-management-server.firebasestorage.app",
//   messagingSenderId: "694708162240",
//   appId: "1:694708162240:web:afbf572007b8eb5901e725"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;