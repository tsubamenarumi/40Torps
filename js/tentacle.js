// General vars
var Title = '<h1>40Torps</h1>'

// Detecting touch devices
var tap = ('ontouchstart' in document.documentElement)

// Changing title functionality
function changeText (text) {
  document.getElementById('myTitle').innerHTML = text
}

// Changing titles so long as it's not a touch device
if (!tap) {
  document.getElementById('discord').onmouseover = function () {
    changeText('<h1>Sebastiaan#1863</h1><br><h2>Come join my server: 2 Moe 4 Festo</h2>')
  }

  document.getElementById('discord').onmouseout = function () {
    changeText(Title)
  }

  document.getElementById('github').onmouseover = function () {
    changeText('<h1>40Torps</h1>')
  }

  document.getElementById('github').onmouseout = function () {
    changeText(Title)
  }

  document.getElementById('tumblr').onmouseenter = function () {
    changeText('<h1>ore-imouto</h1>')
  }

  document.getElementById('tumblr').onmouseout = function () {
    changeText(Title)
  }

  document.getElementById('twitter').onmouseover = function () {
    changeText('<h1>@40Torps</h1>')
  }

  document.getElementById('twitter').onmouseout = function () {
    changeText(Title)
  }
}
