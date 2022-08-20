function isPalindrome(x) {
    const array = x.toString().split('');

    let reverseArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(parseInt(array[i]));
    }

    let reverseNumber = parseInt(reverseArray.join(''))

    if (x === reverseNumber) {
        return true
    } return false;
}


function isPalindrome2(x) {
    const array = x.toString().split('');

    let reverseNumber = parseInt(array.reverse().join(''));

    if (x === reverseNumber) {
        return true
    } return false;
}

function isPalindrome3(x) {
    let reverseNumber = parseInt(Array.from(String(x)).reverse().join(''));

    if (x === reverseNumber) {
        return true
    } return false;
}

console.log(isPalindrome3(121));