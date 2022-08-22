function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        console.log(digits, digits[i])

        if (digits[i] <= 9) {
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};

console.log(plusOne([1,2,3,4,5,6,7,8,9]))