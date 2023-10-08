

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


  

const firebaseConfig = {
  apiKey: "AIzaSyBgiFNyWqj91osTvf3M7HuI_-E1INaLw0Q",
  authDomain: "social-events-40d88.firebaseapp.com",
  projectId: "social-events-40d88",
  storageBucket: "social-events-40d88.appspot.com",
  messagingSenderId: "787179286441",
  appId: "1:787179286441:web:fae1f79da124de10171eb8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;