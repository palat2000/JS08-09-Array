let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

// let str = alphabets.join("");

// let setStr = new Set(str);

// const result = Array.from(setStr)

const result = alphabets.reduce((acc, item) => {
  if (acc.includes(item)) {
    return acc;
  }
  acc.push(item);
  return acc;
}, []);

// const r = alphabets.reduce((acc,char) => {
//     let found = false;
//     for(let c of acc){
//         if(c==char) found = true;
//     }
//     if(!found) acc.push(char);
//     return acc
// },[])
