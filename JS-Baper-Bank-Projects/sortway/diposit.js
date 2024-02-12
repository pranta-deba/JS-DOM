function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldStrValue = inputField.value;
  const inputFieldValue = parseFloat(inputFieldStrValue);
  inputField.value = "";
  return inputFieldValue;
}

function getElementValuById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementFieldStrValue = elementField.innerText;
  const elementFieldValue = parseFloat(elementFieldStrValue);
  return elementFieldValue;
}

function setElementValueById(elementId, newValue) {
  const elementField = document.getElementById(elementId);
  elementField.innerText = newValue;
}

document.getElementById("dipositAddBtn").addEventListener("click", () => {
  const newDipositAmount = getInputFieldValueById("dipositAddInput");
  const previousDipositBalance = getElementValuById("dipositBalance");
  const newDipositTotal = newDipositAmount + previousDipositBalance;
  setElementValueById("dipositBalance", newDipositTotal);
  const previousBalanceTotal = getElementValuById("totalBalance");
  const newBalanceTotal = previousBalanceTotal + newDipositAmount;
  setElementValueById("totalBalance", newBalanceTotal);
});

document.getElementById("withdrawAddBtn").addEventListener("click", () => {
  const newWithdrawAmount = getInputFieldValueById("withdrawAddInput");
  const previousWithdrawBalance = getElementValuById("withdrawBalance");
  const newWithdrawTotal = newWithdrawAmount + previousWithdrawBalance;
  setElementValueById("withdrawBalance", newWithdrawTotal);
  const previousBalanceTotal = getElementValuById("totalBalance");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setElementValueById("totalBalance", newBalanceTotal);
});
