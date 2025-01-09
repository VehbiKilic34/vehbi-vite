import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

function throwConfetti() {
  jsConfetti.addConfetti()
}

const confettiButton=document.getElementById("throw-confetti");
confettiButton.addEventListener("click",throwConfetti);