// script.js — отдельный файл JavaScript

document.addEventListener('DOMContentLoaded', () => {

    // ======= НЕОН-ЭФФЕКТ: переключение дополнительного свечения ========
    const neonToggle = document.getElementById('glowToggle');
    let neonActive = false;

    // Стили для "усиленного неона" добавляются динамически через класс
    const styleNeon = document.createElement('style');
    styleNeon.id = 'neonGlowStyle';
    styleNeon.textContent = `
        .neon-active .glass-nav {
            border-color: #80ffdd;
            box-shadow: 0 0 60px rgba(0, 255, 200, 0.4), inset 0 0 60px rgba(0, 255, 200, 0.2);
        }
        .neon-active .glass-sphere {
            box-shadow: 0 0 140px #70e0c0, inset 0 0 100px #70e0c0;
            border-color: #a0ffdd;
        }
        .neon-active .btn-primary {
            box-shadow: 0 0 60px #70e0c0, inset 0 0 30px #70e0c0;
            background: rgba(0, 255, 200, 0.25);
        }
        .neon-active .glass-card {
            border-color: #80ffdd;
            box-shadow: 0 0 40px rgba(0, 255, 200, 0.2), inset 0 0 30px rgba(0, 255, 200, 0.05);
        }
        .neon-active .hero-title .highlight {
            text-shadow: 0 0 60px #70e0c0;
        }
        .neon-active .logo {
            text-shadow: 0 0 30px #70e0c0;
        }
    `;
    document.head.appendChild(styleNeon);

    neonToggle.addEventListener('click', () => {
        neonActive = !neonActive;
        if (neonActive) {
            document.body.classList.add('neon-active');
            neonToggle.textContent = '✦ Neon ON';
            neonToggle.style.boxShadow = '0 0 40px #70e0c0, inset 0 0 20px #70e0c0';
        } else {
            document.body.classList.remove('neon-active');
            neonToggle.textContent = '✦ Neon';
            neonToggle.style.boxShadow = '0 0 10px rgba(0, 255, 180, 0.1)';
        }
    });

    // ======= ИНТЕРАКТИВНЫЙ ЭФФЕКТ НА КАРТОЧКАХ (Liquid ripple) ========
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // лёгкий поворот и смещение тени
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            card.style.transform = `perspective(800px) rotateY(${deltaX * 4}deg) rotateX(${-deltaY * 4}deg) translateY(-4px)`;
            card.style.transition = 'transform 0.1s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)';
            card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)';
        });
    });

    // ======= АНИМАЦИЯ ПРИВЕТСТВИЯ (консоль) ========
    console.log('🪲 Hollow Knight · Liquid Glass ✦ Неон активирован!');

    // ======= МИКРО-ВЗАИМОДЕЙСТВИЕ: кнопка Login ========
    const loginBtn = document.querySelector('.btn-login');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('✨ Добро пожаловать в мир Холлоу Найт ✨');
        });
    }

    // ======= КНОПКА "Read More" ========
    const readMore = document.querySelector('.btn-primary');
    if (readMore) {
        readMore.addEventListener('click', (e) => {
            e.preventDefault();
            // плавный скролл к секции features
            document.querySelector('.features').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

});
