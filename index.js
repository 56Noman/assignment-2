document.querySelector('.deposit-btn').addEventListener('click',function(){
    const depositField = document.querySelector('.deposit-filed');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

   const depositTotalElement = document.querySelector('.deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
console.log(previousDepositTotalString);
   
   const currentDepositTotal = previousDepositTotal + newDepositAmount;

   depositTotalElement.innerText = currentDepositTotal;
  
    const balanceTotalElement = document.querySelector('.balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat( previousBalanceString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})