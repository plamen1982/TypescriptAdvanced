"use strict";
//Input ['Yoghurt', 48, 'Rise', 138, 'Apple', 52]
//Output { Yoghurt: 48, Rise: 138, Apple: 52 }
const transformEveryPairsFromArrayToObjectWithKeyValueProperties = (arrayKeyValuesPairs) => {
    return arrayKeyValuesPairs.reduce((accumulator, currentValue, currentIndex, array) => {
        if (currentIndex % 2 === 0) {
            if (currentIndex === array.length - 1) {
                console.log(accumulator);
                return accumulator;
            }
            else {
                accumulator[currentValue] = array[currentIndex + 1];
                return accumulator;
            }
        }
        return accumulator;
    }, {});
};
console.log(transformEveryPairsFromArrayToObjectWithKeyValueProperties(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])); //TESTED
//# sourceMappingURL=4Ex.Operations.js.map