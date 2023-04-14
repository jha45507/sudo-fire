export default function (req, res) {
    console.log("sent mail")
    console.log(process.env.SECRET_USER)
    console.log(process.env.SECRET_HASH)
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "sg2plcpnl0149.prod.sin2.secureserver.net",
        auth: {
            user: process.env.SECRET_USER,
            pass: process.env.SECRET_HASH,
        },
        secure: false,
    })

    const mailData = {
        from: 'moin@sudofire.com',
        to: 'jha45507@gmail.com',
        text: "my email",
        subject: `Message From email`,
    }
    
    transporter.sendMail(mailData, function (err, info) {
        if(err)
        console.log(err)
        else
        console.log(info)
    })
    res.status(200)
}

    // text: req.body.message + " | Sent from: " + req.body.email,
    // subject: `Message From ${req.body.name}`,
    // html: `${req.body.message}Sent from:${req.body.email}`