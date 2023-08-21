const array1 = [9, 17, 23, 5];
const newArray1 = array1.filter((x) => x > 10);

const array2 = [1, 2, 3, 4];
const newArray2 = array2.filter((x) => x % 2 !== 0);

const array3 = [1, "1", 2, {}];
const newArray3 = array3.filter((x) => typeof x === "number");

const array4 = ["apple", "banan", "orange", "pineapple", "watermelon"];
const newArray4 = array4.filter((x) => x.length > 6);

const array5 = [1, -3, 2, 8, -4, 5];
const newArray5 = array5.filter((x) => x > 0);

const array6 = [1, 3, 4, 5, 6, 7, 8];
const newArray6 = array6.filter((x) => x % 3 === 0);

const array7 = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
const newArray7 = array7.filter((x) => x[0] === "E");

const array8 = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
const newArray8 = array8.filter((x) => x === x.toUpperCase());

const array9 = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
const newArray9 = array9.filter((x) => x.toLowerCase().includes("buri"));

const array10 = [
  { name: "Ben", age: 14 },
  { name: "Phil", age: 18 },
  { name: "John", age: 32 },
  { name: "Ann", age: 16 },
  { name: "Paul", age: 24 },
];
const newArray10 = array10.filter((x) => x.age >= 18);

const array11 = [
  { id: 1, name: "Pepsi" },
  { id: 2, name: "Mirinda" },
  { id: 3, name: "Coke" },
  { id: 4, name: "Fanta" },
  { id: 5, name: "Sprite" },
];
const newArray11 = array11.filter((x) => x.id !== 4);

const array12 = [
  { name: "John", birth: "2001-07-31" },
  { name: "Jack", birth: "1990-06-24" },
  { name: "Jim", birth: "1984-12-13" },
  { name: "Jeff", birth: "1996-02-05" },
  { name: "Joe", birth: "2002-06-13" },
];
const newArray12 = array12.filter((x) =>{
    const month = +x.birth.slice(-5,-3);
    return month !== 6;
})
