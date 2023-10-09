function searchDB() {
 const searchBox = document.getElementById("query").value;

 const db = firebase.firestore();
 var paragraph = document.getElementById("results");
 paragraph.innerHTML = "";
 db
  .collection("posts")
  .get()
  .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    var name = doc.data().name;
    var regexp = new RegExp(searchBox, "gi");

    // doc.data() is never undefined for query doc snapshots
    var match = name.match(regexp);

    if (match) {
     let skill = "";
     if (doc.data().skills[0] == true) {
      skill = "Beginner ";
     }
     if (doc.data().skills[1] == true) {
      skill += "Intermediate ";
     }
     if (doc.data().skills[0] == true) {
      skill = "Advanced";
     }
     paragraph.innerHTML += `<div id="${doc.id}" class=projects>Name: ${doc.data().name}<p>Description:\n${doc.data().description}</p><p>Requirments:</p><p>${doc.data().requirments}</p><p>Level of skill:\n${skill}</p><button id="join-button" type="button" onclick=requestClick()>Ask to join</button</div>`;
    }
   });
  });
}

function requestClick() {
 var parentId = document.getElementById("join-button").parentElement.id;
 firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
   console.log(user);
   const db = firebase.firestore();
   const data = firebase.firestore();
   db.collection("posts").doc(parentId).update({
    requestUser: user.displayName.toString(),
    requestEmail: user.email.toString(),
    requestUID: user.uid.toString(),
   });
  } else {
   alert("You must be signed in request to join a project.");
  }
 });
}
