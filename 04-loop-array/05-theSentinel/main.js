const arrNum = [];
while (true) {
    let num = +prompt("Enter number");
    if(!num) break;
    arrNum.push(num);
}
let sum = 0;
arrNum.forEach(x=>sum+=x);
alert(sum)