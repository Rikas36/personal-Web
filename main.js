
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');


const submitButton = document.getElementById('submit').querySelector('button');
submitButton.addEventListener('click', (event) => {
  
  event.preventDefault();

  
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

  
  if (!errors) {
    form.submit();
  }
});