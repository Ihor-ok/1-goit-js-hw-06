function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  input: document.querySelector("[type=number]"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
  }

const boxesArr = [];
let numberBoxes = 0;
let width = 30;
let height = 30;
let color = "";

ref.input.addEventListener('input', numbersElements)
ref.buttonCreate.addEventListener('click', createCollection);
ref.buttonDestroy.addEventListener('click', destroyCollection);

function numbersElements(evt) {
   numberBoxes = evt.currentTarget.value;
};

function createCollection() {
  
  ref.boxes.innerHTML = "";
  boxesArr.splice(0, boxesArr.length);
  width = 30;
  height = 30;
  color = "";
  
  createBoxes(numberBoxes);  
  }

function destroyCollection() {
  ref.boxes.innerHTML = "";
  boxesArr.splice(0, boxesArr.length);
  numberBoxes = 0;
  width = 30;
  height = 30;
  color = "";
  ref.input.value = "";
};

function createBoxes(amount) {

  for (let i = 1; i <= amount; i += 1) {
   
  const box = document.createElement("div");
  color = getRandomHexColor();
    
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = color;
  box.style.marginTop = '10px';

  boxesArr.push(box);
  
      width += 10;
      height += 10;
    
  }

  ref.boxes.prepend(...boxesArr);
};