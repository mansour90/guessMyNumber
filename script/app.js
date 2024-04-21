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
    window.location.href = 'http://127.0.0.1:5500/startGame.html';
  }, 6500);
  
});

