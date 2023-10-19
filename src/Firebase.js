import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

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
//   const db = getFirestore(app);
//   const storage = getStorage(app);
  
export const db = getFirestore(app);