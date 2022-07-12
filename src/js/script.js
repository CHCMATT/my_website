document.addEventListener('DOMContentLoaded', async function() {
    console.log("dark", document.cookie == "colormode=dark");
    console.log("teal", document.cookie == "colormode=teal");
    console.log(document.cookie);

    if (document.cookie == "colormode=teal") {
        // light bulb
        document.getElementById('light-bulb').classList.add('has-text-dark');
        // background color
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
    } else if (document.cookie == "colormode=dark") {
        // light bulb
        document.getElementById('light-bulb').classList.add('has-text-teal');
        // background color
        document.getElementById('html-background').classList.add('has-dark-bkg');

        // "Hello, my name is"...
        let titles = document.getElementsByClassName('title');
        Array.from(titles).forEach(i => {
            i.classList.add('has-text-teal');
        });

        // "Or as my internet friends"..., "Check out my online profiles"...
        let subtitles = document.getElementsByClassName('subtitle');
        Array.from(subtitles).forEach(i => {
            i.classList.add('has-text-teal');
        });

        // social media icons
        let icons = document.getElementsByClassName('fab');
        Array.from(icons).forEach(i => {
            i.classList.add('has-text-teal');
        });
    } else {
        // light bulb
        document.getElementById('light-bulb').classList.add('has-text-dark');
        // background color
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
    }
});

function toggleLights() {
    console.log('toggling lights?');
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
        console.log(document.cookie);
    }
    else if (bulbClasses == 'far fa-lightbulb has-text-teal') {
        bulbClasses.replace('far','fas');
        bkgClasses.replace('has-dark-bkg','has-teal-bkg');
        Array.from(textEleTeal).forEach(i => {
            i.classList.replace('has-text-teal','has-text-dark');
        });
        document.cookie = 'colormode=teal; samesite=strict; expires=Wed, 01 Jan 2025 05:00:00 GMT;';
        console.log(document.cookie);
    }
}
