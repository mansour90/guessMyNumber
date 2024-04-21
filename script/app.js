const playBtn = document.querySelector('.btn-play');
const loading = document.querySelector('.loading');

playBtn.addEventListener('click', function () {
  setTimeout(() => {
    loading.style.display = 'grid';
    loading.style.opacity = '1';
  }, 0);
  setTimeout(() => {
    loading.style.display = 'none';
    loading.style.opacity = '0';
    window.location.href =
      'https://mansour90.github.io/guessMyNumber/startGame.html';
  }, 6500);
});
