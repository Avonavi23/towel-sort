// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  
  const normalizeMatrixArr = matrix.map((item, i) => {
    if ((i + 1) % 2 === 0) {
      return item.reverse();
    }
    return item;
  })
  
  return normalizeMatrixArr.reduce((acc, item) => [...acc, ...item],[]);
}