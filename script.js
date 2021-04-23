function drag(ev) {
  event.dataTransfer.setData("text", event.target.id);
}




function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  event.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}