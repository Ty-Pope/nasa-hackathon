function submitClick() {
 let name = document.getElementById("project-name").value;
 let description = document.getElementById("description").value;

 let level = [false, false, false];
 level[0] = document.getElementById("beginner").checked;
 level[1] = document.getElementById("intermediate").checked;
 level[2] = document.getElementById("advanced").checked;

 let requirments = document.getElementById("skills-requirment").value;
 requirments = requirments.toString();
 requirments = requirments.split(",");
 for (let i = 0; i < requirments.length; i++) {
  console.log(requirments[i][0]);
  let endIndex = requirments[i].length;
  if (requirments[i][0] == " ") {
   requirments[i] = requirments[i].slice(1);
  }
  if (requirments[i][endIndex - 2] == " ") {
   requirments[i] = requirments[i].slice(0, requirments[i].length - 1);
  }
 }
}
