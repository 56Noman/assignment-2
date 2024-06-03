document.querySelector(".withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.querySelector(".withdraw-filed");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  

  const withdrawTotalElement = document.querySelector(".withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  

  const totalWithdraw = previousWithdrawTotal + newWithdrawAmount;
  
  
  const balanceTotalElement = document.querySelector(".balance-total");
  const previousBalanceString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceString);

  

  //if previousWithdrawTotal + newWithdrawAmount > previousBalanceTotal
  if (newWithdrawAmount <= previousBalanceTotal ) {
    withdrawTotalElement.innerText = totalWithdraw;

  } else {
    withdrawTotalElement.innerText = previousWithdrawTotal;
  }

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  if (currentBalanceTotal >= 0) {
    balanceTotalElement.innerText = currentBalanceTotal;
  } else {
    alert("Sorry! You Don't have sufficient balance!!");
  }

  withdrawField.value = "";
  
  
});
