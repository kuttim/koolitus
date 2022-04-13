let firstName = prompt('Mis on sinu nimi?');

if (firstName.length >= 6) {
  document.getElementById('name').innerHTML =
    'Tere, ' +
    firstName +
    '!' +
    ' Küll sul on pikk suurepärane nimi.';
  document.getElementById('image').innerHTML =
    "<img src='https://picsum.photos/300' />";
} else {
  document.getElementById('name').innerHTML =
    'Tere, ' + firstName + '!' + ' Küll sul on imeline lühike nimi.';
  document.getElementById('image').innerHTML =
    "<img src='https://picsum.photos/200' />";
}
