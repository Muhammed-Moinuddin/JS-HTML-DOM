function changeParagraph(){
    document.getElementById("demo").innerHTML= "My name is Moin";
    document.getElementById("image1").src = "images/Second Certificate.png";
}
// index of that tag / class name is necessary (not for all)
function changeHeaderOne(){
    document.getElementsByTagName("h1")[0].innerHTML = "Hello Mates";
}
function changeParaColor() {
    document.getElementsByClassName("para-color")[0].style.color = "blue";
}
function changeParaColorQuery() {
    document.querySelectorAll("p.query")[0].style.color = "green";
}
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("check").innerHTML = text;