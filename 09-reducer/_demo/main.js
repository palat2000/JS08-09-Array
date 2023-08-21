const num = [4,5,6,7];

const sum = num.reduce((acc,current) => acc+current,0)
const mul = num.reduce((acc,current) => acc*current,1)

const newArr = num.reduce((acc,current) => acc.push(current*2),[])