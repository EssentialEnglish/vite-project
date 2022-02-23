// Copied from learn Vue - connect to firbase lesson
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt6tGj1lY9O41prvQ4ez4LvWL5s-UqtK4",
    authDomain: "vite-project-74ed0.firebaseapp.com",
    projectId: "vite-project-74ed0",
    storageBucket: "vite-project-74ed0.appspot.com",
    messagingSenderId: "188074360383",
    appId: "1:188074360383:web:7f76f4bae3fc3a2bfb428a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase


const app = createApp(App);

app.use(router);

app.mount("#app");