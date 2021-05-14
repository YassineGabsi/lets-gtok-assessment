const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
const {firestore} = require("firebase-admin");
admin.initializeApp();

const {
    Storage
} = require('@google-cloud/storage');

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const app = express();

const cors = require("cors");
const nodemailer = require("nodemailer");


const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "letsgtokyassine123@gmail.com",
        pass: "letsgtok123",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log('aaaaaaaa');
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

app.use(cors());
app.use(express.json());

app.post("/contact", jsonParser, async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    await firestore()
        .collection("Emails")
        .add({
            name: name,
            email: email,
            message: message,
        });
    const mailToHost = {
        from: name,
        to: "gabsiyassine@gmail.com",
        subject: "Contact Form Message",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mailToHost, (error) => {
        if (error) {
            res.json({status: "failed"});
        } else {
            res.json({status: "sent"});
        }
    });

    const mailToUser = {
        from: name,
        to: email,
        subject: "Contact Form Message",
        html: `<div>
                    Hello ${name} <br/>
                    Thank you for contacting Lets Gtok. Our team will shortly respond to your request.
               </div>`,
    };
    contactEmail.sendMail(mailToUser, (error) => {
        if (error) {
            res.json({status: "failed"});
        } else {
            res.json({status: "sent"});
        }
    });
});


exports.lets_gtok = functions.https.onRequest(app);

