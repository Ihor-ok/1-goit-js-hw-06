let counterValue = 0;
const refButtonDecrement = document.querySelector("[data-action=decrement]");
const refButtonIncrement = document.querySelector("[data-action=increment]");
const refCounterValue = document.querySelector("#value");

refButtonDecrement.addEventListener('click', subtractCounter);
refButtonIncrement.addEventListener('click', addCounter);

function subtractCounter() {
    counterValue -= 1;
    refCounterValue.textContent = counterValue;
};

function addCounter() {
    counterValue += 1;
    refCounterValue.textContent = counterValue;
};