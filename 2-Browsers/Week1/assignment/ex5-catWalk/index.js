let cat;
let left = 0;
let walkingTimer;
const danceCatUrl = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const originalCatUrl = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'; // You can replace with your own image

function catWalk() {
  const screenWidth = window.innerWidth;
  const catWidth = cat.width;
  const middlePoint = (screenWidth - catWidth) / 2;

  left += 10;
  cat.style.left = `${left}px`;

  // When it reaches the right end
  if (left > screenWidth) {
    left = -catWidth;
  }

  // When it reaches the middle
  if (left >= middlePoint && left < middlePoint + 10) {
    clearInterval(walkingTimer);

    cat.src = danceCatUrl;

    setTimeout(() => {
      cat.src = originalCatUrl;
      walkingTimer = setInterval(catWalk, 50);
    }, 5000);
  }
}

function startCatWalk() {
  cat = document.querySelector('img');
  cat.style.position = 'absolute';
  cat.style.left = '0px';

  // Start walking
  walkingTimer = setInterval(catWalk, 50);
}

window.addEventListener('load', startCatWalk);
