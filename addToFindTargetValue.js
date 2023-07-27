function addToFindTargetValue(sortedArr, targetVal) {
    console.log(sortedArr)
    for(let i = 0 ; sortedArr[i] < targetVal; i++) {
        for(let j = 1; sortedArr[j] < targetVal; j++ ) {
            if(sortedArr[i] + sortedArr[j] === targetVal) return [i,j]
        }
    }
}

const arr = [1,8,6,11,15,3,9]
console.log(addToFindTargetValue(arr.sort((a,b) => a - b), 9))