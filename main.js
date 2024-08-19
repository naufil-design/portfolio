    const themeToggle = document.getElementById('toggle-theme');
    const themeToggleD = document.getElementById('toggle-theme-desktop');
    const circleToggle = document.querySelector('.circle-toggle-theme');
    const circleToggleD = document.querySelector('.circle-toggle-theme-desktop');
    const mainContent = document.getElementById('main-content');
    const loginContent = document.querySelector('.l-b-e-outer');
    const introducing = document.getElementById('introducing');
    const nameInput = document.getElementById('nameInput');
    const warningText = document.getElementById('warningText');
    const whatThe = document.getElementById('what-the');
    const enterButton = document.getElementById('enter');

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

    // Memeriksa apakah ada nama yang tersimpan dan menyesuaikan tampilan sesuai
    const storedName = localStorage.getItem('nama');
    if (storedName) {
        introducing.innerText = `Selamat datang kembali, ${storedName}. Senang bertemu denganmu lagi, gimana kabarnya nih?...`;
        loginContent.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    } else {
        mainContent.style.display = 'none';
        loginContent.style.display = 'block';
    }

    // Event listener untuk input nama
    nameInput.addEventListener('input', function() {
        var nama = this.value.toLowerCase().trim();
        var invalidPatterns = ['@gmail.com', 'gmail', 'gmail.com', '&', '$', '#', '!', '?', 'mail.com', '@', '@gmai', '"', "'", "\\", '@gma', '@gm', '@g', '.com', '.co', '.c', '.', ',', '(', ')', '/', 'http:', ':', ';', '`', '_', '-', '|', '√', 'π', '÷', '×', '§', '£', '¢', '€', '¥', '{', '}', '%', '©', '<', '>', '®', '™', '✓', '[', ']', '+', '=', '°', '•', '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        var uniqueName = ['mahendra', 'hendra', 'reyhan', 'rihan', 'alam', 'alamsyah', 'mustakim', 'takim', 'adel', 'adel fio', 'fio', 'andika', 'dika', 'halid', 'reza', 'zafif', 'bagas', 'bagas septa', 'dana', 'farel', 'rifki', 'riki', 'diki', 'dicky', 'nightmare', 'night', 'thesans', 'the sans', 'sans'];
        var isInvalid = invalidPatterns.some(function(pattern) {
            return nama.includes(pattern);
        });
        var includingUniqueName = uniqueName.some(function(pattern) {
            return nama.includes(pattern);
        });

        if (nama === '') {
            warningText.style.display = 'none';
            whatThe.style.display = 'none';
            enterButton.style.display = 'none';
        } else if (isInvalid) {
            warningText.style.display = 'block';
            whatThe.style.display = 'none';
            enterButton.style.display = 'none';
        } else if (nama === 'naufil') {
            whatThe.innerText = 'lah? Naufil?';
            whatThe.style.display = 'block';
            warningText.style.display = 'none';
            enterButton.style.display = 'block';
        } else if (includingUniqueName) {
            whatThe.innerText = 'wih, ada teman nih...';
            whatThe.style.display = 'block';
            warningText.style.display = 'none';
            enterButton.style.display = 'block';
        } else {
            warningText.style.display = 'none';
            whatThe.style.display = 'none';
            enterButton.style.display = 'block';
        }
    });

    // Fungsi untuk memulai setelah tombol 'Masuk' ditekan
    function letsBegin() {
        const nama = nameInput.value.toLowerCase();
        localStorage.setItem('nama', nama);

        loginContent.style.opacity = '0';

        setTimeout(() => {
            loginContent.style.display = 'none';
            mainContent.style.display = 'block';

            if (nama === 'naufil') {
                introducing.innerText = `Hai! ${nama}, senang bertemu denganmu! namaku Nau-, lah... kalo lu Naufil, nama gua siapa?...`;
            } else {
                introducing.innerText = `Hai! ${nama}, senang bertemu denganmu! namaku Naufil, aku adalah programmer web desainer`;
            }

            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 500);
        }, 300);
    }

    // Event listener untuk tombol 'Masuk'
    enterButton.addEventListener('click', letsBegin);
