// Assignment: JavaScript Hoisting

// Predict the output of the following snippets. Do not plug these into the interpreter.

// Note
// Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, these are ES6 constructs and 
// a huge amount of the world's live JavaScript code is still ES5. Understanding how ES5 hoists var and the rules of 
// scoping are important for every JavaScript developer!


// 1

console.log(hello);
var hello = 'world';
// shows undefined


// 2

var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}
// prints 'magnet'


// 3

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// prints 'super cool'


// 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// prints 'chicken' and then 'half-chicken'


// 5

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// undeclared variable, then prints "chicken", then "fish"
// correction: won't print anything out because of TypeError: mean is not a function (mean hasn't been defined yet)


// 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// prints undefined, then "rock", then "r&b", then "disco"


// 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// prints "san jose", "seattle", "burbank", "san jose"

