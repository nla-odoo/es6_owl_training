document.getElementById('form').addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = document.querySelector('input').value;
    const m1 = new Model();
    m1.model(name); 
});

document.getElementById('mouseevent').addEventListener('mousedown', (ev) => {
    ev.preventDefault();
    document.getElementById("mouseevent").style.color = "red";
});

document.getElementById('mouseevent').addEventListener('mousewheel', (ev) => {
    ev.preventDefault();
    document.getElementById("mouseevent").style.fontSize = "50px";
});

document.getElementById('mouseevent').addEventListener('mouseup', (ev) => {
    ev.preventDefault();
    document.getElementById("mouseevent").style.color = "green";
});

document.getElementById('mouseevent').addEventListener('mousemove', (ev) => {
    ev.preventDefault();
    document.getElementById("mouseevent").style.fontSize = "45px";
});

document.getElementById('mouseevent').addEventListener('dblclick', (ev) => {
    ev.preventDefault();
    document.getElementById("mouseevent").innerHTML = "After Double click!!";
});

document.getElementById('test').addEventListener("mouseover", (ev) => {
    ev.preventDefault();  
    document.getElementById("test").style.color = "purple";
});

document.getElementById('test').addEventListener("mouseout", (ev) => {
    ev.preventDefault();
    document.getElementById("test").style.color = "orange";
});

document.getElementById('a').addEventListener("blur", (ev) => {
    ev.preventDefault();
    document.getElementById("a").style.background = "lightblue";
});

document.getElementById('select').addEventListener("change", (ev) => {  
    ev.preventDefault(); 
    alert("You have changed the selection!");
});

// Keydown
document.getElementById('b').addEventListener('keydown', (ev) => {
    ev.preventDefault();
    document.getElementById("b").style.backgroundColor = "AliceBlue";
});

// Keyup
document.getElementById('b').addEventListener('keyup', (ev) => {
    ev.preventDefault();
    document.getElementById("b").style.borderColor = "purple";
});
