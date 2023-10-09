window.addEventListener("click", function (event) {
 if (event.target == myPopup) {
  myPopup.classList.remove("show");
 }
});

document.addEventListener("DOMContentLoaded", (event) => {
 const app = firebase.app();

 const db = firebase.firestore();
 let uid;
 firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
   // User is signed in.
   uid = user.uid;
  }
 });
 db
  .collection("posts")
  .get()
  .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (uid == doc.data().uid) {
     var paragraph = document.getElementById("projects");
     paragraph.innerHTML += `<div id="${doc.id}" class=projects>Name: ${doc.data().name}<p>Description:\n${doc.data().description}</p><p>Requirments:</p><p>${doc.data().requirments}</p><button id="request-button" onclick="requests()">See Requests</button></div>`;
    }
   });
  });
});

function requests() {
 myPopup.classList.add("show");

 var parentId = document.getElementById("request-button").parentElement.id;

 const db = firebase.firestore();
 let uid;
 firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
   // User is signed in.
   uid = user.uid;
  }
 });
 db
  .collection("posts")
  .get()
  .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    if (parentId == doc.id) {
     var paragraph = document.getElementById("data");
     paragraph.innerHTML = `<h2>Name:</h2><p>${doc.data().requestUser}</p><h2>Email:</h2><p>${doc.data().requestEmail}</p>`;
    }
   });
  });
}

function closePopup() {
 myPopup.classList.remove("show");
}
