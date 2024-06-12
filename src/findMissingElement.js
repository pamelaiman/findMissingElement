/** Find the missing elements in array2 missing from array1
 * @param {array} expectedElements
 * @param {array} actualElements
 * @returns {array} missing elements which haven't been found in actual array
 */

function findMissingElement(expectedElements, actualElements) {
    const missingElements = [];

    for (let i = 0; i < expectedElements.length; i++) {
        for (let j = 0; j < actualElements.length; j++){
            if (expectedElements[i] === actualElements[j]) {
                missingElements.push("")
            } else {
                missingElements.push(i)
            }
        }
    }
    return missingElements;
}

export { findMissingElement };










/**
 *         if (string of expectedElements === string of actualElements){
            missingElements.push("")
        } else{
            missingElements.push(string)
        }
 */