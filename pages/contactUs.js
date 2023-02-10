import Script from 'next/script'
import { useEffect } from 'react';
const ContactUs = () => {
    useEffect(() => {
        window.onload = function () {
            var recaptcha = document.forms["contact-form"]["g-recaptcha-response"];
            recaptcha.required = true;
            recaptcha.oninvalid = function (e) {
                // do something
                $(".capchaError").html("Please Check Captcha");
                return false;
            }
        }
        var form = document.getElementById('contact-form'); // form has to have ID: <form id="formID">
        // form.noValidate = true;
        form.addEventListener('submit', function (event) { // listen for form submitting
            if (!event.target.checkValidity()) {
                event.preventDefault(); // dismiss the default functionality
            }
        }, false);
    }, [])
    return (
        <div className='p-5 mt-10 md:mt-0'>
            <Script src="https://www.google.com/recaptcha/api.js"/>

            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-2xl my-10 mx-auto ">
                <h1 className='text-center text-3xl text-gray-600 my-5 font-bold' >CONTACT US</h1>
                <form action="/send-data-here" method="post" id="contact-form">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                            placeholder="Enter Name" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group mb-6">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Enter Email" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="number" className="form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                aria-describedby="emailHelp124" placeholder="Contact No." />
                        </div>
                    </div>
                    <div className="form-group mb-6" >
                        <textarea
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message">
                        </textarea>
                    </div >
                    <div className='form-group mb-6'>
                        <div className="g-recaptcha pt-2 d-flex justify-center" data-sitekey="6LdWOhciAAAAAK8_H2WUcMee5gg4U3K5WPohz402"></div>
                        <p className="capchaError text-red"></p>
                        <p id="errorMsg" className="text-danger text-center"></p>
                    </div>
                    <button type="submit" className=" w-full px-6 py-2.5 bg-[#f05d58] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f05d58] active:shadow-lg transition duration-150 ease-in-out">SUBMIT</button>
                </form>
            </div>
            <div className='flex justify-center'>
                <div class="Gmap lg:h-[550px] lg:w-[1000px]">
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