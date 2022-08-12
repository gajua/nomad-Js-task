const title = document.querySelector("h2");



function handleMouseEnter(){
  title.innerText = "mouse is here!"
  title.style.color = "#1abc9c"
}

function handleMouseLeave(){
  title.innerText = "mouse is gone!"
  title.style.color = "#3498db"
}

function handleWindowSize(){
  title.innerText = "움직인다!!"
  title.style.color = "#9b59b6"
}

function handleMouseClick(){
  title.innerText = "this is right click!"
  title.style.color = "#e74c3c"
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowSize);
window.addEventListener("contextmenu", handleMouseClick);
