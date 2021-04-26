
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");



button.addEventListener("click", volume)


 function volume() {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');

  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');

}

}

function playAudio(url) {
  new Audio(url).play();
}





function drag(ev) {
  event.dataTransfer.setData("text", event.target.id);
}




function allowDrop(ev) {

  ev.preventDefault();

}




function drop(ev) {

   		let data = ev.dataTransfer.getData("text");


if (  ev.target.getAttribute('data-box') ==
   document.getElementById(data).getAttribute('data-box')

   )  {


   	event.preventDefault();



  ev.target.appendChild(document.getElementById(data));
let x = ev.target





  playAudio('ding.mp4')
} else {
	playAudio('buzz.mp4')
}


}


// console.log(wordboxes);
// let wbox = document.getElementsByClassName('wbox')
//
// for (let i = 0; i < 7; i++) {
//   let wordboxes = document.getElementById('wordboxes')
//
//    wordboxes.addEventListener("click", speech)
//    let text = wbox[i].textContent
//
// }

function speech() {
let msg = new SpeechSynthesisUtterance();
msg.text=`${text}`
window.speechSynthesis.speak(msg)
}


//
let wbox1 = document.getElementById('wbox1')
wbox1.addEventListener("click", speech)
let text = wbox1.textContent

let wbox2 = document.getElementById('wbox2')
wbox2.addEventListener("click", speech)
text = wbox2.textContent


let levelbutton = document.getElementById('levelbutton')



 function playerReachedFinish () {

     levelbutton.style.visibility = "visible"

}

function playerWins () {

    levelbuttonwin.style.visibility = "visible"


}

// playerReachedFinish()

// let ebox1 = document.getElementById("ebox1")
// console.log(ebox1.ondrop)

let winButton = document.getElementById('win')
console.log(winButton);

winButton.addEventListener("click", playerWins)

let completeButton = document.getElementById('complete')
console.log(completeButton);

completeButton.addEventListener("click", playerReachedFinish)
