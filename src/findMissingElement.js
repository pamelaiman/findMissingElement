/** Find the missing elements in array2 missing from array1
 * @param {array} expectedElements
 * @param {array} actualElements
 * @returns {array} missing elements which haven't been found in actual array
 */

function findMissingElement(expectedElements, actualElements) {
    const missingElements = [];

    for (let expectedElement of expectedElements){
        if (checkIfExists(expectedElement, actualElements) === false) {
            missingElements.push(expectedElement);
        } 
    }
    return missingElements;
}

function checkIfExists (element, inputArray){
    for (let i = 0; i < inputArray.length; i++){
            if (inputArray[i] === element){
                return true;
            } 
    }
    return false;
}

export { findMissingElement, checkIfExists };





/**
 *         if (string of expectedElements === string of actualElements){
            missingElements.push("")
        } else{
            missingElements.push(string)
        }

                for (let j = 0; j < actualElements.length; j++){
            if (expectedElements[i] === actualElements[j]) {
                missingElements.push("")
            } else {
                missingElements.push(i)
            }
        }
 */