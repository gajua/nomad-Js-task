const title = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function (){
  title.innerText = "mouse is here!";
  title.style.color = "#1abc9c";
  },

  handleMouseLeave: function (){
    title.innerText = "mouse is gone!";
    title.style.color = "#3498db";
  },

  handleWindowSize: function (){
    title.innerText = "움직인다!!";
    title.style.color = "#9b59b6";
  },

  handleMouseClick: function (){
  title.innerText = "this is right click!";
  title.style.color = "#e74c3c";
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowSize);
window.addEventListener("contextmenu", superEventHandler.handleMouseClick);
