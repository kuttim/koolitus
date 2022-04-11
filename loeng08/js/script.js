let firstName = prompt('Mis on sinu nimi?');

if (firstName.length >= 6) {
  document.getElementById('name').innerHTML =
    'Tere ' + firstName + ' Küll sul on pikk suurepärane nimi.';
} else {
  document.getElementById('name').innerHTML =
    'Tere ' + firstName + ' Küll sul on imeline lühike nimi.';
}
