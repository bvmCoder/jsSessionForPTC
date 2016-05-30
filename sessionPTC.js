'use strict';
/*
var box = {};
box.material = "CardBoard";
// they both are same 
// box["material"] = "CardBoard";

console.dir(box); // it will print box object

var cb = box.material;

console.log(cb);

box.material = "Titanium";

console.log(box["material"]);

console.log(cb); // storing things by Value


console.log(box.size); // undefined

var keyFunc = function keyFunc() {
    return "material";
};

console.log(box[keyFunc()]);


var key = 'material';

box['key']; // undefined

console.log(box.key); // don't use dot notation with the variable


var box = {};

box['material'] = 'CardBoard';
box[0] = 'Empty Box';
box['^&*'] = 'Test Here';

console.dir(box);

*/

/*

DOT Notation
strings works
numbers doesn't work
Quotations doesn't work
Weired Characters doesn't work
Expressions doesn't work

Brackets Notation

"strings" work
'Weird Characters' works

without the quotation mark
variables work
numbers work
expressions work

*/


// we can store anything in the object

var box = {};

box["material"] = "CardBoard";

box["size"] = {
    "height": 2,
    "width": 80
};

//console.log(box["size"]["height"]);
//console.log(box['size']['width']);

box.area = function area() {
    return box.size.height * box.size.width;
};

//console.log(box);


for (var prop in box) {
	//console.log(prop);
	console.log(box[prop]);
}
