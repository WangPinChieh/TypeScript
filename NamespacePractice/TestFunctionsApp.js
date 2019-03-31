var CommonFunctions;
(function (CommonFunctions) {
    function addNumbers(x, y) {
        return x + y;
    }
    CommonFunctions.addNumbers = addNumbers;
})(CommonFunctions || (CommonFunctions = {}));
///<reference path="../Functions/CommonFunctions.ts" />
function calculate() {
    console.log(CommonFunctions.addNumbers(1, 2));
}
calculate();
