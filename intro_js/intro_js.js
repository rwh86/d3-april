/*console.log("Hello, world!");

// this is a comment

//variables

var my_variable="Hello Rob";
var my_number=42;
console.log(my_variable);
console.log(my_number);

function my_function (my_arg1, my_arg2) {
  // my code
  console.log(my_arg1+ my_arg2);
}

my_function("hello", "my buddies");

// make a function that does some maths and console logs the output
function multiply( arg1, arg2 ) {
  console.log(arg1*arg2);
}

multiply(5, 10);
*/

// 1. get element into js
var cat_picture = document.getElementById("cat");
var button = document.getElementById("button");
var exercise = document.getElementById("exercise");

// 2. Add event listener
cat_picture.addEventListener("click", function(){
  alert("meow!");
});

button.addEventListener("click", function(){
  var width=cat_picture.clientWidth;
  var height=cat_picture.clientHeight;
  cat_picture.style.width=(width+30)+'px';
  cat_picture.style.height=(height)+'px';
});

exercise.addEventListener("click", function(){
  var width=cat_picture.clientWidth;
  var height=cat_picture.clientHeight;
  cat_picture.style.width=(width-30)+'px';
  cat_picture.style.height=(height)+'px';
});

// 3. Once triggered, manipulate the element
function feed() {
  // get a property 
}
