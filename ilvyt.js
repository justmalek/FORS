const hearts = document.getElementById('hearts');
const gif = document.querySelector('.gif');

gif.addEventListener('load', () => {
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
