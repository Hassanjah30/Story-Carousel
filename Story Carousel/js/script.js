let photoNumber = 1;

function showPhoto(number) {
  let fileSrc = "images/photo" + number + ".jpg";
  document.getElementById("storyImage").src = fileSrc;
  console.log(fileSrc);
}

document.getElementById("nextButton").onclick = function() {
  photoNumber = (photoNumber % 3) + 1;
  showPhoto(photoNumber);
};
