// const confettiButton_v2 = document.getElementById('confettiButton_v2');
function launchSideConfetti() {
  var end = Date.now() + (5 * 1000);

  // go Buckeyes!
  var colors = ['#bb0000', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 30,
      spread: 95,
      startVelocity: 60,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 105,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// Ajouter un écouteur d'événement pour le clic sur le bouton
confettiButton_v2.addEventListener('click', () => {
  console.log('SideConfetti button clicked');
  launchSideConfetti();
});