// var typed=new Typed(".input",{
//     strings:["Flutter Developer","UI/UX Designer","Web App"],
//     typedSpeed:70,
//     backSpeed:55,
//     loop:true
// })
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

// Add event listener to form submit button
const submitButton = document.getElementById('submit').querySelector('button');
submitButton.addEventListener('click', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Validate form inputs
  let errors = false;
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (!nameValue) {
    alert('Please enter your name.');
    errors = true;
  }

  if (!emailValue) {
    alert('Please enter your email address.');
    errors = true;
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    alert('Please enter a valid email address.');
    errors = true;
  }

  if (!phoneValue) {
    alert('Please enter your phone number.');
    errors = true;
  }

  if (!messageValue) {
    alert('Please enter a message.');
    errors = true;
  }

  // If no errors, submit form
  if (!errors) {
    form.submit();
  }
});