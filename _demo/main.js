// Declaration
const name = ["pond", "pond", "pond", "pond"];

console.log(name);

const test = new Array(123, 321, 213, 231);

console.log(test);

// Access

console.log(name[0]);

//Update

name[0] = "Gold";
console.log(name[0]);

// ถ้า update ใน index ที่ไม่มีอยู่ == add

name[10] = "michael";
console.log(name);

// Delete
delete name[1];
console.log(name[1]);
console.log(name);

// basic Property and Method of Array
console.log(name.length);

// Method
const animals = ["Spider", "Cat", "Dog", "Elephant"];
animals.push("Tiger");
console.log(animals);

// Immutable = เปลี่ยนแปลงค่าไม่ได้
// Mutable = เปลี่ยนแปลงค่าได้

// push ทำให้ array mutate array ยาวขึ้น

//shift, unshift จะช้ากว่า push, pop

// loop

for (let index in animals) {
  console.log(index, animals[index]);
}

for (let item of animals) {
  console.log(item);
}

// Aside Topic : Higher Order Function
function add(x, y) {
  return x + y;
}
// Function expression : FN as a value
const a = console.log;
const b = alert;

// สร้าง Function รับ parameter เป็น function
function addAndShow(x, y, showFn) {
  let result = x + y;
  showFn(`result is ${result}`);
  return result;
}

function show(result) {
  console.log(result);
}

addAndShow(5, 10, show);

//cook : Higher Order Function (ฟังก์ชันที่รับฟังก์ชันเป็น parameter)
//fn1,fn2,fn3 : callback!!!!!
function cook(fn1, fn2, fn3 = function () {}) {
  fn1();
  fn2();
  fn3();
}
function step1() {
  console.log("Prepare ingredient");
}
function step2() {
  console.log("Cooking");
}
function step3() {
  console.log("Serve");
}

cook(step1, step2);

//forEach run ตามจำนวนสมาชิกใน array
//SYNTAX : array.forEach(callback)
const item = ["Football", "Bag", "Hello"];

item.forEach(function (x) {
  console.log(x);
});

item.forEach((x, y, z) => console.log(x, y, z));

let sum = 0;
test.forEach(x=>sum+=x)
console.log(sum)