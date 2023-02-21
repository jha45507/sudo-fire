import Image from "next/image"
import Saas from '../public/images/services/Saas.png'
import net from '../public/images/services/side_SaaS-Mobility-Image.png'
import SAASrss from '../public/images/services/SAASrss.png'
import SAASnams from '../public/images/services/SAASnams.png'
import SAASru from '../public/images/services/SAASru.png'
import SAASrp from '../public/images/services/SAASrp.png'
import SAASux from '../public/images/services/SAASux.png'
import SAASacdd from '../public/images/services/SAASacdd.png'
import SAASadi from '../public/images/services/SAASadi.png'
import SAASms from '../public/images/services/SAASms.png'

import { useEffect, useRef } from "react"
import { RiArrowDropDownLine } from 'react-icons/ri'

const SaaS_Mobility_Solutions = () => {
    
    const linkRef = useRef()
    const rotateRef = useRef()

    const clickArrow = () => {
        if(linkRef.current.classList.contains('link_list') ){
            linkRef.current.classList.toggle('hidden')
            linkRef.current.classList.toggle('flex')
            rotateRef.current.childNodes[0].classList.toggle('rotate-180')
        }
    }
    useEffect(() => {
        const arrow = document.getElementById("arrow")
        window.addEventListener("scroll", () => {
            if( arrow.classList.contains('aaa')){
                // arrow.classList.remove('hidden')
                arrow.classList.toggle('show', window.scrollY > 1100)
                arrow.classList.toggle('hidden', window.scrollY < 1100)
            }
        });
    }, [])
    return (
        <div className='w-[100%]'>
            <div className="xl:h-[75vh] bg-blue-100 flex lg:justify-center justify-center lg:space-x-20 space-x-0 items-center mt-20 lg:mt-0 flex-col lg:flex-row px-8 lg:px-0 opacity-100">
                <Image className="lg:w-1/4 w-2/4 mt-12" src={Saas} alt="" />
                <div className="lg:w-[32%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3 lg:static sticky top-0 bg-blue-100 ">SaaS & Mobility Solutions</h2>
                    <p className="text-justify text-gray-700">Enabling data to be accessed from any device with an internet connection&apos; Plus, vendors take care of hosting and maintaining the servers, databases, and the code that makes up the application. Providing crucial benefits such as reduced time to draw a profit, Lower implementational costs, Scalability & Integration, New Releases & ease of use & ease of performing Proof of Concepts. Mobility solutions provide seamless flow of information on devices linked together. The omnipresent availability of data and the ability to access it anywhere at any time through internet enabled devices like smartphones and portable computers makes the most of what this service has to offer..</p>
                </div>
                <Image className='lg:w-[15%] md:w-[25%] w-[32%] lg:my-0 my-5' src={net} alt="" />
            </div>
            <span onClick={clickArrow} className='lg:hidden hidden aaa' ref={rotateRef} id="arrow">
                <RiArrowDropDownLine className="arrow sticky top-2 text-3xl ml-auto " />
            </span>
            <section className="w-[100%] sticky top-[5vh] lg:top-[12vh] bg-scroll xl:h-[12vh] bg-white lg:flex justify-around items-center lg:shadow-md hidden z-50 lg:z-0 link_list" ref={linkRef}>
                <ul className="w-[100%] flex justify-around items-center space-y-2 lg:space-y-0 flex-col lg:flex-row">
                    <li onClick={clickArrow} className="text-gray-400 hover:text-red-400 text-center lg:text-md text-sm">
                        <a className="" href="#RSS">Redefining Software Services</a>
                    </li>
                    <li onClick={clickArrow} className="text-gray-400 hover:text-red-400 text-center lg:text-md text-sm">
                        <a className="" href="#NAMS">New Age Mobility Solutions</a>
                    </li>
                    <li onClick={clickArrow} className="text-gray-400 hover:text-red-400 text-center lg:text-md text-sm">
                        <a className="" href="#approach_SaaS_Mobility_Solutions">approach SaaS Mobility Solutions</a>
                    </li>
                </ul>
            </section>

            <div id="RSS" className='scroll-mt-44 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 flex justify-center items-center">
                    <Image src={SAASrss} className="lg:w-[50%] w-[75%]" />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center lg:text-3xl text-2xl my-3 lg:static sticky top-0 bg-white">Redefining Software Services</h2>
                    <p className="text-justify">
                        The on-demand prudence that we’re breathing in has brought in a new generation of
                        Software as a Service (SaaS) occasion and everyday benefit.<br /><br />
                        From executive presenting hubs like Slack and Trello to refreshment gateways like
                        Netflix and Hulu, SaaS is not a new concept—though you might not be friendly
                        with the acronym. Just like the slow, subtle shift towards gig wealth for the
                        latest workforce, Software as a Service models are changing the way we reside
                        our day-to-day, without even noticing it.
                    </p>
                </div>
            </div>

            <div id="NAMS" className='scroll-mt-44 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 block lg:hidden">
                    <Image src={SAASnams} />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center lg:text-3xl text-2xl my-3 lg:static sticky top-0 bg-white">New Age Mobility Solutions</h2>
                    <p className="text-justify">
                        Specific mobility solutions to reduce the overall complexities that are actually
                        involved in the management of the company’s data on various mobile devices.
                        Enabling easier and streamlined communication with the remote employees of the
                        company by providing them access to all of the resources and data of the company
                        which is traditionally available on the company’s own devices.<br /><br />
                        Increasing the overall productivity of the company employees by offering them
                        access to real-time data of the company at any time and from anywhere through
                        mobile devices. Shifting the flow of information towards various digital
                        channels and further reducing the dependency on paperwork. With the usage of
                        enterprise mobility solutions, there isn’t any possibility of loss of
                        information.
                    </p>
                </div>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 lg:block hidden">
                    <Image src={SAASnams} className="w-[50%]" />
                </div>
            </div>

            <div className="my-16 w-[100%]" id="approach_SaaS_Mobility_Solutions">
                <h1 className="text-red-400 text-center lg:text-3xl text-2xl px-2 my-0 lg:static sticky top-0 bg-white">Our approach to SaaS & Mobility Solutions</h1>

                <div className='flex justify-around lg:items-start items-center mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={SAASru} className="w-[80px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Requirement Understanding</h2>
                        <p className="text-justify"> Understanding the problem statement and developing a concept of the problem and formulating a solution concept. </p>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={SAASms} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Maintenance & Support</h2>
                        <p className="text-justify"> Post deployment periodic maintenance and support provision for smooth sailing of the projects.</p>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={SAASux} className="w-[120px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">UX/UI Support</h2>
                        <p className="text-justify"> Visualization of the problem solution through creating user interface wireframes and flow diagrams with due care given to optimize user experience. </p>
                    </div>

                </div>

                <div className='flex justify-around lg:items-start items-center mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={SAASacdd} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Architectural Consultations & Design Development</h2>
                        <p className="text-justify"> Mobile App architecture consultations based on requirements and design initializations. </p>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={SAASadi} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Application Development & Integration </h2>
                        <p className="text-justify"> The development and integration of all segments of the solutions to culminate the final mobile app solution.</p>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={SAASrp} className="w-[50px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Rapid Prototyping</h2>
                        <p className="text-justify"> Understanding task requirements and building prototypes to quickly visualize the end result through development of MVPs (Minimum Viable Product) </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SaaS_Mobility_Solutions