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