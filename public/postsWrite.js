class postData {
 constructor(name, description, skills, requirments, uid) {
  this.name = name;
  this.description = description;
  this.skills = skills;
  this.requirments = requirments;
  this.uid = uid;
 }
}

var post = new postData();

function submitClick() {
 firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
   // User is signed in.
   post.uid = user.uid;

   post.name = document.getElementById("project-name").value;
   post.description = document.getElementById("description").value;

   let level = [false, false, false];
   level[0] = document.getElementById("beginner").checked;
   level[1] = document.getElementById("intermediate").checked;
   level[2] = document.getElementById("advanced").checked;
   post.skills = level;

   let requirments = document.getElementById("skills-requirment").value;
   requirments = requirments.toString();
   requirments = requirments.split(",");
   for (let i = 0; i < requirments.length; i++) {
    console.log(requirments[i][0]);
    let endIndex = requirments[i].length;
    if (requirments[i][0] == " ") {
     console.log("space");
     requirments[i] = requirments[i].slice(1);
    }
    if (requirments[i][endIndex - 2] == " ") {
     requirments[i] = requirments[i].slice(0, requirments[i].length - 1);
    }
   }
   post.requirments = requirments;
   createPost();
  } else {
   alert("You must be signed in to create a post.");
  }
 });
}

async function createPost() {
 const app = firebase.app();

 const db = firebase.firestore();

 db.collection("posts").add({
  name: post.name,
  description: post.description,
  skills: post.skills,
  requirments: post.requirments,
  uid: post.uid,
 });
 await alert("Your project has been created. Go to 'My Projects' to view it.");
}
