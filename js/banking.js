//customer input functionality
function inputValue(inputid) {
  const inputId = document.getElementById(inputid);
  const inputValue = parseFloat(inputId.value);
  //clear section
  inputId.value = "";
  return inputValue;
}
// deposit,withdraw functionality
function addedInput(input, customerInput) {
  const inputAmmountText = document.getElementById(input);
  const previousAmmount = parseFloat(inputAmmountText.innerText);
  inputAmmountText.innerText = previousAmmount + customerInput;
}
// balance functionality
function balanceControl(inputValue, isAdd) {
  const balanceAmmountText = document.getElementById("balance-ammount");
  const previousAmmount = parseFloat(balanceAmmountText.innerText);
  if (isAdd == true) {
    balanceAmmountText.innerText = previousAmmount + inputValue;
  } else {
    balanceAmmountText.innerText = previousAmmount - inputValue;
  }
}
//deposit functionality
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //take depositInputvalue function
    const depoInputValue = inputValue("deposit-input");
    // added input value to html
    addedInput("deposit-ammount", depoInputValue);
    //balance ammount
    balanceControl(depoInputValue, true);
  });
//withdraw functionality
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //take withdrawInputvalue function
    const inputAmmount = inputValue("withdraw-input");
    // added input value to html
    addedInput("withdraw-ammount", inputAmmount);
    //balance reduce
    balanceControl(inputAmmount, false);
  });
