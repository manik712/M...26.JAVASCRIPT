document.getElementById('btn-submit').addEventListener('click', function(){



  const emailField = document.getElementById('user-email');
  const email =emailField.value;
  


   const passwordFiled = document.getElementById('user-password');
   const password =passwordFiled.value;
   

if (email==='sontan@bap.com' && password ==='secret'){
  window.location.href = 'bank.html';
}else{
  alert('invalid user');
}


})
