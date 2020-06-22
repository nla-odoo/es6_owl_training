document.getElementById('add_button_by_input_form').addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = this.querySelector('input').value;
    const mode = new TableModel();
    mode.model(name); 
})

/* Focus */
document.getElementById("name").addEventListener("focus", (ev) => {
    ev.preventDefault();
    document.getElementById("name").style.backgroundColor = "lightgrey";
})

 // Blur
document.getElementById("name").addEventListener("blur", (ev) => {
    ev.preventDefault();
    document.getElementById("name").style.backgroundColor = "lightblue";
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
document.getElementById('name').addEventListener('keydown', (ev) => {
    document.getElementById("name").style.backgroundColor = "lightred";
});

/*Keyup*/
document.getElementById('name').addEventListener('keyup', (ev) => {
    document.getElementById("name").style.color = "purple";
});

/*blur*/
document.getElementById('x').addEventListener("mousemove", (ev) => {
    ev.preventDefault();
    document.getElementById("x").style.background = "yellow";
});