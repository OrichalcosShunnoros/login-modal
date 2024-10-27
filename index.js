function init(){
	var x = document.getElementById("inises");
    var y = document.getElementById("regusu");
    x.style.display = "block";
    y.style.display = "none";
}

function inises() {
    var x = document.getElementById("inises");
    var y = document.getElementById("regusu");
    
    body.style.backgroundColor = "rgb(0,0,0,0.1)";
    
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none"; 
    } else {
        x.style.display = "block";
        y.style.display = "none";      
    }
    document.getElementById("inBtn").disabled = true;
    document.getElementById("regBtn").disabled = true;
    
    
    
}

function regusu() {
    var x = document.getElementById("inises");
    var y = document.getElementById("regusu");
    let body = document.getElementById("body");

    body.style.backgroundColor = "rgb(0,0,0,0.1)";

    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    document.getElementById("inBtn").disabled = true;
    document.getElementById("regBtn").disabled = true;
    
}

function cerrar1() {
    var x = document.getElementById("inises");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        body.style.backgroundColor = "white";
        
    }
    document.getElementById("regBtn").disabled = false;
    document.getElementById("inBtn").disabled = false;
}

function cerrar2() {
    var x = document.getElementById("regusu");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        body.style.backgroundColor = "white";
    }
    document.getElementById("regBtn").disabled = false;
    document.getElementById("inBtn").disabled = false;
}











