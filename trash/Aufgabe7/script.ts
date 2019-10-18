//Test123
console.log("Konsolen-Test");

let St: string = "srjshtg"
let S1: number = 87685
let var1 : number = 1;
var1 = 2;

window.onload = function () 
{  
    alert("YEAAAAH BOOOOOOOOOOOOIIIIIIIYYYYYYY");
    document.getElementById("gg").addEventListener("click", GG);
    document.getElementById("ez").addEventListener("click", EZ);
    Rechnung();
    NeuesElement();
}

    
function GG ()
{
    document.getElementById("gg").innerHTML = "Geclickte Glocken";
    console.log("Die Glocken wurden geläutet");
}
function EZ ()

{ document.getElementById("ez").innerHTML = "Boing Bing";
document.getElementById("ez").className = "CC";
console.log("Class wurde verändert ihr looser")

}

function Rechnung()
{
    console.log(St+S1);
    console.log(St+St);
    console.log(S1+S1);
}

function NeuesElement ()
{
    let newPara = document.createElement ("Paragraph");
    let position = document.getElementById ("body");
    position.appendChild(newPara);
    newPara.innerHTML = "Ich wurde generiert"
}