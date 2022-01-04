var a;
var b = 1;
var c = "c";
let d = 0.1;
let e = "ee";
const nums = [];
const cars = {};
const h = 13;

function addNums() {
  var g = 11;
  let f = 7;
  console.log(b + f);
}

function assignConstVar() {
  h = 14;
  console.log(h);
}

addNums();

console.log(a);
console.log(b + c);
console.log(c + e);
console.log(c + d);

assignConstVar();

console.log(g);
console.log(f);
