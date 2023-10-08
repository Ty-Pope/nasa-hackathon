document.addEventListener("DOMContentLoaded", (event) => {
    const app = firebase.app();
   
    const db = firebase.firestore();
   
    const myPost = db.collection("posts").doc("testPost");
    console.log(myPost);
    myPost.get().then((doc) => {
     const data = doc.data();
     document.getElementById("data").innerHTML = data.name;
    });
   });
   