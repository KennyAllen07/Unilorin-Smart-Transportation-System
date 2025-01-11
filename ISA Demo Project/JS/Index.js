document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('get-started-btn');

    getStartedBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const rect = getStartedBtn.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        ripple.classList.add('ripple');
        getStartedBtn.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        getStartedBtn.classList.add('loading');
        
        setTimeout(() => {
            window.location.href = getStartedBtn.getAttribute('href');
        }, 2000);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const text = intro.textContent;
    intro.textContent = '';

    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        if (letter === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = letter;
        }
        span.style.animationDelay = `${index * 0.2}s`;
        intro.appendChild(span);
    });

    
    const getStartedBtn = document.getElementById('get-started-btn');

    getStartedBtn.addEventListener('click', (event) => {
        event.preventDefault();

        
        const rect = getStartedBtn.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        ripple.classList.add('ripple');
        getStartedBtn.appendChild(ripple);

        
        setTimeout(() => {
            ripple.remove();
        }, 600);

        
        getStartedBtn.classList.add('loading');

        
        setTimeout(() => {
            window.location.href = getStartedBtn.getAttribute('href');
        }, 2000);
    });
});
