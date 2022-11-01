// var i = 10;

// var j = 5;

// if (i > j) {

//     document.write("I is the largest");



// }

// else if (j > i){

//     document.write("J is the largest");

// }

// else {

//     document.write("They are same");

// }








// if(true){

//     var data = "some text";

// }

// document.write(data);








//  for( var i = 0; i < 10; i++){

//     console.log(i);

//  }




// for( var s = 0; s < 10; s++)

// { var d = 2;

//     console.log(d*s);

// }



// for( var s = 0; s < 10; s++)

// {

//     console.log(`2 * ${s} = ${2 * s}`);

// }






// while(condition){



// }

// var i = 1;

// while( i <= 10) {

//     console.log(i);

//     i++;



// }



// while(true){

//     var sam = prompt(" what is your name");

//     if(sam == "s")

//     {

//         break;

   

//     }

//     console.log(" Hi " + sam);

   

// }

// while(true) {

//     var email = prompt ("enter your email");

//     var password = prompt ("enter your password");

//     if ( email == "em" && password == "p"){

//         alert("login successfully");

//         break;

//     }

//     else{

//         alert(" invalid login");

//     }

// }




//function syntax

// function greet(name){

// console.log('hello ' + name);

// }

// greet("jane");  // for calling the function






// function add (x,y){

   

//     return x+y;

// }



// var res = add(5,3);

// console.log(res);




// var add = function (x,y){

//     return x+y;



// }

// var res = add(6,6);

// document.write(res);   //anonymus




// var add = (x,y)=>{

//     return x+y;

// }
[11:52] Shafna N
// object

// var person = {
//     fullName : 'shaf',
//     age : 23,

// }
// person.fullName = "new name"
// console.log(person.fullName);
// console.log(person['age']);

// var student = {
//        id: 1,
//        mark1: 30,
//        mark2: 50,
//        total: function(){
//         var extraMark = 5;
//         return this.mark1 + this.mark2 + extraMark;
//        }
//     }
//     console.log (student.total()); 

//ARRAY

// var data = ["My name", 25]
// console.log(data[0])
// console.log(data[1])

// console.log(data.length)

// var details = {
//     fullName: "shaf",
//     phoneNumber: [9747898, 769890],
//     email:"sjhhdjk",
// }
// console.log(details.phoneNumber[0])
// console.log(details.phoneNumber[1])
// console.log(details.email ) 

//push
// const numbers = [];
// numbers.push(5);
// numbers.push(50);
// console.log(numbers);

// read 5 numbers and find the largest
// var largest = 0;
// for (let i = 0; i < 5; i++){
//     let num = parseInt(prompt("enter a number:"))
//     if(num > largest){
//         largest = num
//     }
// }
// console.log(largest);

// var largest = 0;
// const numbers = [];

// for (let i = 0; i < 5; i++){
//      numbers.push(parseInt(prompt("enter a number:"))) 

// }
largest = numbers[0];
for (let i = 0; i < 5; i++){
console.log(largest);

//UPPERCASING
var names = ["cat ","apple ","robot"]
 names.forEach(function(e){
 console.log(e.toUpperCase())
})}


