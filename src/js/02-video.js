'user strict';

let getEl = selector => document.querySelector(selector);
const iframeEl = getEl('#vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
console.log(iframeEl);
iframeEl.addEventListener('timeupdate', saveTime);
function saveTime(event) {
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
}
