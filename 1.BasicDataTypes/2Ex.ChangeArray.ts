const deleteAllPointedElementsFromArray = (array: number[], pointedElement: number) => {
  return array.filter((elementOfArray) => elementOfArray !== pointedElement );
}

// console.log(deleteElementsFromArray([1,2,3,4,1,2,3,1,1,1,], 1)); // TESTED

const insertElementOnCertainPositionInArray = (elementToBeInserted: number, indexOfTheElementInTheArray: number, array: number[]) => {

  if(indexOfTheElementInTheArray > array.length) {
    return `${indexOfTheElementInTheArray} is bigger that the array.length, which is ${array.length}, please add correct position`;
  }

  if(indexOfTheElementInTheArray < 0) {
    return `${indexOfTheElementInTheArray} is a negative number, arrays does not have negative indexes, please add positive index for your positionOfTheElementInTheArray argument`;
  }
  
  array.splice(indexOfTheElementInTheArray, 0, elementToBeInserted);
  return array;

}

//console.log(insertElementOnCertainPosition(5, 4, [1, 2, 3, 4, 6])); //TESTED

interface IInsertArgument {
  isInsertOperation: boolean,
  elementToBeInserted: number, 
  indexOfTheElementInTheArray: number

}

interface IDeleteArgument {
  isDeleteElementOperation: boolean,
  pointedElement: number

}

const operationsOverAnArray = (array: number[], deleteObject: IDeleteArgument, insertObject: IInsertArgument) => {
  if(deleteObject.isDeleteElementOperation) {
    return deleteAllPointedElementsFromArray(array, deleteObject.pointedElement);
  } else if(insertObject.isInsertOperation) {
    return insertElementOnCertainPositionInArray(1, 0, array);
  }
  return array;
}

console.log(operationsOverAnArray([2,3,4], {isDeleteElementOperation: false, pointedElement: 0}, { isInsertOperation: true, elementToBeInserted: 1,  indexOfTheElementInTheArray: 0}));     //TESTED
console.log(operationsOverAnArray([1,2,1,3,4,1], {isDeleteElementOperation: true, pointedElement: 1}, { isInsertOperation: true, elementToBeInserted: 1,  indexOfTheElementInTheArray: 0}));    //TESTED

