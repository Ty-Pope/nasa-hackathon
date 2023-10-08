class user {
 constructor(username, email, psw) {
  this.username = username;
  this.email = email;
  this.password = psw;
 }
}

var newUser = new user();

async function signUp() {
 newUser.username = document.getElementById("username").value;
 newUser.email = document.getElementById("email").value;
 let psw = document.getElementById("psw").value;
 let pswRepeat = document.getElementById("psw-repeat").value;
 let isValid = newUser.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g);

 let emailTaken = await takenEmail();

 if (emailTaken) {
  alert("This email is already in use. Please use another email.");
 } else if (newUser.username == "" || newUser.email == "" || newUser.password == "") {
  alert("Please enter information in every box.");
 } else if (!isValid) {
  alert("Please enter a valid email address.");
 } else if (psw == pswRepeat) {
  newUser.password = psw;
  postUser();
 } else {
  alert("Please enter the same password in both fields.");
 }
}
async function takenEmail() {
 const app = firebase.app();
 const db = firebase.firestore();
 let emailTaken = false;
 await db
  .collection("users")
  .get()
  .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    if (newUser.email == doc.data().email) {
     emailTaken = true;
    }
   });
  });
 return emailTaken;
}
function postUser() {
 const app = firebase.app();
 const db = firebase.firestore();
 db.collection("users").add({
  username: newUser.username,
  email: newUser.email,
  password: newUser.password,
 });
}
