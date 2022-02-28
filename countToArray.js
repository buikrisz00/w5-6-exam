/* const countToArray = (firstNumber, lastNumber) => {
    let numbers = [];
    for (let i = firstNumber; i < lastNumber; i++ ){
        numbers.push(`${i}`);
    }
    
    return numbers;
} */

const countToArray = (firstNumber, lastNumber) => Array.from(Array(lastNumber - firstNumber)).map((item, index) => `${firstNumber + index}`)


console.log(countToArray(10, 30));