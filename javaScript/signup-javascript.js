const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const userNameInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#email');
const bDateInput = document.querySelector('#b-date');
const passwordInput = document.querySelector('#password');


const submitButton = document.querySelector('#submit-button');
let flag1 =false;
submitButton.addEventListener('click', (event)=> {
    event.preventDefault();
    if(firstNameInput.value.trim() === ''){
        alert("please enter your name.");
        return;
    }
    if(lastNameInput.value.trim()=== ''){
        alert('please enter your last name.');
        return;
    }
    if(userNameInput.value.trim()=== ''){
        alert('please enter a user name.');
        return;
    }
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(emailInput.value)) {
      alert('Please enter a valid email address');
      return;
    }
   const arr =passwordInput.value.split('')
    if (arr.length <8 ) {
      alert('password must be at least 8 characters.');
      return;
    }
    flag1 =true;
});