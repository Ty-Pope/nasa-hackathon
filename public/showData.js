document.addEventListener("DOMContentLoaded", (event) => {
 const app = firebase.app();
 console.log(app);
 const db = firebase.firestore();

 const myPost = db.collection("posts").doc("firstpost");

 myPost.get().then((doc) => {
  const data = doc.data();
  document.getElementById("data").innerHTML = data.title;
 });
});
