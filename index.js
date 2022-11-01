// variable  datatypes operators conditional statements functions loops
// greet("maria")
// var let const


// 1000 lined


// 1000 lines

// string number null undefined array object boolean



let name = "meera unnikrishnan"

let meerage = 22;

let nul = ""

let un;

let issingle = true

let boyfreinds = ["prince","sachin"];

let jain = {
    id:1,
    name:"jain",
    marks:{
        physics:100
    },
    girlfriends:["maria","vismaya"],
    funny:function(name){
        console.log(this.name+" is having fun with "+name)
    }
}
jain.funny('merin')



// let age = 20;
// function greet(name){
//     console.log("good morning "+name)
// }

let add = function(num1,num2){
    return num1+num2;
}
let sum = add(10,20);
console.log('sum is '+sum)
// greet("merin")
let age = 18;
// truthy 1 100
// falsy 0 undefined ""
let data = "dfghjkl"
if(data){
    console.log('you are allowed')
}
else{
    console.log('you are not allowed')
}







let Greet = (name,age) => console.log(name,age);
// html =========dom=======> js
function login(){
    let login_text = document.getElementById("login_text")
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let database = {
        username:"merin",
        password:"pass123"
    }
    
        if(username == database.username & password == database.password){
            login_text.innerHTML = "Success fully logged in";
            // localStorage.setItem("username",username)
            // localStorage.setItem("password",password)

        }
        else{
            login_text.innerHTML = "username is password is wrong";
        }

    }
    // else{
    //     login_text.innerHTML = "Please enter a username and password";
    // 
