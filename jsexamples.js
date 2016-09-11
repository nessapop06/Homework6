var x = 3
var y = 4
var a = "vannessa"
var b = "is cool"

console.log( x + y );
console.log( a + " " + b );



var age = 11;

if (age <= 10) {
  // allow the user to see the wine site
  alert("your variable was less than ten!");
} else {
  // redirect the user to welch's grape juice site
  alert("sorry"+" "+ age +" " + "is more than 10");
}



var age = 8;

if (age <= 10) {
  // allow the user to see the wine site
  alert("your variable was less than ten!");
} else {
  // redirect the user to welch's grape juice site
  alert("sorry"+" "+ age +" " + "is more than 10");
}

	
var eataly = "spaghetti";
var momofuku = "ramen";

if (eataly === momofuku) {
  // allow the user to see the wine site
  alert("yes thats correct");
} else {
  // redirect the user to welch's grape juice site
  alert("no these aren't the same");
}

function openDoor(doorNumber) {
  if (doorNumber === 1) {
    return "banana";
  } else if (doorNumber === 2) {
    return "a new car";
  } else if (doorNumber === 3) {
    return "a jar of pennies";
  } else {
    return "that's not a door number";
  }
}

console.log(openDoor(2));
console.log(openDoor(3));
console.log(openDoor("cat"));
