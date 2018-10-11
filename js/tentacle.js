// Changing title functionality

function changeText (text) {
  document.getElementById('myTitle').innerHTML = text
}

document.getElementById('github').onmouseover = function () {
  changeText('<h1>40Torps</h1>')
}

document.getElementById('github').onmouseout = function () {
  changeText('<h1>40Torps</h1>')
}

document.getElementById('discord').onmouseover = function () {
  changeText('<h1>Sebastiaan#1863</h1><br><h2>Come join my server: 2 Moe 4 Festo</h2>')
}

document.getElementById('discord').onmouseout = function () {
  changeText('<h1>40Torps</h1>')
}

document.getElementById('tumblr').onmouseenter = function () {
  changeText('<h1>ore-imouto</h1>')
}

document.getElementById('tumblr').onmouseleave = function () {
  changeText('<h1>40Torps</h1>')
}

document.getElementById('twitter').onmouseover = function () {
  changeText('<h1>@40Torps</h1>')
}

document.getElementById('twitter').onmouseout = function () {
  changeText('<h1>40Torps</h1>')
}
