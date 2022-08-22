function lengthOfLastWord(s) {
    let splitString = s.trim().split(" ");
    return splitString[splitString.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"))