const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;
const admin = require("firebase-admin");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

admin.initializeApp();

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

mailTransport.use("compile", htmlToText());

const APP_NAME = 'Mars Pizza Co.';

exports.sendUserEmail = functions.database
    .ref("/order/{pushId}")
    .onCreate(order => {
        sendOrderEmail(order.val());
    });

function sendOrderEmail(order) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@MarsPizzaCo.com>`,
        to: order.email,
        subject: `Your order from ${APP_NAME}`,
        html: `
            <table style="width:500px; margin: auto">
                <tr>
                    <th>
                        ${order.displayName}
                    </th>
                    <th>
                        Your ordered some pizza! Here is your order confirmation.
                    </th>
                </tr>
                ${order.order.map(({name, quantity, price}) => `
                    <tr> 
                        <td> 
                            ${quantity}
                        </td>
                        <td> 
                            ${name}
                        </td>
                        <td> 
                            ${price}
                        </td>
                    </tr>
                `).join("")}
            </table>
        `
    };
    mailTransport.sendMail(mailOptions);
}


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
