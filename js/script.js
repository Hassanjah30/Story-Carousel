let v1Begin = "Beginning: I open the assignment and it's due tonight at 11:59.";
let v1Middle = "Middle: I stop panicking. I lock in and start writing.";
let v1End = "End: I hit submit and finally crash.";

let v2Begin = "Beginning: I put my head down to rest for five minutes before starting.";
let v2Middle = "Middle: I wake up and realize it's due in an hour.";
let v2End = "End: I type as fast as I can and finish just in time.";

function showPhoto(version, number, text) {
  document.getElementById("image" + version).src = "images/photo" + number + ".jpg";
  document.getElementById("caption" + version).textContent = text;
  console.log("Version " + version + ", photo " + number);
}

document.getElementById("v1Begin").addEventListener("click", function() {
  showPhoto(1, 1, v1Begin);
});
document.getElementById("v1Middle").addEventListener("click", function() {
  showPhoto(1, 2, v1Middle);
});
document.getElementById("v1End").addEventListener("click", function() {
  showPhoto(1, 3, v1End);
});

document.getElementById("v2Begin").addEventListener("click", function() {
  showPhoto(2, 3, v2Begin);
});
document.getElementById("v2Middle").addEventListener("click", function() {
  showPhoto(2, 1, v2Middle);
});
document.getElementById("v2End").addEventListener("click", function() {
  showPhoto(2, 2, v2End);
});

showPhoto(1, 1, v1Begin);
showPhoto(2, 3, v2Begin);
