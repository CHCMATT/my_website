function toggleLights() {
    if (document.getElementById("toggle-lights").innerHTML == '<i class="far fa-lightbulb"></i>') {
        document.getElementById("toggle-lights").innerHTML = '<i class="fas fa-lightbulb"></i>';
        console.log("option1");
    }
    else if (document.getElementById("toggle-lights").innerHTML == '<i class="fas fa-lightbulb"></i>') {
        document.getElementById("toggle-lights").innerHTML = '<i class="far fa-lightbulb"></i>';
        console.log("option2");
    }
    else {
        console.log("returning");
        console.log(document.getElementById("switch-off").id);
        return false; 
    }
}