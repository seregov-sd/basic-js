const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let compress = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            if (count !== 0) {
                compress += (count + 1).toString() + str[i];
                count = 0;
            } else {
                compress += str[i];
                count = 0;
            }
        }
    }
    return compress;
}

module.exports = {
    encodeLine
};
