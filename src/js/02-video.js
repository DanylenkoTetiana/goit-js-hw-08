'user strict';
import player from '@vimeo/player';

let getEl = selector => document.querySelector(selector);
const iframeEl = getEl('#vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
console.log(iframeEl);
iframeEl.addEventListener('timeupdate', saveTime);
function saveTime(event) {
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
}
console.log(iframeEl.frameborder);
// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('timeupdate ', onPlay);

// player.on('timeupdate ', function (data) {
//   // data is an object containing properties specific to that event
// });
