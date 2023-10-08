document.addEventListener("DOMContentLoaded", (event) => {
 const app = firebase.app();

 const db = firebase.firestore();
 var projectsArr = [];
 let uid;
 firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
   // User is signed in.
   uid = user.uid;
  }
 });
 console.log("hello");
 db
  .collection("posts")
  .get()
  .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    console.log(doc.data().uid);
    // doc.data() is never undefined for query doc snapshots
    if (uid == doc.data().uid) {
     var paragraph = document.getElementById("projects");

     paragraph.innerHTML += `<div class=projects><a href="wikipedia">${doc.data().name}</a><p>${doc.data().description}</p><p>Requirments:</p><p>${doc.data().requirments}</p></div>`;
    }
   });
  });
});
