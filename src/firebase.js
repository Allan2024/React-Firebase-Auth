import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
   apiKey: "AIzaSyBJ5FExflVre1PWJxeds5bAryZm2G85YPM",
    authDomain: "fir-withreactjs-1285d.firebaseapp.com",
    projectId: "fir-withreactjs-1285d",
    storageBucket: "fir-withreactjs-1285d.appspot.com",
    messagingSenderId: "816390496272",
    appId: "1:816390496272:web:ec3af6440a96ab2385ea95"
})

export const auth = app.auth()
export default app
