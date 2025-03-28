import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");
const inputNum = document.querySelector("input[type=number]");
const radioFulf = document.querySelector("input[value=fulfilled]");
const radioRej = document.querySelector("input[value=rejected]");

let delay;
let radioValue;

form.addEventListener("submit", handleSubmit);
inputNum.addEventListener("input", handleInputValue);
radioFulf.addEventListener("change", hendleRadioValue);
radioRej.addEventListener("change", hendleRadioValue);

function handleInputValue(ev) {
    return delay = Number(ev.target.value);
}

function hendleRadioValue(event) {
    return radioValue = event.target.value;
}

function handleSubmit(event) {
    event.preventDefault();
    const promise = new Promise((resolve, rejected) => {
        const timerId = setTimeout(() => {
            if (radioValue === "fulfilled") {
                return resolve(delay);
            }
            if (radioValue === "rejected") {
                rejected(delay);
            }
            
        }, delay)
    })
    promise
        .then(showFulfilledRes)
        .catch(showRejected)
}

function showFulfilledRes(value) {
    iziToast.show({
        position: "topRight",
        class: "iziToastFulfilled",
        title: "OK",
        message: `Fulfilled promise in ${value}ms`,
        iconUrl: "../img/ok.svg"
    })
}

function showRejected(value) {
    iziToast.show({
        position: "topRight",
        class: "iziToastRejected",
        title: "Error",
        message: `Rejected promise in ${value}ms`,
        iconUrl: "../img/error.svg"
    })
}
