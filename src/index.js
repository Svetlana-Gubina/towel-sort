module.exports = function towelSort(matrix) {
    if (arguments.length === 0) {
        return [];
    }

    if (Array.isArray(matrix) && matrix.length === 0) {
        return [];
    }

    const even = (arr) => arr;
    const odd = (arr) => arr.reverse();
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || i % 2 === 0) {
            result.push(even(matrix[i]));
        } else {
            result.push(odd(matrix[i]))
        }
    }

    return result.flat();
}
