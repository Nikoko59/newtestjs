//  add variable
let tit = document.getElementById("test");
let date = document.getElementById("demo");
let btn = document.getElementById("btn");
let response = document.getElementById("response");
let box = document.getElementById("box");

tit.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

btn.addEventListener("click", () => {
  setTimeout((tit.textContent = "Super le Js"), 2000);
});

date.addEventListener("click", () => {
  tit.style.fontSize = "1.4" + "rem";
  tit.textContent = "Le Js c'est vraiment dynamique";
});

let newDate = new Date();
//  event button
btn.addEventListener("click", displayResponse);

// display date ()
dateDisplay();
function dateDisplay() {
  date.innerHTML = newDate.toDateString();
}

// display the response <p></p>

function displayResponse() {
  let day = newDate.getDay();

  // Variable who Display the response
  let res;

  switch (day) {
    case 0:
      res = "Revoir les méhodes JS ";
      break;
    case 1:
      res = "Les évènements sur le Dom ";
      break;
    case 3:
      res = "Les Api avec fetch()";
      break;
    case 4:
      res = "const immutable ! important";
      break;
    case 5:
      res = "Le Js c'est orienté objet ";
    case 6:
      res = " Le meilleur moyen de progresser est de pratiquer";
    default:
      null;
  }
  response.innerHTML = res;
}

let btn2 = document.getElementById("btn2");
btn.addEventListener("click", displayBtn);

function displayBtn() {
  btn2.style.background = " green";
  box.style.background = "pink";
}
