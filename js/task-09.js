function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color"),
}


ref.button.addEventListener('click', colorChange);

function colorChange() {
  const valueColor = getRandomHexColor()
  ref.colorValue.textContent = valueColor;
  ref.body.style.backgroundColor = valueColor;

};