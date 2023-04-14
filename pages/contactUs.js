import Head from 'next/head';
import Script from 'next/script'

import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react';
const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [massage, setMassage] = useState('')

    const [token, setToken] = useState('')


    const SendMail = async (e) => {
        e.preventDefault();
        if (!name) {
            alert("please fill name")
            return
        }
        if (!email) {
            alert("please fill email")
            return
        }
        if (!number) {
            alert("please fill number")
            return
        }
        if (name && email && number && !token) {
            alert("please check reCaptcha")
            return
        }
        const response = await fetch(`https://teamage.in/accounts/api/v1/contact_us`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, number, massage })
        })
        const data = await response.json()
        console.log(data)

        setName("")
        setEmail("")
        setNumber("")
        setMassage("")

        alert("Saved your information")
    }



    function onRecaptchaChange(token) {
        setToken(token)
    }

    return (
        <div className='p-5 lg:mt-0'>
            <Head>
            <title>Contact Us | Get in Touch with Sudofire</title>
                <meta name="title" content="Join Our Team | Career Opportunities at Sudofire" />
                <meta name="description" content="Have a question or want to learn more about Sudofire's services? Contact us today and our team of experts will be happy to assist you. We specialize in creating custom digital solutions that drive business growth and success. Fill out our contact form or give us a call to start the conversation."/>
                <meta name="keywords" content="Enterprise IT Solutions, Internet of Things, SaaS, Mobility Solutions, DevOps, Cloud Services, Ecommerce Portal Development, Mobile App development, Web Development."/>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" /> */}
            {/* <Script src="https://www.google.com/recaptcha/api.js" /> */}
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-2xl mb-10 mx-auto ">
                <h1 className='text-center text-3xl text-gray-600 my-5 font-bold' >CONTACT US</h1>
                <form action="" onSubmit={SendMail} method="post" id="contact-form">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125" placeholder="Enter Name" name='name' required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123" aria-describedby="emailHelp123" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-6">
                            <input type="number" className="form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                aria-describedby="emailHelp124" placeholder="Contact No."
                                value={number} required onChange={(e) => setNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group mb-6" >
                        <textarea
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message"
                            value={massage} onChange={(e) => setMassage(e.target.value)} >
                        </textarea>
                    </div >
                    <div className='form-group mb-6'>
                        <ReCAPTCHA sitekey="6LdWOhciAAAAAK8_H2WUcMee5gg4U3K5WPohz402" onChange={onRecaptchaChange} />
                        {/* <div className="g-recaptcha pt-2 d-flex justify-center" data-sitekey="6LdWOhciAAAAAK8_H2WUcMee5gg4U3K5WPohz402"></div> */}
                        {/* <p className="capchaError text-red"></p> */}
                        {/* <p id="errorMsg" className="text-danger text-center"></p> */}
                    </div>
                    <button type="submit" onClick={SendMail} className="w-full px-6 py-2.5 bg-[#f05d58] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f05d58] active:shadow-lg transition duration-150 ease-in-out">SUBMIT</button>
                </form>
            </div>
            <div className='flex justify-center'>
                <div className="Gmap lg:h-[550px] lg:w-[1000px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14039.753686393666!2d77.0609464!3d28.3909278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30a225fa7b56b7bd!2sSudofire%20Technologies!5e0!3m2!1sen!2sin!4v1637835626642!5m2!1sen!2sin"
                        width="100%" height="100%">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;