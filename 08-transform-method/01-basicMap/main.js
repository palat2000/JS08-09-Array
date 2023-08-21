const array1 = [1, 2, 30, 400];
const newArray1 = array1.map((x) => x * 2);

const array2 = [1, 2, 3, 4];
const newArray2 = array2.map((x) => String(x));

const array3 = [1, "1", 2, {}];
const newArray3 = array3.map((x) => typeof x);

const array4 = ["apple", "banana", "orange"];
const newArray4 = array4.map((x) => x.toUpperCase());

const array5 = [1, 3, 4, 5, 6, 7, 8];
const newArray5 = array5.map((x) => (x % 2 == 0 ? "even" : "odd"));

const array6 = [1, -3, 2, 8, -4, 5];
const newArray6 = array6.map((x) => Math.abs(x));

const array7 = [100, 200.25, 300.84, 400.3];
const newArray7 = array7.map((x) => x.toFixed(2));

const array8 = [0, 5, 10, 7, 6, 5, 0];
const newArray8 = array8.map((x) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Api",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return month[x];
});

const array9 = [1, 16, 81, 256, 625, 1296];
const newArray9 = array9.map((x) => Math.pow(x, 1 / 4));

const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArray10 = array10.map((x) => x.name);

const array11 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArray11 = array11.map((x) => x.age);

const array12 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
const newArray12 = array12.map((x) => `${x.name} ${x.surname}`);

const array13 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
// const newArray13 = array13.map((x) => {
//   let birth = new Date(x.birth);
//   return 2021 - birth.getFullYear();
// });
const newArray13 = array13.map((x) => {
    const newFruitObj = Object.assign({}, x);
    const birthYear = +x.birth.slice(0,4);
    newFruitObj.age = 2021 - birthYear;
    return newFruitObj.age
})

const array14 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
// const newArray14 = array14.map((x) => {
//   let date = new Date(x.birth);
//   let arrayDate = date.toDateString().split(" ");
//   return `<tr><td>${x.name}</td><td>${
//     arrayDate[2]
//   } ${arrayDate[1].toLowerCase()} ${arrayDate[3]}</td></tr>`;
// });
const newArray14 = array14.map((x) => {
    const MONTHS = [
        "Jan",
        "Feb",
        "Mar",
        "Api",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const name = x.name;
    const day = x.birth.slice(-2);
    const monthIndex = x.birth.slice(-5,-3) - 1;
    const year = x.birth.slice(0,4);
    const resultString = `<tr><td>${name}</td><td>${day} ${MONTHS[monthIndex].toLowerCase()} ${year}</td></tr>`
})