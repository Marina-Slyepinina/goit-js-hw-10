import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const buttonStart = document.querySelector("button");
const daysTimer = document.querySelector("span[data-days]");
const hoursTimer = document.querySelector("span[data-hours]");
const minutesTimer = document.querySelector("span[data-minutes]");
const secondsTimer = document.querySelector("span[data-seconds]");
let userSelectedDate = null;

buttonStart.addEventListener("click", hadleStart);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {  
        userSelectedDate = selectedDates[0];
        if (userSelectedDate <= options.defaultDate) {
            buttonStart.disabled = true;
            return iziToast.show({
                position: "topRight",
                message: "Please choose a date in the future",
                messageColor: "#FFFFFF",
                messageSize: "16px",
                color: "#ef4040",
                progressBarColor: "#ffbebe",                
                iconUrl: "../img/error.svg"
                    });
        }
        buttonStart.disabled = false;
    }
};

flatpickr.l10ns.default.firstDayOfWeek = 1;

flatpickr(input, options);

function hadleStart() {
    buttonStart.disabled = true;
    input.disabled = true;
    const deltaTime = userSelectedDate - Date.now();
    startTimer(deltaTime);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}

function startTimer(ms) {
    const intervalId = setInterval(() => {
        if (ms <= 0) {
            clearInterval(intervalId);
            input.disabled = false;
            return;
        }
        if (ms > 0) {            
            const newTimeObj = convertMs(ms);
            makeTimeupdateClockface(newTimeObj);
            ms -= 1000;
        }
    }, 1000)
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function makeTimeupdateClockface(obj) {
    daysTimer.textContent = obj.days;
    hoursTimer.textContent = obj.hours;
    minutesTimer.textContent = obj.minutes;
    secondsTimer.textContent = obj.seconds;
}


