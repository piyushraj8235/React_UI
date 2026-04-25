
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtual-ui-953ce.firebaseapp.com",
  projectId: "virtual-ui-953ce",
  storageBucket: "virtual-ui-953ce.firebasestorage.app",
  messagingSenderId: "156392586862",
  appId: "1:156392586862:web:8da36590d48ca44fb5707f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
