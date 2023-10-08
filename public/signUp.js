class user {
 constructor(username, email, psw) {
  this.username = username;
  this.email = email;
  this.password = psw;
 }
}

var newUser = new user();

function signUp() {
 newUser.username = document.getElementById("username").value;
 newUser.email = document.getElementById("email").value;
 let psw = document.getElementById("psw").value;
 let pswRepeat = document.getElementById("psw-repeat").value;
 console.log(newUser.username);
 if (newUser.username == "" || newUser.email == "" || newUser.password == " ") {
  alert("Please enter information in every box.");
 } else if (psw == pswRepeat) {
  newUser.password = psw;
  postUser();
 } else {
  alert("Please enter the same password in both fields.");
 }
}

function postUser() {
 db.collection("users").add({
  name: post.name,
  description: post.description,
  skills: post.skills,
  requirments: post.requirments,
 });

 location.href = "../index.html";
}
