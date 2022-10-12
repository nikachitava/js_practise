var arr = ["nika", "vehicle", "car", "football", "youtube", "account"]
var arr1 = ["var", "string", "number", "georgia"]

function findWord(array, word) {
    let isFound = false;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === word) {
            isFound = true
            break
        }
    }
    return (isFound ? "Word found successfully" : "Can't found the word")
}

console.log(findWord(arr1, "number1"))
console.log(findWord(arr, "football"))