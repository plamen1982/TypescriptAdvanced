const sortArrayAcsDscOrder = (arrayToBeSorted: number[], ascOrDcsArg?: string) => {
  if(ascOrDcsArg === 'acs') {
    return arrayToBeSorted.sort((firstElementOfIteration, secondElementOfIteration) => firstElementOfIteration - secondElementOfIteration);
  }
  return arrayToBeSorted.sort((firstElementOfIteration, secondElementOfIteration) => secondElementOfIteration - firstElementOfIteration);
}

console.log(sortArrayAcsDscOrder([3, 2, 5, 9, 0], 'acs'));
console.log(sortArrayAcsDscOrder([3, 2, 5, 9, 0], 'decs'));