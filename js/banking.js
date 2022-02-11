//Deposit functionality
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depoInputValue = parseFloat(depositInput.value);
    console.log(depoInputValue);
    const depositAmmount = document.getElementById("deposit-ammount");
    const previousAmmount = parseFloat(depositAmmount.innerText);
    console.log(previousAmmount);
    depositAmmount.innerText = previousAmmount + depoInputValue;
    //balance ammount
    const balanceAmmount = document.getElementById("balance-ammount");
    const previousBalance = parseFloat(balanceAmmount.innerText);
    balanceAmmount.innerText = previousBalance + depoInputValue;
    //clear section
    document.getElementById("deposit-input").value = "";
  });
//withdraw functionality
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmmount = document.getElementById("withdraw-ammount");
    const previousAmmount = parseFloat(withdrawAmmount.innerText);
    const inputAmmount = parseFloat(withdrawInput.value);
    //outputview
    withdrawAmmount.innerText = previousAmmount + inputAmmount;
    //balance reduce 
    const balanceAmmount = document.getElementById("balance-ammount");
    const previousBalance = parseFloat(balanceAmmount.innerText);
    balanceAmmount.innerText = previousBalance - inputAmmount;
    const checkAvailability = previousBalance - inputAmmount;
    if (checkAvailability < 0) {
        alert("You haven't enough balance for withdraw.");
        balanceAmmount.innerText = 0;
    }
    //clear input
    withdrawInput.value = "";
  });
