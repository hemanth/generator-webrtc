navigator.getUserMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

// TODO set constraints based on choices.
var constraints = {audio: true, video: true}
,video = document.querySelector('video');


function success(stream) {
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
}

function error(err){
  console.log("getUserMedia error: ", err);
}

navigator.getUserMedia(constraints, success, error);
