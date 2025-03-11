import {shopPdf} from "./app.js";

const cart = [];



function addToCart(pName, price) {

    //Check if item is in the cart 
    const existingProduct = cart.find(item => item.name === pName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: pName, price: price, quantity: 1});
    }
   

    buttonDisplay();
}

document.querySelector(".tile1-button").addEventListener("click", () => {
    addToCart("Normal Tile", 71.99);
});

document.querySelector(".tile2-button").addEventListener("click", () => {
    addToCart("Cool Tile", 100.99);
});

document.querySelector(".tile3-button").addEventListener("click", () => {
    addToCart("Coolest Tile", 125.99);
});


function buttonDisplay() {

    const hasItems = cart.length > 0;

    const hasName = document.getElementById("userName");
    
    const hasEmail = document.getElementById("email");

    const viewTicketButton = document.getElementById('view-invoice');


    if (!(hasItems && hasName && hasEmail)) {
        viewTicketButton.style.display = 'none';
    } else {
        viewTicketButton.style.display = 'inline-block';  
    }   
}


document.getElementById('view-invoice').addEventListener('click', () => {
    const client = {
        name: document.getElementById("userName").value,
        email: document.getElementById("email").value
    };
    
    const shopPdfInstance = new shopPdf("invoice-pdf");
    shopPdfInstance.generateInvoice(client, cart);

    document.getElementById('invoice-pdf').src = shopPdfInstance.getPdfUrl(); 
});

document.getElementById("dl-invoice").addEventListener("click", () => {
    const shopPdfInstance = new shopPdf("invoice-pdf"); 
    shopPdfInstance.pdfDoc.save("invoice.pdf");
    console.log("Download button clicked");
});