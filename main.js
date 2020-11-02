const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var app = express();

app.use(cors({origin: "*"}));
app.use(bodyParser.json());

app.listen(3000, () =>{
    console.log("Servidor en => http://localhost:3000");
})

app.post("/send-email", (req, res) =>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
          user: 'ienekamartinezg@gmail.com',
          pass: 'inkbcn1994',
        }
      });

    var mailOptions = {
        from: "<Sender’s email>",
        to: "ienekamartinezg@gmail.com",
        subject: "<Sender’s name>",
        html: "<h1>And here is the place for HTML</h1>"
    }

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error) {
            console.log(error);
            res.status(400);
            res.send({ error: "Failed to send email" });
        }else {
            console.log("Email has been sent");
        res.send(info);
        }
    })
});