function maxFrequentElement(arr) {
    let maxCount = 0
    let maxElement
    arr.map(val => {
        let count = 0;
        arr.filter(iterateVal => {
            val === iterateVal ? count++ : ""
            
        })
        if(count > maxCount) {
            maxCount = count
            maxElement = val;
        }
    })
    return maxElement
}


const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5]

console.log(maxFrequentElement(arr))