document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.element');
    const values = element.getAttribute('data-values').split(',').map(item => item.trim());
    const loop = element.getAttribute('data-loop') === 'true';
    const backdelay = parseInt(element.getAttribute('data-backdelay')) * 1000; // Convert seconds to milliseconds

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = values[index];
        if (isDeleting) {
            charIndex--;
            element.textContent = current.substring(0, charIndex);
        } else {
            charIndex++;
            element.textContent = current.substring(0, charIndex);
        }

        let delay = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === current.length) {
            delay = backdelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % values.length;
            delay = 500;
        }

        if (index === 0 && charIndex === 0 && !loop) {
            return;
        }

        setTimeout(type, delay);
    }

    type();
});