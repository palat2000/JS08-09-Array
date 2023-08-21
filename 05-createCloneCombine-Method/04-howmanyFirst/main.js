function first(arr,n) {
    if (typeof(n)=='string') return "Not a Number!!!";
    else if (!n || n == 1) return arr[0];
    else if (n!=1) return arr.slice(0,n);
}