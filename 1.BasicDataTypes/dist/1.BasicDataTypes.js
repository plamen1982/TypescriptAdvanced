"use strict";
//---------------------------------------------------------------Basic Types---------------------------------------//
let someString = `some value for this string`; //string, number, boolean, object - other tsc types
someString = 'when assign new value to this string but should be string, wow!';
// someString = 1; // if we try to assign other that string tsc will complain with this message as tooltip-> Type '1' is not assignable to type 'string'. UNCOMMENT to see error
//---------------------------------------------------------------ARRAY--------------------------------------------//
let array1 = [];
array1.push('this string will be pushed to the array');
array1.push('and this string also will be pushed to the array');
//array.push(1) //but if you try with number this will not work! tsc will complain with this message as tooltip-> Argument of type '1' is not assignable to parameter of type 'string'. 
//---------------------------------------------------------------Tuple--------------------------------------------//
//-------------Tuple-definition-> Tuple-array with fixed number of elements whose types are known------------------//
let tuple = ['this is the string from the tuple and next elements will be the same as the definition of let tuple otherwise tsc will complain', 1, true, { simpleObjectFromTuple: 'yes this is tuple' }];
//---------------------------------------------------------------Enum--------------------------------------------//
//-------------Tuple-definition-> Gives sets of numeric values more readable names, by default each enum starts at 0------------------//
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["Monday"] = 0] = "Monday";
    DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 1] = "Tuesday";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
;
let day = DaysOfTheWeek;
console.log(`The result here will be 0, ${day.Monday}`);
//---------------------------------------------------------------Any---DO-NOT-USE-PLEASE--------------------------//
//---------------------Any - takes any and all values. It`s a way to escape the strong types---------------------//
let exampleOfAnyType = `this strings type now can be changed from every next single line`;
exampleOfAnyType = true; // there will be no error, basically DO NOT USE any TYPE the whole idea of tsc will disappear
//---------------------------------------------------------------Void--------------------------------------------//
//-----------------------------------------Void - mainly used in functions that return no value------------------//
const greet = (message) => {
    console.log(`This will be message from type string passed from the function. Message: ${message}`);
};
greet('This is a special message and the return type of the function is a void type, type that does not return anything');
//---------------------------------------------------------------Optional data types--------------------------------------------//
//--------------------------------------Optional data types-The optional data types are marked with ?--------------------------//
const functionWithOptionalParameter = (name = 'name', age) => {
    if (age) {
        return `Message: ${name}$! I guess your age is about: ${age}`;
    }
    return `Message: ${name}$!`;
};
console.log(functionWithOptionalParameter('Some Name Here without the age'));
console.log(functionWithOptionalParameter('Some Name Here with the age of the person', 23));
//---------------------------------------------------------------Return data types--------------------------------------------//
//----------------------------Definition-The return data types are marked with : after the braces in function declaration-----//
const returnDataTypes = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};
console.log(`The sum of one + two will be: ${returnDataTypes(1, 2)}`);
//---------------------------------------------------------------Union type--------------------------------------------//
//-----------------------------Definition - combine multiple types in one type with symbol pipe '|'--------------------//
let numberOrBoolean = 1;
numberOrBoolean = true;
numberOrBoolean = 2;
const fullInfo = { firstName: 'Test name 1', phoneNumber: 088832478903427908 };
//# sourceMappingURL=1.BasicDataTypes.js.map