function sayHello() {
  alert("hello world!")
}

document.write("this is my first javascript page");
document.write("<h1>this is my first javascript page</h1>");

// let and const are used for variable name, break,boolean and other reserved names cannot be used as variable name and the name must not begein with number 
// case sensitive language.
var pi = 3.14;
var person = "I believe in GOD";
var answer = "Everyone should!";
document.write(pi + "<br>");
document.write(person + "<br>");
document.write(answer + "<br>");

function myFunction() {
  var carname="welcome";
  document.getElementById("demo").innerHTML=carname;
}

var num=10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(num);
console.log(typeof(num));
num = "gargi singh";
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));

// var person = {
//   firstname : "john",
//   lastname : "singh",
//   id : 556,
//   getinfo : function () {
//     return this.firstname + " " + this.lastname;
//   }
// } ;
// document.getElementsById("demo").innerHTML = person.getinfo();

// var person = {
//   name:'Ramesh',
//   age:30,
//   isMarried : true,
//   address : {
//     street : 'Vijay Nagar',
//     flatNo : 201 
//   }
// };
// console.log(person);

// var person2 = new Object();
// person2.name = 'gargi';
// person2.age = 20;
// person2.isMarried = false;
// person2.address = {};
// person2.address.street = "vasundhara";
// person2['address']['flatNo'] = 33;
// console.log(person2);


// var person = {
//   name : "Mayank",
//   age : 21,
//   isMarried : true,
//   child : ['abhi'],
//   getInfo : function() {

//   },
//   address : {
//     street : 'vijay',
//     flatno : 123
//   }

// };
// console.log(person);
// console.log(person.flatno);


//     function show(){
//       var a="a is local outer variable";
//       document.write(a +  "<br>");

//       function disk(){
//         var b = "b is local inner variable";
//         document.write(b + "<br>");

//       }
//       disk();
//     }
//     show();

//     var name = 'gargi';
//     function first () {
//       var a = 'hello';
//       second () ;
//       var x = a + " " + name;
//      console.log(x);
//     }

//     function second() {
//       var b = 'hi';
//       third();
//       var y = b + " "+ name;
//       console.log(y);
//     }

//     function third() {
//       var c = 'hey';
//       var z = c + " " + name;
//       console.log(z);
//     }

//     first();

//     var age = 20;
//     if (age>18) {
//       document.write("<b>you are eligible to vote</br>");

//     }
    

// var grade = "A";
// document.write("entering switch block:</br>");
// switch(grade) {
//   case 'A': document.write("good job</br>");
//   break;
//   case 'B': document.write("pretty good job");
//   break;
//   case 'C': document.write("decent job");
//   break;
//   case 'D': document.write("not so good job");
//   break;
//   case 'F': document.write("poor job");
//   break;
//   default : document.write("unidentified grade");
// }




// var myArray=["A","B","C","D"];
// for(var i=0;i<myArray.length;i++){
//   console.log("member of my array in index " + i + " is " + myArray[i]);
// }


// function myFunc() {
//   alert("hello world!");
// }
// <body>
//   <button onclick="myFunc()">TRY IT !</button>
// </body>


