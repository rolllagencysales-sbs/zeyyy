function startSite() {
    // Müziği başlat
    const music = document.getElementById('bgMusic');
    music.play().catch(error => console.log("Müzik çalınamadı:", error));

    // Giriş ekranını karart ve kaldır
    const overlay = document.getElementById('overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1500);
}

// Kaydırma kontrolü
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// İlk başta görünürlüğü kontrol et
reveal();