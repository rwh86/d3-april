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

// 3. Once triggered, manipulate the element

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

// Containers
// Array
var my_array = [1, 2, 3];
my_array.push(4);
console.log(my_array);
console.log(my_array[1]);
my_array.pop();
console.log(my_array);

// Object
var my_object = {'first_number': 33, "second_number": 55};
console.log(my_object);
console.log(my_object.first_number);

my_object.third_number = 77;
console.log(my_object);

// Nesting
var cat1 = {
  name: "fluffy",
  age: 8,
  weight: 5
};

var cat2 = {
  name: "Catty McCatface",
  age: 1,
  weight: 4
};

console.log(cat1, cat2);

var my_cats = [cat1, cat2];

console.log(my_cats);

// Exercise: make an array of your own

var dad = {
  name: "Robert",
  age: 37
}

var mum = {
  name: "Clarissa",
  age: 31
}

var son = {
  name: "Quentin",
  age: 0
}

var my_family = [dad, mum, son];

console.log(my_family);
my_family.push({ name: "future child", age: -1 });

console.log(my_family[3]);

my_family[0].health=0.5;

// Namespaces

var old_array = [1,2,3];
var new_array = old_array;

console.log(old_array);
console.log(new_array);

var new_array = old_array.map(function(array_element){
  return array_element;
});

new_array[1]=55;

console.log(old_array);
console.log(new_array);

// Exercise: Use map to make a new array that is all the old elements + 10

var plus_ten = old_array.map(function(element){
  return element+10;
});
console.log(plus_ten);


// Get names

var my_family_names = my_family.map(function(person){
  return person.name;
});
console.log(my_family_names);

// Filter

var young_family_members = my_family.filter(function(person){
  return person.age < 10;
});
console.log(young_family_members);
