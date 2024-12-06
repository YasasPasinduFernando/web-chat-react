import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-ekeUUsHyEMhgADJE3Fluqi7EXWKyQqc",
  authDomain: "chat-service-lk0.firebaseapp.com",
  projectId: "chat-service-lk0",
  storageBucket: "chat-service-lk0.firebasestorage.app",
  messagingSenderId: "1097396191110",
  appId: "1:1097396191110:web:f54b0408b5f1560b8eb607"
};


const app = initializeApp(firebaseConfig);

export default app;