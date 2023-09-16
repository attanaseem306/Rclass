// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,addDoc,collection , query , getDocs} from "firebase/firestore";
import { getStorage, ref ,uploadBytes, getDownloadURL} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrAJfYgMc2B5skStq-1L4RoXvPbMH8jSA",
  authDomain: "reactfirst-69715.firebaseapp.com",
  projectId: "reactfirst-69715",
  storageBucket: "reactfirst-69715.appspot.com",
  messagingSenderId: "359520861525",
  appId: "1:359520861525:web:14bcdd3d51aed0208083dc",
  measurementId: "G-8F76M5F4MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export{db,storage,addDoc,collection,ref, uploadBytes,getDownloadURL , query , getDocs}