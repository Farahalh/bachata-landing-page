function maketheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let theme = document.querySelector(".theme");
theme.addEventListener("click", maketheme);

function book() {
  let name = prompt("What is you name?");
  name = name.toLowerCase();
  name = name.trim();
  let email = prompt("What is your email adress?");
  email = email.toLowerCase();
  email = email.trim();
  alert("Thank you " + name + "! We´ll be in touch very soon!💃");
}

let learnBachata = document.querySelector(".learn-bachata");
learnBachata.addEventListener("click", book);
