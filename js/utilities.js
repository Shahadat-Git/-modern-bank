// get value from input field 
function inputFieldValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
};
// get amount from element
function elementAmount(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementAmount = parseFloat(elementString);
    return elementAmount;
};
// update element value
function addValue(elementId, elementValue){
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
};
