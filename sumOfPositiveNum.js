function sumOfPositiveNumber(arr) {
    return (arr.filter(val => val > 0).reduce((pre, curr) => pre+curr, 0))
}
const arr = [-2,5,-9,5,10]
console.log(sumOfPositiveNumber(arr))