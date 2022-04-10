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
// for (let i = 0; i < x.length ; i++) {
//   text += x.elements[i].value + "<br>";
// }
//document.getElementById("check").innerHTML = text;
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
function checkCookies(){
    let text = "";
    if (navigator.cookieEnabled == true){
        text = "Cookies are Enabled";
    } else {
        text = "Cookies are Disabled";
    }
    document.getElementById("onload-cookies").innerHTML = text;
}
function upperCase() {
    const x = document.getElementById("input-1");
    x.value = x.value.toUpperCase();
}
function mOver(obj){
    obj.innerHTML = "Thank You"
}
function mOut(obj){
    obj.innerHTML = "Mouse Over Me"
}
function mUp(obj){
    obj.style.backgroundColor = "yellow"
    obj.style.color = "green"
    obj.innerHTML = "Thank You!"
}
function mDown(obj){
    obj.style.backgroundColor = "green"
    obj.style.color = "yellow"
    obj.innerHTML = "Release Me"
}
// document.getElementById("btn-1").addEventListener("click", displayDate);
// function displayDate(){
//     document.getElementById("event-listener-1").innerHTML = Date();
// }
//document.getElementById("btn-1").addEventListener('click', displayDate);

function displayDate() {
  document.getElementById("event-listener-1").innerHTML = Date();
}
window.onload = function(){
//Bubbling Concept
document.querySelector("#grandParent").addEventListener('click', (e) => {
    console.log("GrandParent Clicked!");
});
document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("Parent Clicked!");
});
document.querySelector("#child")
.addEventListener('click', () => {
    console.log("Child Clicked!");
});
//Capturing Concept
document.querySelector("#grandParent2").addEventListener('click', () => {
    console.log("GrandParent Clicked!");
} , true);
document.querySelector("#parent2")
.addEventListener('click', () => {
    console.log("Parent Clicked!");
} , true);
document.querySelector("#child2")
.addEventListener('click', () => {
    console.log("Child Clicked!");
} , true);
//Understanding W3C Standard i.e First Capturing Then Bubbling
document.querySelector("#grandParent3").addEventListener('click', () => {
    console.log("GrandParent Clicked!");
} , true);
document.querySelector("#parent3")
.addEventListener('click', () => {
    console.log("Parent Clicked!");
} , false);
document.querySelector("#child3")
.addEventListener('click', () => {
    console.log("Child Clicked!");
} , true);
//Propagation Concept
document.querySelector("#grandParent4").addEventListener('click', () => {
    console.log("GrandParent Clicked!");
} , false);
document.querySelector("#parent4")
.addEventListener('click', (e) => {
    console.log("Parent Clicked!");
    e.stopPropagation();
} , false);
document.querySelector("#child4")
.addEventListener('click', () => {
    console.log("Child Clicked!");
} , false);
//
var z = document.getElementById("two-events");
z.addEventListener('click', () => {
    console.log("Hello World")
    alert ("Hello World");
});
z.addEventListener('click', () => {
    console.log("This function was also executed")
    alert ("This function was also executed");
});
window.addEventListener("resize" , () => {
    document.getElementById("window-handler").innerHTML = Math.random();
});
}
//Javascript removeEventListener()
document.getElementById("event-div").addEventListener("mousemove", myFunction1);
function myFunction1(){
    document.getElementById("display-random-number").innerHTML = Math.random();
}
function removeHandler() {
    document.getElementById("event-div").removeEventListener("mousemove", myFunction1);
}