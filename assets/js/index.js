let timersContainer = document.querySelector(".timers");
let daysContainer = document.querySelector(".timer-day");
let hoursContainer = document.querySelector(".timer-hour");
let minutesContainer = document.querySelector(".timer-minute");
let secondsContainer = document.querySelector(".timer-second");


function countDownTimer() {
  let finalDate = new Date("Jan 30, 2023 23:59:59").getTime();

  let x = setInterval(() => {
    let today = Date.now();

    let distance = finalDate - today;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //set result
    
    daysContainer.textContent = formatNumber(days);
    hoursContainer.textContent = formatNumber(hours);
    minutesContainer.textContent = formatNumber(minutes);
    secondsContainer.textContent = formatNumber(seconds);

    if (distance < 0) {
      clearInterval(x);
      timersContainer.innerHTML = "<p>Expired</p>";
    }
  }, 1000);
}

function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}


countDownTimer();
