
document.addEventListener('DOMContentLoaded', function() {
    const matrixFlowers = document.getElementById('matrixFlowers');
    const flowerSymbols = ['🌼', '🌻', '💐', '🌸', '💮', '🏵️'];
    
    function createMatrixFlowers() {
        const flower = document.createElement('div');
        flower.className = 'flower-matrix';
        flower.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = 2 + Math.random() * 3 + 's';
        flower.style.opacity = Math.random() * 0.5 + 0.3;
        flower.style.fontSize = (10 + Math.random() * 15) + 'px';
        matrixFlowers.appendChild(flower);
        
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
    
    setInterval(createMatrixFlowers, 100);
    const flowerBtn = document.getElementById('flowerBtn');
    const letterModal = document.getElementById('letterModal');
    const closeBtn = document.getElementById('closeBtn');
    
    flowerBtn.addEventListener('click', function() {
        letterModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createFlowerExplosion();
            }, i * 50);
        }
    });
    
    closeBtn.addEventListener('click', function() {
        letterModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === letterModal) {
            letterModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    const audio = new Audio('    const audio = new Audio('https://github.com/RyZerX23/Septiembre/blob/main/CNCO_%20Yandel%20-%20Hey%20DJ%5BAMV%5D%20Hiraku%20Dear%20Moments%20%F0%9F%91%8C%F0%9F%98%8E(MP3_128K).mp3');
');
    let isPlaying = false;

    function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = '♪';
        flowerBtn.textContent = '🌼';
    } else {
        audio.play().catch(e => console.log("La reproducción automática fue prevenida. Haz clic manualmente."));
        musicBtn.textContent = '❚❚';
        flowerBtn.textContent = '❚❚';
    }
    isPlaying = !isPlaying;
    }

    const musicBtn = document.getElementById('musicBtn');
    musicBtn.addEventListener('click', toggleAudio);
    flowerBtn.addEventListener('click', toggleAudio);

    window.addEventListener('mousemove', function autoPlayOnce() {
    if (!isPlaying) {
        audio.play().then(() => {
        musicBtn.textContent = '❚❚';
        flowerBtn.textContent = '❚❚';
        isPlaying = true;
        }).catch(e => console.log("Autoplay bloqueado por el navegador."));
    }
    window.removeEventListener('mousemove', autoPlayOnce);
    });

    function createFlowerExplosion() {
        const explosion = document.createElement('div');
        explosion.innerHTML = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
        explosion.style.position = 'fixed';
        explosion.style.left = Math.random() * 100 + 'vw';
        explosion.style.top = Math.random() * 100 + 'vh';
        explosion.style.color = `hsl(${Math.random() * 20 + 50}, 100%, 50%)`;
        explosion.style.fontSize = '25px';
        explosion.style.zIndex = '100';
        explosion.style.transform = 'scale(0)';
        explosion.style.animation = `pop 0.5s forwards, fadeOut 0.5s 0.5s forwards`;
        
        document.body.appendChild(explosion);
        
        setTimeout(() => {
            explosion.remove();
        }, 1000);
    }
    
    document.addEventListener('dblclick', function(e) {
        e.preventDefault();
    }, { passive: false });
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pop {
            to { transform: scale(1); }
        }
        @keyframes fadeOut {
            to { opacity: 0; transform: scale(0.5); }
        }
    `;
    document.head.appendChild(style);
});

