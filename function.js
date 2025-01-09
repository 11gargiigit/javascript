
//variable
var myCollect = [
  1, "gargi" , true, {
    name : "mayank",
    age : 21,
  }, 
  function(name) {
    console.log(name);
  },
  ["hike","snow","winter","cold","headache"]
]
console.log(myCollect);

//function
function information(firstName,lastName,language) {
  if(arguments.length === 3){
    console.log(firstName);
    console.log(lastName);
    console.log(language);
  }
}

information() ;
information('gargi','gauri','mayank');



//object
