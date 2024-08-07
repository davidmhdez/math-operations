/**
 *  Validate if all params are numbers
 *  @param {...number} numbers
 */
const numberValidation = (...numbers) =>{
    if(numbers.some(number=> typeof(number) !== 'number')){
        throw new Error(`Some numbers is not valid`);
    }
}

/**
 * this method subtract 2 numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
const subtract = (firstNumber, secondNumber) =>{
    numberValidation(firstNumber, secondNumber);
    return firstNumber - secondNumber;
}

/**
 * this method sum 2 numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
const add = (firstNumber, secondNumber) =>{
    numberValidation(firstNumber, secondNumber);
    return firstNumber + secondNumber;
}

module.exports = {
    add,
    subtract
}