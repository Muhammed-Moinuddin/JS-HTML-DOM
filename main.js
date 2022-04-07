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
function validateForm(){
    let x = document.forms["myForm"]["fname"];
    if (x = ""){
        alert("Name must be filled out");
        return false
    }
}
function myfunction(){
    let x = document.getElementById("numb").value;
    if (isNaN(x) || x < 1 || x > 10) {
        document.getElementById("number-text").innerHTML = "Number is not Valid";
    } else {
        document.getElementById("number-text").innerHTML = "Number is Valid";
    }
}
function changeHeading() {
    document.getElementById("changeH1").style.color = "blue";
}
//Function for animation
function myMove(){
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    //The clearInterval() method clears a timer set with the setInterval() method.
    id = setInterval(frame, 5);
    /*The setInterval() method calls a function at specified intervals (in milliseconds).
    The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
    1 second = 1000 milliseconds. */
    function frame(){
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
