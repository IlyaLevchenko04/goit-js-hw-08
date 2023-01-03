import Player from '@vimeo/player';
import throttle from'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME_KEY = 'timeKey';

player.setCurrentTime(localStorage.getItem(TIME_KEY) || 0);

function onPause(evt){
    const time = evt.seconds;
    localStorage.setItem(TIME_KEY, JSON.stringify(time));
}






player.on("timeupdate", throttle(onPause, 1000));



