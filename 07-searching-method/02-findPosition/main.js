const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

// let num = 0;
let arr = [];

for(let n in alphabets){
    if(alphabets[n] == 'a'){
        arr.push(+n)
    }
}


