let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce((acc,item,index) =>{
    if(acc[item] !== undefined){
        acc[item]++
    }else {
        acc[item] = 1;
    }
    return acc
},{})