('use strict');
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
let getEl = selector => document.querySelector(selector);
const formEl = getEl('.feedback-form');
const emailEl = getEl('input');
const textareaEl = getEl('textarea');
const formData = {};

updateForm();

formEl.addEventListener('input', throttle(handlerInput, 500));
formEl.addEventListener('submit', handlerSubmit);

function handlerInput(event) {
  formData.email = emailEl.value;
  formData.message = textareaEl.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function handlerSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  const informs = localStorage.getItem(LOCALSTORAGE_KEY);
  console.log(JSON.parse(informs));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function updateForm() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const informs = localStorage.getItem(LOCALSTORAGE_KEY);
    const objectValue = JSON.parse(informs);
    emailEl.value = objectValue.email || '';
    console.log(emailEl.value);
    textareaEl.value = objectValue.message || '';
    console.log(textareaEl.value);
  }
}

// function handlerInput(event) {
//   localStorage.setItem(
//     LOCALSTORAGE_KEY,
//     JSON.stringify({ email: emailEl.value, message: textareaEl.value })
//   );
// }
