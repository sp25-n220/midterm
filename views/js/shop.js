import {invoiceGeneratePdf} from "./app.js"

export class shopPdf extends invoiceGeneratePdf {

    generateInvoice(client,cartItems) {
        this.addHeader(`Tony's Tiles`, "gold");

        this.position.y += 15;

        this.addText(`Client Name:`, "black");
        this.position.y += 5;
        this.addText(`${client.name}`)
        

        this.addText(`Client Emai`, "black");  
        this.position.y += 5;
        this.addText(`${client.name}`)



        const nums = "0123456789"; 

        invoiceNum = '';

        for (let i = 0; i < 8; i++) {
            invoiceNum += nums.charAt(Math.floor(Math.random() * nums.length));

            console.log(invoiceNum);

        }

        return invoiceNum;

        this.position.y += 10;

        const worldDate = new Date();

        this.addText(`Date: ${worldDate}`, "black");

        let amount = 0;

        for (let i = 0; )







        this.addHeader(`Product Name: ${productName} $: ${productPrice} Amount: ${productCost} Total: ${amount}`, "blue");


        


    }


}