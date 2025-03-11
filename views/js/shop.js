import {invoiceGeneratePdf} from "./app.js"

export class shopPdf extends invoiceGeneratePdf {

    generateInvoice(client, cartItems) {
        this.addHeader(`Tony's Tiles`, "gold");

        this.position.y += 15;

        this.addText(`Client Name:`, "black");
        this.position.y += 5;
        this.addText(`${client.name}`)
        

        this.addText(`Client Email`, "black");  
        this.position.y += 5;
        this.addText(`${client.email}`)

        const invoiceNum = this.generateInvoiceNumber();

        this.addText(`Invoice Number: ${invoiceNum}`, "black");
        
       

        
        

        this.position.y += 10;

        const worldDate = new Date();

        this.addText(`Date: ${worldDate}`, "black");

        let amount = 0;

        cartItems.forEach((product) => {
            const totalAmount = product.price * product.quantity;

            amount += totalAmount;


            this.addHeader(`${product.name}, ${product.price}, $${product.quantity}, $${totalAmount}  `);
        });

        const tax = amount * .07;

        const total = amount + tax;




        
        this.addText(`Total before tax $${amount}`);
        this.addText(`Tax (7%): $${tax}`);
        this.addText(`Grand Total: $${total}`);

    }

    generateInvoiceNumber() {
            
        const nums = "0123456789"; 
        
        let invoiceNum = '';
        
        for (let i = 0; i < 8; i++) {
            invoiceNum += nums.charAt(Math.floor(Math.random() * nums.length));

            console.log(invoiceNum);

        }

        return invoiceNum;
    }

}