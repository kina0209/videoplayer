let rangeVideo = document.querySelector('.range')
let playBtn = document.querySelector('#play-btn')
let hourText = document.querySelector('#hour-text')
let minText = document.querySelector('#minute-text')
let fullHour = document.querySelector('#full-hour')
let fullMin = document.querySelector('#full-min')

let volumeBtn = document.querySelector('#volume-btn')
let muteBtn = document.querySelector('#mute-btn')
let setBtn = document.querySelector('#seting-btn')
let fullScr = document.querySelector('#fullscreen-btn')
let videoPlayer = document.querySelector('#video-player')
let imageHolder = document.querySelector('#image-holder')
let imagePlay = document.querySelector('#image-play')
let videoWrapper = document.querySelector('.video-wrapper')
let videoControl = document.querySelector('.video-control')
let alErt = document.querySelector('.alert')

window.addEventListener('load', () =>{
    rangeVideo.value = 0
    volumeBtn.value = 100
})
window.addEventListener('keydown', checkKeyPress, false);

videoWrapper.addEventListener('mouseover', () =>{
    videoControl.classList.add('active')
    rangeVideo.classList.add('active')
})

videoWrapper.addEventListener('mouseleave', () =>{
    videoControl.classList.remove('active')
    rangeVideo.classList.remove('active')
})

setBtn.addEventListener('click', () =>{
    alErt.classList.toggle('active')
})


videoPlayer.addEventListener('load',() =>{
    fullMin.textContent = Math.floor( videoPlayer.duration % 60)
})

videoPlayer.addEventListener('dblclick', () => {
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen();
    }
})
fullScr.addEventListener('click', () => {
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen();
    }
})

function videoPosition (){
    if(videoPlayer.currentTime > 59) {
        hourText.textContent = Math.floor(videoPlayer.currentTime / 60)
        minText.textContent = String((videoPlayer.currentTime % 60).toFixed(0)).padStart(2, '0')
    }else {
        minText.textContent = Math.round(videoPlayer.currentTime)
    }
    rangeVideo.value = (videoPlayer.currentTime*100)/videoPlayer.duration
}



window.addEventListener('load', () => {
        fullHour.textContent = Math.round(videoPlayer.duration/60)
        fullMin.textContent = Math.floor( videoPlayer.duration % 60)
})

function Play(){
    if(videoPlayer.paused){
        videoPlayer.play()
        imagePlay.setAttribute('src', './pause.svg')
    }else{
        videoPlayer.pause()
        imagePlay.setAttribute('src', './play-button-arrowhead.svg')
    }
}


setInterval(function(){
    videoPosition()
},1000)

let isMuted = false;
muteBtn.addEventListener('click', () =>{
    isMuted = !isMuted
    videoPlayer.muted = isMuted;
    if(isMuted === true){
        imageHolder.setAttribute('src', './mute.svg')
    }else{
        imageHolder.setAttribute('src', './speaker-filled-audio-tool.svg')
    }
})

rangeVideo.addEventListener('change' , () =>{
    videoPlayer.currentTime = (rangeVideo.value*videoPlayer.duration)/100
})

volumeBtn.addEventListener('change', () =>{
    videoPlayer.volume = volumeBtn.value/100
})

function checkKeyPress (key){
    switch(true){
        case key.keyCode == "65":
            videoPlayer.play()
            break;
        case key.keyCode == "77":
            videoPlayer.muted = true
            break;
        case key.keyCode == "90":
            videoPlayer.pause()
            break;
        case key.keyCode == "78":
            videoPlayer.muted = false
            break;
    }
}