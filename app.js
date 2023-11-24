document.addEventListener('DOMContentLoaded', function() {
    const showScreenLinks = document.querySelectorAll('.show-screen');
    const screens = document.querySelectorAll('.screen');

    showScreenLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            screens.forEach(screen => {
                if (screen.id === targetId) {
                    screen.style.display = 'block';
                } else {
                    screen.style.display = 'none';
                }
            });
        });
    });
});