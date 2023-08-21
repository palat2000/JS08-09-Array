let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

const result = flattened.reduce((acc,item)=>{
    for (let i of item) acc.push(i);
    return acc

    // return [...acc, ...item]
},[])

console.log(result)