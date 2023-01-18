//seting up firebase with  our webside
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqlVoHs_fZ3go7SqmwbH-h1Je0bYKYV3o",
  authDomain: "email-form-d13e8.firebaseapp.com",
  projectId: "email-form-d13e8",
  storageBucket: "email-form-d13e8.appspot.com",
  messagingSenderId: "712736199715",
  appId: "1:712736199715:web:5245e333b1d8a258940d96",
  measurementId: "G-0J992JJHMZ",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//singup function
const singUp = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(email, "password :  ", password);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("you are sing Up");

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

const singIn = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((results) => {
      console.log(results);
      document.write("sing in");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

const passUpdate = () => {
  let email = document.getElementById("email").value;

  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then((result) => {
      // Password reset email sent!
      // ..
      alert("check email to reset your password");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
