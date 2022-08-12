const clockTitle = document.querySelector(".js-clock");

function clock(){
  const date = new Date();
  const christmas = new Date("2022-12-25");
  const minus = christmas-date;

  const days = Math.floor(minus / (1000*60*60*24))
  const hours =  Math.floor(minus / (1000*60*60) %24)
  const minutes =  Math.floor(minus / (1000*60) %60)
  const seconds =  Math.floor(minus / 1000 %60)
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

clock();
setInterval(clock, 1000);