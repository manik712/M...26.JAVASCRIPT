


document.getElementById('btn-deposit').addEventListener('click',function(){
  
  
 const depositField = document.getElementById('deposit-field');
 const newDepositAmountString = depositField.value;
 const newDepositAmount = parseFloat(newDepositAmountString);
//  console.log(depositAmount);

 const  depositTotalElement = document.getElementById('deposit-total');
 const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
//  console.log(depositTotal);
 const currentDepositTotal = newDepositAmount + previousDepositTotal;

depositTotalElement.innerText = currentDepositTotal;

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalStrings = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalStrings);
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

balanceTotalElement.innerText = currentBalanceTotal;
depositField.value = '';

})


