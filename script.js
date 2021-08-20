console.log("Hello world!");
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => alert("ow!"));

function sayLeaveMeAlone() {
  alert("Leave me ALONE!!!");
}
let button2 = document.getElementById("button2");
button2.addEventListener("click", sayLeaveMeAlone);

function ShowFace() {
  let facepic = document.getElementById("selfie");
  if (facepic.style.visibility == "visible") {
    facepic.style.visibility = "hidden";
  } else {
    facepic.style.visibility = "visible";
  }
}
let button3 = document.getElementById("facebutton");
button3.addEventListener("click", ShowFace);
