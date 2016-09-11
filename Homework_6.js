// Javascript Cheat sheet 

// Example of variables : variables are containers for values 

var name = "Vannessa";

// Can be a one of three datat types: a string, or number... 

var numberOfThings = 10;

// or a boolean

var isNessapopCool = true;


/*The Console is a built-in tool in your browser where you can run
JavaScript code directly. It also allows you to see the output of JavaScript
you write in your editor

• Alerts are "pop-ups". You can see the output in a pop-up window as soon
as the alert() function gets called

• Logging to HTML means to change the content of an HTML element with
content of your choice, which could be script output
*/


alert ("Hello World");

console.log ("testing123");

/*You can also change the "innerHTML" of any element, meaning what is contained
inside of it:*/

function change(){
document.getElementById('el').innerHTML = "NEW TEXT";
}
// <div onclick="change()" id="el">CHANGE ME</div>

/* Arrays are used to hold a collection of data, of any data type.
This one is full of strings:*/
// ["Snoopy", "Charlie Brown", "Patty", "Violet"];

/*•They can hold multiple data types:*/

// [11, 15, 25, 48, 79, "elephant"];

// Arrays can also be stored in variables:
var class_names = ["Julie", "Sophie", "Rob", "John"];


//two test if two stings are true you use three equal signs 

"stringone" === "string two"; 
// will return false


//To test if two strings are NOT equal:

"stringone" !== "string two"; 
// will return true


//To test if one number is greater than another:
5 > 10; > false
//<, >, <=, >= are also valid comparison operators

/*Functions
•A function is a way to encapsulate code for later use • It can take arguments, which are used as variables inside the
function
• It usually returns a value, which can be used later on or
displayed immediately*/






// logic 