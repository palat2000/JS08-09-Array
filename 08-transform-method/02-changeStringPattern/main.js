function changeStringPattern(str) {
    const string = str.split("");
    let index = string.indexOf("-");
    string.splice(index,2, string[index+1].toUpperCase())
    return string.join("");
}