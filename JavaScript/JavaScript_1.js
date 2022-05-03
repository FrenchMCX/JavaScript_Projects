//Function for output
function Cat_Function() {
    var Cat_Output;
    var Cats = document.getElementById("Cat_Input").value;
    var Cat_String = " is a great choice!";
    switch(Cats) {
        case "Tiger":
            Cat_Output = "Tiger" + Cat_String;
        break;
        case "Lion":
            Cat_Output = "Lion" + Cat_String;
        break;
        case "Liger":
            Cat_Output = "Liger" + Cat_String;
        break;
        case "Leopard":
            Cat_Output = "Leopard" + Cat_String;
        break;
        case "Cougar":
            Cat_Output = "Cougar" + Cat_String;
        break;
        case "Cheetah":
            Cat_Output = "Cheetah" + Cat_String;
        break;
        default:
        Cat_Output = "Please enter a cat exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Cat_Output;
}

//text change function
function Change() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has  changed!";
}

//canvas graphic
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

//gradient for canvas
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 200, 100);