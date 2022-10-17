const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let max;
    let count = 0;
    let i = 1;

    while (count < n.toString().length) {
        count++;
        let tmp = parseInt(n / (i * 10)) * i + (n % i);
        if (count === 1) {
            max = tmp;
        }
        if (tmp > max) {
            max = tmp;
        }
        i *= 10;
    }
    return max;
}

module.exports = {
    deleteDigit
};
