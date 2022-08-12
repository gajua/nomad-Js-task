const Number1 = document.querySelector("#Number1");
const guessNumber = document.querySelector("#guessNumber");
const result = document.querySelector("#result");
const Number2 = document.querySelector("#Number2");
const final = document.querySelector("#final");

const HIDDEN_CLASSNAME = "hidden";

function play(event) {
  const THEVALUE = Math.round(Math.random() * Number1.value)
  event.preventDefault();
  result.classList.remove(HIDDEN_CLASSNAME);
  result.innerText = `You chose: ${Number2.value}, 
   the machine chose: ${THEVALUE}`;

   if (parseInt(Number2.value) ===parseInt(THEVALUE) ){
    final.classList.remove(HIDDEN_CLASSNAME);
    final.innerText = `you won!!!!!!!`;
  } else {
    final.classList.remove(HIDDEN_CLASSNAME);
    final.innerText = `you lost...ㅠㅠ`;
  }
}

guessNumber.addEventListener("submit", play);

