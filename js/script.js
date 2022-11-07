const maite = document.querySelector('.maite');
const wolf = document.querySelector('.wolf');

const jump = () => {
  maite.classList.add('jump');

  setTimeout(() => {
    maite.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

const pipePosition = wolf.offsetLeft;
const marioPosition = +window.getComputedStyle(maite).bottom.replace('px', '');

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 80) {

        wolf.style.animation = 'none';
        wolf.style.left = `${pipePosition}px`;

        maite.style.animation = 'none';
        maite.style.bottom = `${marioPosition}px`;

        maite.src = './images/game-over.gif';
        maite.style.width = '75px'
        maite.style.marginLeft = '0px'
        maite.style.marginBottom = '-2px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keypress', jump);