document.addEventListener("DOMContentLoaded", (event) => {
 firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
   // User is signed in.
   document.getElementById("login").innerHTML = `Logged in as ${user.displayName}`;
  } else {
   document.getElementById("login").innerHTML = "Login";
  }
 });
});
