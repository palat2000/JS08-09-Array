let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const result = arr.reduce((acc,item, index) => {
    if(index == 0) {
        acc.max = item;
        acc.min = item;
    }else {
        acc.max = Math.max(acc.max,item);
        acc.min = Math.min(acc.min,item);
    }
    return acc
},{});