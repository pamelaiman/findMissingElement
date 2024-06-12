/** Find the missing elements in array2 missing from array1
 * @param {array} expectedElements
 * @param {array} actualElements
 * @returns {array} missing elements which haven't been found in actual array
 */

function findMissingElement(expectedElements, actualElements) {
    const missingElements = [];

    for (let element of expectedElements){
    }
    return missingElements;
}


function checkArrayLength(expectedElements, actualElements) {
    if (expectedElements.length === actualElements.length){
        return []
    }
}

export { findMissingElement, checkArrayLength };





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