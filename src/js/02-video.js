import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME_KEY = 'timeKey';


function onPause(){
    player.getCurrentTime().then(function(seconds) {
            const time = seconds;
            localStorage.setItem(TIME_KEY, JSON.stringify(time));
        }).catch(function(error) {
            console.log(error)
        });
}


function onPlay(){
    player.setCurrentTime(localStorage.getItem(TIME_KEY));
}



player.on("timeupdate", throttle(onPause, 1000));
player.on('play', onPlay)



