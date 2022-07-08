function toggleLights() {
    let bulbDoc = document.getElementById("light-bulb");
    let bulbClasses = bulbDoc.classList;

    let bkgDoc = document.getElementById("html-background");
    let bkgClasses = bkgDoc.classList;

    let textEleLight = document.getElementsByClassName("has-text-light");
    let textEleDark = document.getElementsByClassName("has-text-dark");

    if (bulbClasses == 'fas fa-lightbulb has-text-dark') {
        bulbClasses.replace('fas','far');
        bkgClasses.replace('has-light-bkg','has-dark-bkg');
        Array.from(textEleDark).forEach(i => {
            i.classList.replace('has-text-dark','has-text-light');
        });
    }
    else if (bulbClasses == 'far fa-lightbulb has-text-light') {
        bulbClasses.replace('far','fas');
        bkgClasses.replace('has-dark-bkg','has-light-bkg');
        Array.from(textEleLight).forEach(i => {
            i.classList.replace('has-text-light','has-text-dark');
        });
    }
}