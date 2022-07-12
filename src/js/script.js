document.addEventListener('DOMContentLoaded', async function() {

    if (document.cookie == "colormode=teal") {
        document.getElementById('light-bulb').classList.add('has-text-dark');
        document.getElementById('html-background').classList.add('has-teal-bkg');

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
    } else if (document.cookie == "colormode=dark") {
        document.getElementById('light-bulb').classList.add('has-text-teal');
        document.getElementById('html-background').classList.add('has-dark-bkg');

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
    } else {
        document.getElementById('light-bulb').classList.add('has-text-dark');
        document.getElementById('html-background').classList.add('has-teal-bkg');

        // "Hello, my name is"...
        let titles = document.getElementsByClassName('title');
        Array.from(titles).forEach(i => {
            i.classList.add('has-text-dark');
        });

        // "Or as my internet friends"..., "Check out my online profiles"...
        let subtitles = document.getElementsByClassName('subtitle');
        Array.from(subtitles).forEach(i => {
            i.classList.add('has-text-dark');
        });

        // social media icons
        let icons = document.getElementsByClassName('fab');
        Array.from(icons).forEach(i => {
            i.classList.add('has-text-dark');
        });
        document.cookie = 'colormode=teal; samesite=strict; expires=Wed, 01 Jan 2025 05:00:00 GMT;';
    }
});

function toggleLights() {
    let bulbDoc = document.getElementById('light-bulb');
    let bulbClasses = bulbDoc.classList;

    let bkgDoc = document.getElementById('html-background');
    let bkgClasses = bkgDoc.classList;

    let textEleTeal = document.getElementsByClassName('has-text-teal');
    let textEleDark = document.getElementsByClassName('has-text-dark');

    if (bulbClasses == 'fas fa-lightbulb has-text-dark') {
        bulbClasses.replace('fas','far');
        bkgClasses.replace('has-teal-bkg','has-dark-bkg');
        Array.from(textEleDark).forEach(i => {
            i.classList.replace('has-text-dark','has-text-teal');
        });
        document.cookie = 'colormode=dark; samesite=strict; expires=Wed, 01 Jan 2025 05:00:00 GMT;';
    }
    else if (bulbClasses == 'far fa-lightbulb has-text-teal') {
        bulbClasses.replace('far','fas');
        bkgClasses.replace('has-dark-bkg','has-teal-bkg');
        Array.from(textEleTeal).forEach(i => {
            i.classList.replace('has-text-teal','has-text-dark');
        });
        document.cookie = 'colormode=teal; samesite=strict; expires=Wed, 01 Jan 2025 05:00:00 GMT;';
    }
}
