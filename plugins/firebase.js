import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCtk2uej7GqY3Da4FFEgaxwBOZKArt1-68",
    authDomain: "nuxt-chat-ef0c8.firebaseapp.com",
    projectId: "nuxt-chat-ef0c8",
    storageBucket: "nuxt-chat-ef0c8.appspot.com",
    messagingSenderId: "159597393623",
    appId: "1:159597393623:web:4f649ec02811f1af91a292",
    measurementId: "G-C1RD2VN7C3"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase