//Navbar js
let menu = document.querySelector('.navLinks');
let nav = document.querySelector('.navbar');
nav.addEventListener('click', function() {
  menu.classList.toggle('active');
  nav.classList.toggle('navActive');
});
let author = document.getElementById('bookAuthor');
  let name = document.getElementById('bookName');
//Body js
show();
let btn = document.querySelector('.bookBtn');
btn.addEventListener('click', function() {
  
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    myObj = [];
  }
  else {
    myObj = JSON.parse(notes);
  }
  let fiction = document.getElementById('fiction');
  let Dramatic = document.getElementById('Dramatic');
  let Educational = document.getElementById('Educational');
  let obj = {
    auo: author.value,
    naam: name.value
  }
  myObj.push(obj);
  localStorage.setItem("notes", JSON.stringify(myObj));
  author.value = '';
  name.value = '';
  console.log(myObj);
  show();
});

function show() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    myObj = [];
  }
  else {
    myObj = JSON.parse(notes);
  }
  let html = '';
  myObj.forEach(function(element, index) {
    html += `
      <tr>
        <td>${index+1}</td>
        <td>${element.auo}</td>
        <td>${element.naam}</td>
        <td>fiction</td>      
      </tr>`
  });
  if (myObj.length != 0) {
    let tb = document.getElementById('tbody');
    tb.innerHTML = html;
  }
}