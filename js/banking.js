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
function balanceAmmount() {
  const balanceAmmountText = document.getElementById("balance-ammount");
  const previousAmmount = parseFloat(balanceAmmountText.innerText);
  return previousAmmount;
}
// balance functionality
function balanceControl(inputValue, isAdd) {
  const balanceAmmountText = document.getElementById("balance-ammount");
  debugger;
  const previousAmmount = balanceAmmount();
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
    if (depoInputValue > 0) {
      // added input value to html
      addedInput("deposit-ammount", depoInputValue);
      //balance ammount
      balanceControl(depoInputValue, true);
    } else {
      alert("Please input positive number you want to add your account");
    }
  });
//withdraw functionality
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //take withdrawInputvalue function
    const inputAmmount = inputValue("withdraw-input");
    const totalBalance = balanceAmmount();
    if (inputAmmount > 0 && inputAmmount <= totalBalance) {
      // added input value to html
      addedInput("withdraw-ammount", inputAmmount);
      //balance reduce
      balanceControl(inputAmmount, false);
    } else {
      alert(
        "Please input valid available ammount you want to withdraw from your account"
      );
    }
  });