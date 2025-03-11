import {shopPdf} from "./app.js";

const cart = [];



addToCart(pName, price) {
    const 
}


function buttonValue() {
    const hasItems = cart.length > 0;

    const hasName = document.getElementById("userName");
    
    const hasEmail = document.getElementById("email");

    if (hasName.value.trim() == "" && hasEmail.value.trim() == "") {
        document.getElementById('view-ticket').disabled; 
        document.getElementById('view-ticket').disabled; 
    }
}