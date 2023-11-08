document.addEventListener('DOMContentLoaded', async function () {
    if (document.cookie == 'colormode=teal') { //if cookie stored is for teal mode
        document.getElementById('sun-moon').classList.add('has-text-dark');
        document.getElementById('html-background').classList.add('has-teal-bkg');
        document.getElementById('sun-moon').classList.add('fa-moon');

        let titles = document.getElementsByClassName('title');
        Array.from(titles).forEach(i => {
            i.classList.add('has-text-dark');
        });

        let subtitles = document.getElementsByClassName('subtitle');
        Array.from(subtitles).forEach(i => {
            i.classList.add('has-text-dark');
        });

        let icons = document.getElementsByClassName('fab');
        Array.from(icons).forEach(i => {
            i.classList.add('has-text-dark');
        });
    } else if (document.cookie == 'colormode=dark') { //if cookie stored is for dark mode
        document.getElementById('sun-moon').classList.add('has-text-teal');
        document.getElementById('html-background').classList.add('has-dark-bkg');
        document.getElementById('sun-moon').classList.add('fa-sun');

        let titles = document.getElementsByClassName('title');
        Array.from(titles).forEach(i => {
            i.classList.add('has-text-teal');
        });

        let subtitles = document.getElementsByClassName('subtitle');
        Array.from(subtitles).forEach(i => {
            i.classList.add('has-text-teal');
        });

        let icons = document.getElementsByClassName('fab');
        Array.from(icons).forEach(i => {
            i.classList.add('has-text-teal');
        });
    } else { // if no cookie is stored
        document.getElementById('sun-moon').classList.add('has-text-dark');
        document.getElementById('html-background').classList.add('has-teal-bkg');
        document.getElementById('sun-moon').classList.add('fa-moon');

        let titles = document.getElementsByClassName('title');
        Array.from(titles).forEach(i => {
            i.classList.add('has-text-dark');
        });

        let subtitles = document.getElementsByClassName('subtitle');
        Array.from(subtitles).forEach(i => {
            i.classList.add('has-text-dark');
        });

        let icons = document.getElementsByClassName('fab');
        Array.from(icons).forEach(i => {
            i.classList.add('has-text-dark');
        });
        document.cookie = 'colormode=teal; samesite=strict; expires=Wed, 01 Jan 2025 05:00:00 GMT;';
    }
});

function toggleLightDark() {
    if (document.cookie == 'colormode=teal') {
        document.getElementById('sun-moon').classList.replace('has-text-dark', 'has-text-teal');
        document.getElementById('sun-moon').classList.replace('fa-moon', 'fa-sun');
        document.getElementById('html-background').classList.replace('has-teal-bkg', 'has-dark-bkg');

        let titles = document.getElementsByClassName('title');
        Array.from(titles).forEach(i => {
            i.classList.replace('has-text-dark', 'has-text-teal');
        });

        let subtitles = document.getElementsByClassName('subtitle');
        Array.from(subtitles).forEach(i => {
            i.classList.replace('has-text-dark', 'has-text-teal');
        });

        let icons = document.getElementsByClassName('fab');
        Array.from(icons).forEach(i => {
            i.classList.replace('has-text-dark', 'has-text-teal');
        });
        document.cookie = 'colormode=dark; samesite=strict; expires=Wed, 01 Jan 2025 05:00:00 GMT;';
    }
    else if (document.cookie == 'colormode=dark') {
        document.getElementById('sun-moon').classList.replace('has-text-teal', 'has-text-dark');
        document.getElementById('sun-moon').classList.replace('fa-sun', 'fa-moon');
        document.getElementById('html-background').classList.replace('has-dark-bkg', 'has-teal-bkg');

        let titles = document.getElementsByClassName('title');
        Array.from(titles).forEach(i => {
            i.classList.replace('has-text-teal', 'has-text-dark');
        });

        let subtitles = document.getElementsByClassName('subtitle');
        Array.from(subtitles).forEach(i => {
            i.classList.replace('has-text-teal', 'has-text-dark');
        });

        let icons = document.getElementsByClassName('fab');
        Array.from(icons).forEach(i => {
            i.classList.replace('has-text-teal', 'has-text-dark');
        });
        document.cookie = 'colormode=teal; samesite=strict; expires=Wed, 01 Jan 2025 05:00:00 GMT;';
    }
}