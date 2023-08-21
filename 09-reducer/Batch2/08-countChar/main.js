let str = 'I live in Thailand';
const word = str.split(" ").join("").toLowerCase()

const result = word.reduce((acc,item) => {
    if(acc[item]){
        acc[item]++
    }else {
        acc[item] = 1;
    }
    return acc
},{})

