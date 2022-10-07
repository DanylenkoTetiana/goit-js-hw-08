('use strict');
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

//  const iframe = document.querySelector('iframe');
//  const player = new Vimeo.Player(iframe);

let getEl = selector => document.querySelector(selector);
const iframeEl = getEl('#vimeo-player');
const player = new Vimeo(iframeEl);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
console.dir(player);

const onPlay = function (data) {
  console.log(data);
  if (data) localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};
onPlay();

player.on('timeupdate', throttle(onPlay, 1000));

let time = localStorage.getItem(LOCALSTORAGE_KEY);
if (time != null) {
  player.setCurrentTime(time);
}
