
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKsWilMUypLgRVfqXBFtdG1lRSf3vQtzw",
    authDomain: "mypage-5e2bc.firebaseapp.com",
    databaseURL: "https://mypage-5e2bc-default-rtdb.firebaseio.com",
    projectId: "mypage-5e2bc",
    storageBucket: "mypage-5e2bc.appspot.com",
    messagingSenderId: "1036368301501",
    appId: "1:1036368301501:web:93c0d56ccc1543171cd6d4",
    measurementId: "G-RLXCMJDV9P"
};

let fb = firebase.initializeApp(firebaseConfig)
let db = firebase.database();

let authUser = (email, password) => {
    let uid = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
        let uid = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            let uid = user.user.uid
            console.log(user)
            return uid
        })
        .catch((error) => {
            console.log(error)
            console.log('ERROR')
        })
        return uid
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
    let User = firebase.auth().currentUser;
    console.log(User)
    return uid
}

let SignOut = () => {
    firebase.auth().signOut()
}

let AddItem = (newItem) => {
    firebase.database().ref('items').push(newItem);
}

let getState = () => {
    let newState = db.ref().once('value').then((snapshot) => {
        let data = snapshot.val()
        return data
    });
    return newState
}

let DeleteItem = (key) => {
    firebase.database().ref('items').child(key).remove().then(() => {console.log('REMOVED')});
}

let EditItem = (key, newItem) => {
    firebase.database().ref('items').child(key).update(newItem)
}


export {fb, db, AddItem, getState, DeleteItem, EditItem, authUser, SignOut}