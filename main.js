
// const form = document.getElementById('form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const phoneInput = document.getElementById('phone');
// const messageInput = document.getElementById('message');


// const submitButton = document.getElementById('submit').querySelector('button');
// submitButton.addEventListener('click', (event) => {
  
//   event.preventDefault();

  
//   let errors = false;
//   const nameValue = nameInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const phoneValue = phoneInput.value.trim();
//   const messageValue = messageInput.value.trim();

//   if (!nameValue) {
//     alert('Please enter your name.');
//     errors = true;
//   }

//   if (!emailValue) {
//     alert('Please enter your email address.');
//     errors = true;
//   } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
//     alert('Please enter a valid email address.');
//     errors = true;
//   }

//   if (!phoneValue) {
//     alert('Please enter your phone number.');
//     errors = true;
//   }

//   if (!messageValue) {
//     alert('Please enter a message.');
//     errors = true;
//   }

  
//   if (!errors) {
//     form.submit();
//   }
// });

var nameError =document.getElementById('name-error');
var emailError =document.getElementById('email-error');
var phoneError =document.getElementById('phone-error');
var messageError =document.getElementById('message-error');
var submitError =document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('name').value;

  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>'
  return true;
}



function validatePhone(){
  var phone = document.getElementById('phone').value;

  if(phone.length == 0){
    phoneError.innerHTML = 'Phone no is invalid';
    return false;
  }
  if(phone.length !== 10){
    phoneError.innerHTML = 'Phone no is invalid'
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Phone no is invalid'
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-check"></i>'
  return true;
}

function validateEmail(){
  var email = document.getElementById('email').value;

  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  )){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-check"></i>'
  return true;
}