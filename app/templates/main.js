navigator.getUserMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

// TODO set constraints based on choices.
var constraints = {}
,video = document.querySelector('video');

constraints.audio = <%= constraints.audio %>;
constraints.video = <%= constraints.video %>;

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
