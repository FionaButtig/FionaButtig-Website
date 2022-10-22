const h1Intro = document.querySelector("#h1Intro");
const miniIntro = document.querySelector("#miniIntro");
const center1Toph4 = document.querySelector("#center1Toph4");

// lang buttons

const deButton = document.querySelector("#deButton");
const enButton = document.querySelector("#enButton");

//german language switch
deButton.addEventListener("click", function(){
      h1Intro.textContent = "Hallo, mein Name ist Fiona";
      miniIntro.textContent = "Ich bin eine Frontend Entwicklerin aus Deutschland";
      center1Toph4.textContent = "Stein-Schere-Papier";
})


// english language switch
enButton.addEventListener("click", function(){
      h1Intro.textContent = "Hello, My Name is Fiona";
      miniIntro.textContent = "Im a FrontEnd Developer based in Germany";
      center1Toph4.textContent = "Rock-Paper-Scissors";
})