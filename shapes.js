window.onload = function() {
    let square1 = document.querySelector(".square1");
    let square2 = document.querySelector(".square2");
    let square3 = document.querySelector(".square3");
    let message1 = document.querySelector("#fact1");
    let message2 = document.querySelector("#fact2");
    let message3 = document.querySelector("#fact3");
    let message4 = document.querySelector("#fact4");
    let message5 = document.querySelector("#fact5");
    let conc = document.querySelector("#conc");

    let posX = window.scrollX;
    let posY = window.scrollY;
    let originX = window.innerWidth / 2;
    let originY = window.innerHeight / 2;

    let m = posY - 100;

    console.log("window.innerWidth: " + originX);
    console.log("window.innerHeight: " + originY);

   
    square1.style.transform = "translate("+(originX - 25)+"px, "+(m + posY + originY - 25)+"px)";
    square1.style.zIndex = "1";
    message1.style.zIndex = "10";
    message2.style.zIndex = "10";
    message3.style.zIndex = "10";
    message4.style.zIndex = "10";
    message5.style.zIndex = "10";
    conc.style.zIndex = "10";

    square2.style.transform = "translate("+(originX - 50)+"px, "+(posY + originY - 50)+"px)";
    square2.style.zIndex = "0";
    message1.style.zIndex = "10";
    message2.style.zIndex = "10";
    message3.style.zIndex = "10";
    message4.style.zIndex = "10";
    message5.style.zIndex = "10";
    conc.style.zIndex = "10";

    square3.style.transform = "translate("+(originX - 75)+"px, "+((-1 * m) + posY + originY - 75)+"px)";
    square3.style.zIndex = "-1";
    message1.style.zIndex = "10";
    message2.style.zIndex = "10";
    message3.style.zIndex = "10";
    message4.style.zIndex = "10";
    message5.style.zIndex = "10";
    conc.style.zIndex = "10";
}

function test() {
    console.log("Scroll.");
    let posY = window.scrollY;
    console.log(posY);
}

function moveSquare() {
    let square1 = document.querySelector(".square1");
    let square2 = document.querySelector(".square2");
    let square3 = document.querySelector(".square3");

    let posX = window.scrollX;
    let posY = window.scrollY;
    let originX = window.innerWidth / 2;
    let originY = window.innerHeight / 2;

    let m = posY - 500;

    console.log("window.innerWidth: " + originX);
    console.log("window.innerHeight: " + originY);

   
    square1.style.transform = "translate("+(originX - 25)+"px, "+(m + posY + originY - 25)+"px)";
    square1.style.zIndex = "1";

    square2.style.transform = "translate("+(originX - 50)+"px, "+(posY + originY - 50)+"px)";
    square2.style.zIndex = "0";

    square3.style.transform = "translate("+(originX - 75)+"px, "+((-1 * m) + posY + originY - 75)+"px)";
    square3.style.zIndex = "-1";
    
}

function fact1() {
    let fact = document.getElementById("fact1");

    fact.style.display = "block";
}

function fact2() {
    let fact = document.getElementById("fact2");

    fact.style.display = "block";
}

function fact3() {
    let fact = document.getElementById("fact3");

    fact.style.display = "block";
}

function fact4() {
    let fact = document.getElementById("fact4");

    fact.style.display = "block";
}

function fact5() {
    let fact = document.getElementById("fact5");

    fact.style.display = "block";
}
