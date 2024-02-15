function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 300);
  // Hiển thị hình ảnh từ từ khi trang đã được load
window.onload = function() {
    const image = document.getElementById('anniversaryImage');
    image.classList.add('fade-in');
};