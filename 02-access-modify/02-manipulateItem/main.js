const styles = ["Jazz","Blues"];
styles[styles.length] = "Rock-n-Roll";
styles[1] = "Classic";
delete styles[0];
console.log(styles.length);