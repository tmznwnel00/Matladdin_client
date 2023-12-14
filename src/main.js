import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCrQZtARic-WCKZHg1sVk-pkiPa5L3Kwy4",
//   authDomain: "bside312potenday.firebaseapp.com",
//   projectId: "bside312potenday",
//   storageBucket: "bside312potenday.appspot.com",
//   messagingSenderId: "446099758952",
//   appId: "1:446099758952:web:98feb70d54a1b480ad80dd",
//   measurementId: "G-752VVMB03F"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics);
// app.use(router);
// app.mount('#app');

const app = createApp(App);
app.use(router);
app.mount('#app');
