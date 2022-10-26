const h1Intro = document.querySelector("#h1Intro");
const miniIntro = document.querySelector("#miniIntro");
const center1Toph4 = document.querySelector("#center1Toph4");
const navAbout = document.querySelector("#navAbout");
const navSkills = document.querySelector("#navSkills");
const navStuff = document.querySelector("#navStuff");
const navProjects = document.querySelector("#navProjects");
const studentP = document.querySelector("#studentP");
const uniP = document.querySelector("#uniP");
const skillsh2 = document.querySelector("#skillsh2");

// lang buttons

const deButton = document.querySelector("#deButton");
const enButton = document.querySelector("#enButton");

//german language switch
deButton.addEventListener("click", function(){
      h1Intro.textContent = "Hallo, mein Name ist Fiona";
      miniIntro.textContent = "Ich bin eine Frontend Entwicklerin aus Deutschland";
      center1Toph4.textContent = "Stein-Schere-Papier";
      navAbout.textContent = "Über mich";
      navSkills.textContent = "Fähigkeiten";
      navStuff.textContent = "Sachen";
      navProjects.textContent = "Projekte";
      studentP.textContent = "Ich bin eine 19 jährige Studentin und selbstgelehrte Frontend Entwicklering"
      uniP.textContent = "Ich studiere derzeitig Geschichte und Informatik an der ";
      skillsh2.textContent = "Fähigkeiten";
})


// english language switch
enButton.addEventListener("click", function(){
      h1Intro.textContent = "Hello, My Name is Fiona";
      miniIntro.textContent = "Im a FrontEnd Developer based in Germany";
      center1Toph4.textContent = "Rock-Paper-Scissors";
      navAbout.textContent = "About";
      studentP.textContent = "Im a 19 year old student and self-taught FrontEnd Developer";
      uniP.textContent = "currently studying History and Computer Science at the ";
      skillsh2.textContent = "skills";
})