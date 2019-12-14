"use strict";
const deleteAllPointedElementsFromArray = (array, pointedElement) => {
    return array.filter((elementOfArray) => elementOfArray !== pointedElement);
};
// console.log(deleteElementsFromArray([1,2,3,4,1,2,3,1,1,1,], 1)); // Tested
const insertElementOnCertainPositionInArray = (elementToBeInserted, indexOfTheElementInTheArray, array) => {
    if (indexOfTheElementInTheArray > array.length) {
        return `${indexOfTheElementInTheArray} is bigger that the array.length, which is ${array.length}, please add correct position`;
    }
    if (indexOfTheElementInTheArray < 0) {
        return `${indexOfTheElementInTheArray} is a negative number, arrays does not have negative indexes, please add positive index for your positionOfTheElementInTheArray argument`;
    }
    array.splice(indexOfTheElementInTheArray, 0, elementToBeInserted);
    return array;
};
const operationsOverAnArray = (array, deleteObject, insertObject) => {
    if (deleteObject.isDeleteElementOperation) {
        return deleteAllPointedElementsFromArray(array, deleteObject.pointedElement);
    }
    else if (insertObject.isInsertOperation) {
        return insertElementOnCertainPositionInArray(1, 0, array);
    }
    return array;
};
console.log(operationsOverAnArray([2, 3, 4], { isDeleteElementOperation: false, pointedElement: 0 }, { isInsertOperation: true, elementToBeInserted: 1, indexOfTheElementInTheArray: 0 })); //TESTED!
console.log(operationsOverAnArray([1, 2, 1, 3, 4, 1], { isDeleteElementOperation: true, pointedElement: 1 }, { isInsertOperation: true, elementToBeInserted: 1, indexOfTheElementInTheArray: 0 })); //TESTED!
//# sourceMappingURL=2Ex.ChangeArray copy.js.map