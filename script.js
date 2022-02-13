const songs = {
    'main' : './assets/audio/main.mp3',
    'forest': './assets/audio/forest.mp3',
    'sea': './assets/audio/sea.mp3',
    'bonfire': './assets/audio/fire.mp3',
    'rain': './assets/audio/rain.wav'
}

const main = document.querySelector('.main');
const navList = document.querySelector('.nav-list');
const btns = document.querySelectorAll('.nav_item');
const playBtn = document.querySelector('.button_play');
const audio = new Audio();
let pausedTime = 0;
let isInit = true;

function playAudio(e){

    if(e.target.classList.contains('button_play') && playBtn.classList.contains('pause')){
        pausedTime = audio.currentTime;
        pauseAudio()
        playBtn.classList.remove('pause');
    }
    else if(!e.target.classList.contains('button_play')){
        btns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        main.style.setProperty('background-image' , `url(./assets/img/${e.target.dataset.sound}.jpg)`);
        isInit = false;
        audio.src = `${songs[e.target.dataset.sound]}`;
        audio.play();
        audio.currentTime = 0;
        playBtn.classList.add('pause');
    }
    else{
        if(isInit){
            audio.currentTime = 0;
            audio.src = `${songs[e.target.dataset.sound]}`;
        }
        else{
            audio.currentTime = pausedTime;
        }
        audio.play();
        playBtn.classList.add('pause');
    }

}

function pauseAudio() {
    audio.pause();
}

btns.forEach(btn => btn.addEventListener('click', (btn) => {
    playAudio(btn)
}));
playBtn.addEventListener('click', (e) => playAudio(e));