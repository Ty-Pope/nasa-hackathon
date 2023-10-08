class postData {
 constructor(name, description, skills, requirments) {
  this.name = name;
  this.description = description;
  this.skills = skills;
  this.requirments = requirments;
 }
}
var post = new postData();

function submitClick() {
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
}

function createPost() {
 const app = firebase.app();

 const db = firebase.firestore();

 db.collection("posts").add({
  name: post.name,
  description: post.description,
  skills: post.skills,
  requirments: post.requirments,
 });
}
