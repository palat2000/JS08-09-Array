let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];
function getAverageAge(arr) {
    return arr.reduce((acc,item) => acc+item.age,0) / arr.length 
}