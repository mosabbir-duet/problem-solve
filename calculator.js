const prompt=require("prompt-sync")({sigint:true});

function calculator(val1, val2, operator) {
    switch(operator) {
        case '+': return val1 + val2
        case '-': return val1 - val2
        case '*': return val1 * val2
        case '/': try {
            return val1 / val2
        }
        catch(error) {
            return "Can't divide by 0!!!"
        }
    }
}


const firstVal = prompt("Enter a first value = ")
const secondVal = prompt("Enter a second value = ")
const operator = prompt("Enter an operator {+,-,*,/} = ")

console.log(firstVal, secondVal, operator, firstVal+secondVal)

console.log(calculator(parseFloat(firstVal), parseFloat(secondVal), operator))
