const refInput = document.querySelector("#font-size-control");
const refText = document.querySelector("#text")

refInput.addEventListener('input', changesStyle);

function changesStyle(evt) {
       refText.style.fontSize = `${evt.currentTarget.value}px`;
}