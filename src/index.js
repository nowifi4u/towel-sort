module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix)) return [];
    const result = [];
    matrix.forEach((subarr, idx) => {
        if (idx % 2) result.push(...subarr.reverse());
        else result.push(...subarr);
    });
    return result;
}
