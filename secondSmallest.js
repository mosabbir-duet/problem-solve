function secondSmallestValue(arr) {
    arr.sort((a,b) => a - b)
    return arr[1]
}

const arr = [14,5,99,16,87,10,13]
console.log(secondSmallestValue (arr))