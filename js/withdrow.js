document.getElementById('btn-withdraw').addEventListener('click',function(){

  // console.log('clicked');


  const withDrawField = document.getElementById('withDrow-field');
  const newWithDrowAmountString = withDrawField.value;
  const newWithDrowAmount = parseFloat(newWithDrowAmountString);
  // console.log(newWithDrowAmount);


  const withDrawTotalElement = document.getElementById('withdrow-total');
  const withDrawTotalString = withDrawTotalElement.innerText;
  const previousWithDrawTotal = parseFloat(withDrawTotalString);
  // console.log(previousWithDrawTotal);



  const currentWithDrawTotal = newWithDrowAmount + previousWithDrawTotal ;
       withDrawTotalElement.innerText = currentWithDrawTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const balanceTotalElementString =balanceTotalElement.innerText;
  const   preBalanceTotalElementAmount = parseFloat(balanceTotalElementString);
  // console.log(preBalanceTotalElementAmount);
  const newBalanceTotal = preBalanceTotalElementAmount  - newWithDrowAmount ;

   balanceTotalElement.innerText = newBalanceTotal;



       withDrawField.value= '';
}) 




