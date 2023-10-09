function search() {
 const searchBox = document.getElementById("query").value;
 db
  .collection("posts")
  .get()
  .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    console.log(doc.data().uid);
    // doc.data() is never undefined for query doc snapshots
    console.log(search.toString().match(/${doc.data().uid}/g));
    if (search.toString().match(/${doc.data().uid}/g)) {
    }
   });
  });
}
