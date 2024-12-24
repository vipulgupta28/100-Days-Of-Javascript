const launchButton = document.getElementById('launch-button');
const rocket = document.querySelector('.rocket');

launchButton.addEventListener('click', () => {
  rocket.style.animation = 'launch 4s ease-in-out forwards';
});

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes launch {
    0% {
      transform: translateX(-50%) translateY(0);
    }
    100% {
      transform: translateX(-50%) translateY(-200vh);
    }
  }
`, styleSheet.cssRules.length);
