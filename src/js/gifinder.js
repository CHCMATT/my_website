function getUserInput() {
  console.log(document.getElementById('search_text').value);
  return document.getElementById('search_text').value;
}

function hideKeyboard() {
  setTimeout(function() {
    var field = document.createElement('input');
    field.setAttribute('type', 'text');
    field.setAttribute('style', 'position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;');
    document.body.appendChild(field);
    field.onfocus = function(){
      setTimeout(function() {
        field.setAttribute('style', 'display:none;');
        setTimeout(function() {
          document.body.removeChild(field);
          document.body.focus();
        }, 14);
      }, 200);
    };
    field.focus();
  }, 50);
}

function pushToDOM(response) {
  response = JSON.parse(response);
  let container = document.getElementById('gif');
  let images = response.data;
  container.innerHTML = '';
  var received_gifs = [];

  console.time('GIFs Recovery');
  images.forEach(function (image) {
    let src = image.images.fixed_height.url;
    let gif_temp = "\<img src='" + src + "' class='container-image' />";
    received_gifs.push(gif_temp);
  });
  console.timeEnd('GIFs Recovery');

  console.time('GIFs Display');
  for (let i = 0 ; i < received_gifs.length ; ++i) {
    container.innerHTML += received_gifs[i];
  }
  console.timeEnd('GIFs Display');
}

function searchGif(key_words) {
  console.time('Data Request');
  let api_url = 'https://api.giphy.com/v1/gifs/search?api_key=KENMXUZpkp4ViX8gyRCMuMpRkB9bMXBm&q=' + key_words;

  let api_AJAX_call = new XMLHttpRequest();
  api_AJAX_call.open('GET', api_url);
  api_AJAX_call.send();


  api_AJAX_call.addEventListener('load', function (data) {
    console.timeEnd('Data Request');
    pushToDOM(data.target.response);
  });
}

function highlightButton() {
  document.getElementById('search_button').style.backgroundColor = 'rgb(22, 102, 95)';
}

function restoreButton() {
  document.getElementById('search_button').style.backgroundColor = 'rgb(34, 150, 140)';
}

let is_touch = window.matchMedia('(pointer: coarse)').matches;

if (!is_touch) {
  document.getElementById('search_button').addEventListener('mouseover', function () {
    highlightButton();
  });
  document.getElementById('search_button').addEventListener('mouseout', function() {
    restoreButton();
  });

  document.getElementById('search_button').addEventListener('mouseup', function () {
    searchGif(getUserInput());
    });
}
else {
  document.getElementById('search_button').addEventListener('touchstart', function () { 
    highlightButton();
    });
  document.getElementById('search_button').addEventListener('touchend', function () {
    restoreButton();
    hideKeyboard();
    searchGif(getUserInput());
    });
}

document.getElementById('search_text').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    highlightButton();
  }
});

document.getElementById('search_text').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') { 
    restoreButton();
    if (is_touch) hideKeyboard();
    searchGif(getUserInput());
  }
});