const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    let results;
    let part;

    if (Array.isArray(arr)) {
        if (arr.length !== 0) {
            arr.forEach((item, i) => {
                {
                    switch (arr[i]) {
                        case '--discard-prev':
                            results = arr.splice(i, 2);
                            ;
                            break
                        case '--discard-next':
                            results = arr.splice(i, 2);
                            return (results);
                            break
                        case '--double-prev':
                            part = arr.slice(i - 1, i);
                            results = arr.slice().splice(i, 1).splice(i, 0, +part);
                            break
                        case '--double-next':
                            part = arr.slice(i + 1, i + 2);
                            results = arr.slice().splice(i, 1).splice(i, 0, +part);
                            break
                        default:
                            return arr;
                            break
                    }
                }
            });
        } else {
            results = [];
        }
    } else {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
    return results;
}

module.exports = {
    transform
};
