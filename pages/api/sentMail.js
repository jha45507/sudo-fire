import { SMTPClient } from 'emailjs';
export default function handler(req, res) {
    // require('dotenv').config()
    // const user = process.env.SECRET_USER
    // const pass = process.env.SECRET_HASH
    // console.log(user, "this is my variable")
    // console.log(pass, "this is my variable")
    const client = new SMTPClient({
        user: "moin@sudofire.com",
        password: "82?q$e6-%ILx",
        host: "sg2plcpnl0149.prod.sin2.secureserver.net",
        port: 465
    });
    console.log(client)

    client.send(
        {
            text: 'i hope this works',
            from: 'moin@sudofire.com',
            to: 'jha45507@gmail.com',
            subject: 'testing emailjs',
        },
        (err, message) => {
            console.log(err || message);
        }
    );
    res.status(200).end(JSON.stringify({ message:'Send Mail' }))
}
