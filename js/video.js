// Add js here.
var video = document.getElementById("videoplayer")
video.preload = function() {
video.autoplay = false;
video.loop = false;
}

var play = document.getElementById("play")
play.onclick = function() {
    video.play();
}

var pause = document.getElementById("pause")
pause.onclick = function() {
    video.pause();
}

var slower = document.getElementById("slower")
slower.onclick = function() {
    if (video.playbackRate > 0.5) {
        video.playbackRate *= 0.5;
    }
    else {
        video.playbackRate = 0.5
        alert("Video is at slowest speed!");
    }
}

var faster = document.getElementById("faster")
faster.onclick = function() {
    if (video.playbackRate < 2) {
        video.playbackRate *= 2;
    }
    else {
        video.playbackRate = 2
        alert("Video is at fastest speed!");
    }
}

var skip = document.getElementById("skip")
skip.onclick = function() {
    if (video.currentTime < video.duration) {
        video.currentTime += 15
    }
    else {
        video.currentTime = 0;
        video.loop = true;
        // video.load();
    }
}

var mute = document.getElementById("mute")
mute.onclick = function() {
    if (video.muted === true) {
        video.muted = false;
        const element = document.getElementById("mute");
        element.innerHTML = "Mute";
    }
    else {
        video.muted = true;
        const element = document.getElementById("mute");
        element.innerHTML = "Unmute";
    }
}

var slider = document.getElementById("slider")
slider.onchange = function () {
    var x = slider.value;
    var y = x / 100;
    video.volume = y;
    const element = document.getElementById("volume");
    element.innerHTML = slider.value;
}