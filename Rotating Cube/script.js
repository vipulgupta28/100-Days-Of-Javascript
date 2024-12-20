const cube = document.querySelector('.cube');
let isPaused = false;

cube.addEventListener('click', () => {
    if (isPaused) {
        cube.style.animationPlayState = 'running';
    } else {
        cube.style.animationPlayState = 'paused';
    }
    isPaused = !isPaused;
});
