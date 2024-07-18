const myform = document.querySelector('#formp');

const user = document.querySelector('#us');

const passw = document.querySelector('#ps');

const ls = document.querySelector('.users');



myform.addEventListener('submit',onSubmit);


function onSubmit(e)
{
  e.preventDefault();

  if(user.value === '' || passw.value==='')
  {
    alert("Enter all the Field");
    user.value='';
    passw.value='';

    
    
  }
  else{
    alert("WELCOME");
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.value} : ${passw.value}`));
    ls.appendChild(li);

    user.value='';
    passw.value='';

   
  }
}
