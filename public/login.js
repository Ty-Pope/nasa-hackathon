function signIn() {
 var provider = new firebase.auth.GoogleAuthProvider();

 firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
   /** @type {firebase.auth.OAuthCredential} */
   var credential = result.credential;

   // This gives you a Google Access Token. You can use it to access the Google API.
   var token = credential.accessToken;
   // The signed-in user info.
   var user = result.user;
   // IdP data available in result.additionalUserInfo.profile.
   document.getElementById("username").innerHTML = `Hello! ${user.displayName}`;
  })
  .catch((error) => {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // The email of the user's account used.
   var email = error.email;
   // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;
   document.getElementById("username").innerHTML = `An error occured. Please try again later.`;
  });
}

function removeUser() {
 firebase.auth().signOut();
 firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
   // User is signed in.
   console.log("Signed in");
  } else {
   // No user is signed in.
   console.log("Signed out.");
  }
 });
 document.getElementById("username").innerHTML = "You have been signed out.";
}
