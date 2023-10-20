import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvwpMBe_PIdgv-MT_uvuDZLCFRkUIHxFc",
    authDomain: "molly-online-store-196c2.firebaseapp.com",
    projectId: "molly-online-store-196c2",
    storageBucket: "molly-online-store-196c2.appspot.com",
    messagingSenderId: "218289005830",
    appId: "1:218289005830:web:714f231dd8ca90743d6a87",
    measurementId: "G-BHYESBYCSR"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
//   const storage = getStorage(app);
  
export { db, auth };