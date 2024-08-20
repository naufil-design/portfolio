    const themeToggle = document.getElementById('toggle-theme');
    const themeToggleD = document.getElementById('toggle-theme-desktop');
    const circleToggle = document.querySelector('.circle-toggle-theme');
    const circleToggleD = document.querySelector('.circle-toggle-theme-desktop');

    // Fungsi untuk menerapkan tema
    function applyTheme(isLight) {
        if (isLight) {
            document.documentElement.style.setProperty('--col-theme', '#fff');
            document.documentElement.style.setProperty('--col1-theme', '#ddd');
            document.documentElement.style.setProperty('--invert-col-theme', '#000');
            document.body.style.backgroundColor = 'var(--col-theme)';
            circleToggle.style.backgroundColor = '#10a9ff';
            circleToggleD.style.backgroundColor = '#10a9ff';
            circleToggle.classList.remove('ion-md-moon');
            circleToggleD.classList.remove('ion-md-moon');
            circleToggle.classList.add('ion-md-sunny');
            circleToggleD.classList.add('ion-md-sunny');
            themeToggle.checked = true;
            themeToggleD.checked = true;
        } else {
            document.documentElement.style.setProperty('--col-theme', '#333');
            document.documentElement.style.setProperty('--col1-theme', '#222');
            document.documentElement.style.setProperty('--invert-col-theme', '#fff');
            document.body.style.backgroundColor = 'var(--col-theme)';
            circleToggle.style.backgroundColor = '#007';
            circleToggleD.style.backgroundColor = '#007';
            circleToggle.classList.remove('ion-md-sunny');
            circleToggleD.classList.remove('ion-md-sunny');
            circleToggle.classList.add('ion-md-moon');
            circleToggleD.classList.add('ion-md-moon');
            themeToggle.checked = false;
            themeToggleD.checked = false;
        }
    }

    themeToggle.addEventListener('change', function() {
        const isLight = this.checked;
        applyTheme(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    themeToggleD.addEventListener('change', function() {
        const isLight = this.checked;
        applyTheme(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Memuat tema yang tersimpan saat halaman dimuat
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme === 'light');
    }