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
  changeText('<h1>Sebastiaan#1863</h1>')
}

document.getElementById('discord').onmouseout = function () {
  changeText('<h1>40Torps</h1>')
}

document.getElementById('tumblr').onmouseover = function () {
  changeText('<h1>ore-imouto</h1>')
}

document.getElementById('tumblr').onmouseout = function () {
  changeText('<h1>40Torps</h1>')
}

document.getElementById('twitter').onmouseover = function () {
  changeText('<h1>@40Torps</h1>')
}

document.getElementById('twitter').onmouseout = function () {
  changeText('<h1>40Torps</h1>')
}
