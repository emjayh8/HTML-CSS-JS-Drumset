//tomtom
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 65) {
    document.getElementById('tomtom').play();
    tomtom.currentTime = 0;
    tomtomimg.classList.add('playing');
  }
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode == 65) {
    tomtomimg.classList.remove('playing');
  }
});

//snare
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 83) {
    document.getElementById('snare').play();
    snare.currentTime = 0;
    snareimg.classList.add('playing');
  }
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode == 83) {
    snareimg.classList.remove('playing');
  }
});

//hihat
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 68) {
    document.getElementById('hihat').play();
    hihat.currentTime = 0;
    hihatimg.classList.add('playing');
  }
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode == 68) {
    hihatimg.classList.remove('playing');
  }
});

//hihat2
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 70) {
    document.getElementById('openhat').play();
    openhat.currentTime = 0;
    hihatimg2.classList.add('playing');
  }
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode == 70) {
    hihatimg2.classList.remove('playing');
  }
});

//kickdrum
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 71) {
    document.getElementById('kickdrum').play();
    kickdrum.currentTime = 0;
    kickdrumimg.classList.add('playing');
  }
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode == 71) {
    kickdrumimg.classList.remove('playing');
  }
});
