document.getElementById('add_button_by_input_form').addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = this.querySelector('input').value;
    const mode = new TableModel();
    mode.model(name); 
})

/* Focus */
document.getElementById("temp").addEventListener("focus", (ev) => {
    ev.preventDefault();
    document.getElementById("temp").style.backgroundColor = "lightgrey";
})

 // Blur
document.getElementById("temp").addEventListener("blur", (ev) => {
    ev.preventDefault();
    document.getElementById("temp").style.backgroundColor = "lightblue";
})

/*mouseover*/
document.getElementById('test').addEventListener('mouseover', (ev) => {
    ev.preventDefault();
    document.getElementById("test").style.color = "darkgrey";
});

/*mouseleave*/
document.getElementById('test').addEventListener('mouseleave', (ev) => {
    ev.preventDefault();
    document.getElementById("test").style.color = "black";
});
/*mousedown*/
document.getElementById('test').addEventListener('mousedown', (ev) => {
    ev.preventDefault();
    document.getElementById("test").style.color = "blue";
});
/*dblclick*/
document.getElementById('test').addEventListener('dblclick', (ev) => {
    ev.preventDefault();
    document.getElementById("test").style.color = "red";
});


/*contextmenu*/
document.getElementById('content').addEventListener('contextmenu', event => {
    event.preventDefault();
});

/*keydown*/
document.getElementById('fname').addEventListener('keydown', (ev) => {
    document.getElementById("fname").style.backgroundColor = "lightred";
});

/*Keyup*/
document.getElementById('fname').addEventListener('keyup', (ev) => {
    document.getElementById("fname").style.borderColor = "purple";
});

/*blur*/
document.getElementById('x').addEventListener("mousemove", (ev) => {
    ev.preventDefault();
    document.getElementById("x").style.background = "yellow";
});