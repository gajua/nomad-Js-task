const body = document.querySelector("body");
const h1 = document.querySelector("h1");

function handleWindowSize() {
  const innerWidth = window.innerWidth;
  h1.innerText = innerWidth;
  if (innerWidth > 800) {
    body.style.background = "tomato";
  } else if (innerWidth >= 500) {
    body.style.background = "skyblue";
  } else {
    body.style.background = "chartreuse";
  }
}
window.addEventListener("resize", handleWindowSize);

const a = document.getElemen