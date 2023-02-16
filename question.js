//create a variable called carNAme ,assign the value volvo to it
let carName = "volvo";
console.log(carName)

//alert the remainder when 15 is divided by 9
var remainder = 15%9;
alert("the reminder when 15 is divided by 9 is :"+remainder);

//use the correct assignment operator that will result in x being 50.if x=10 ,y=5=.x[??]y   
let x = 10;
let y = 5;
x *= y

//making a function display "hello"in the inner html of an element with the "demo"
document.getElementById("demo")
.innerHTML = "Hello";


//creating a object called person name and than accesing the obejct to give  alert
let person = {
    name: "Jhon",
    age: 50,
}
alert(person.name +" is "+ person.age);
//creating the object by using the constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
}
const person = new Person("jhon",50);
alert(person.name +" is "+ person.age);

//repalce a world hello to welcome
const string = "hello"
const newstring =string.replace("hello","welcome");
console.log("newstring");

//alert the number of array using correct array method
const fruits = ["mango","banana","orange","grape"];
alert (fruits.length);
//add kiwi to the string
const fruits = ["mango","grapes,banana"];
fruits.push("kiwi");
console.log(fruits);
//alert neither if the fruit is neither banana or apple
switch(fruits){
    case "banana":
        alert("it is a banana");
     break;
        case "apple":
     alert("it is a apple");
     break;
 default:
    alert("neither");
    break;   
}