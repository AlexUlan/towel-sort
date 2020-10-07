// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let gluedArray = [];
    matrix.forEach((element, index) => {
        let temp = index % 2 !== 0 ? element.reverse() : element;
        gluedArray = [...gluedArray, ...temp];
    });
    return gluedArray;
};
