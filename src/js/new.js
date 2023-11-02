
// Look for button or enter key press
let is_touch = window.matchMedia("(pointer: coarse)").matches;

if (!is_touch) {
	document.getElementById("search_button").addEventListener("mouseup", function () {
    searchGif(getUserInput());
  });
}
else {
	document.getElementById("search_button").addEventListener("touchend", function () {
    hideKeyboard();
    searchGif(getUserInput());
    });
}

document.getElementById("search_text").addEventListener("keyup", function(event) {
  if (event.key === "Enter") { 
    if (is_touch) hideKeyboard();
    searchGif(getUserInput());
  }
});

// Get what the user typed into the box
function getUserInput() {
  return document.getElementById("search_text").value;
}


// Hide keyboard on button press if on mobile
function hideKeyboard() {
  setTimeout(function() {
    var field = document.createElement("input");
    field.setAttribute("type", "text");
    field.setAttribute("style", "position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;");
    document.body.appendChild(field);
    field.onfocus = function(){
      setTimeout(function() {
        field.setAttribute("style", "display:none;");
        setTimeout(function() {
          document.body.removeChild(field);
          document.body.focus();
        }, 14);
      }, 200);
    };
    field.focus();
  }, 50);
}

//
// GIPHY Section
//
function pushToDOMGiphy(response) {
  response = JSON.parse(response);
  let container = document.getElementById("gif");
  let images = response.data;
  container.innerHTML = "";
  var received_gifs = [];

  console.time("Giphy GIFs Recovery");
  images.forEach(function (image) {
    // Giphy
    let src = image.images.fixed_height.url;

    // Tenor
    //let src = image.media_formats.tinygif.url;
    let gif_temp = "<div class='has-tooltip-bottom' data-tooltip='Giphy'><button class='button is-link hvrbtn'><i class='fa-solid fa-copy'></i></button><img src='" + src + "' /></div>";
    received_gifs.push(gif_temp);
  });
  console.timeEnd("Giphy GIFs Recovery");

  console.time("Giphy GIFs Display");
  for (let i = 0 ; i < received_gifs.length ; ++i) {
    container.innerHTML += received_gifs[i];
  }
  console.timeEnd("Giphy GIFs Display");
}

function searchGif(key_words) {
  console.time("Giphy Data Request");
  // Giphy
  let api_url = "https://api.giphy.com/v1/gifs/search?api_key=KENMXUZpkp4ViX8gyRCMuMpRkB9bMXBm&q=" + key_words;
  
  // Tenor
  //let api_url = "https://tenor.googleapis.com/v2/search?key=AIzaSyDFCBsNfvqLpwGq3fBuv9SSm1TrwCqQtU8&q=" + key_words;

  let api_AJAX_call = new XMLHttpRequest();
  api_AJAX_call.open("GET", api_url);
  api_AJAX_call.send();


  api_AJAX_call.addEventListener("load", function (data) {
    console.timeEnd("Giphy Data Request");
    pushToDOMGiphy(data.target.response);
  });
}
