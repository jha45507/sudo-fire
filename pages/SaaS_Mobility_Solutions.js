import Image from "next/image"
import Eis1 from '../public/images/services/Eis1.png'
import net from '../public/images/services/net-img.png'
import SAASrss from '../public/images/services/SAASrss.png'
import SAASnams from '../public/images/services/SAASnams.png'
import SAASru from '../public/images/services/SAASru.png'
import SAASrp from '../public/images/services/SAASrp.png'
import SAASux from '../public/images/services/SAASux.png'
import SAASacdd from '../public/images/services/SAASacdd.png'
import SAASadi from '../public/images/services/SAASadi.png'
import SAASms from '../public/images/services/SAASms.png'


const SaaS_Mobility_Solutions = () => {
    return (
        <div className='w-[100%]'>
            <div className="flex lg:justify-end justify-center lg:space-x-20 space-x-0  items-center my-10 flex-col lg:flex-row px-8 lg:px-0">
                <Image className="lg:w-1/4 w-2/4 mt-12" src={Eis1} alt="" />
                <div className="lg:w-[32%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Enterprise IT Solutions</h2>
                    <p className="text-justify text-gray-700">To integrate multiple facets of a company&apos;s business through the interchange of information from various business process areas and related databases. Enable your company to retrieve and disseminate mission-critical data throughout the organization, providing management with real-time operating information. Overcoming physical boundaries through solutions of content management, e-commerce & stock management, CRMs, business applications along with legacy project modernisations and expanding them over the web so billions of users have immediate access to it at their disposal.</p>
                </div>
                <Image className='lg:w-1/4 w-2/4' src={net} alt="" />
            </div>

            <section className="flex w-[100%] justify-around items-center">
                <ul className="flex w-[100%] justify-around items-center space-y-3 flex-col lg:flex-row">
                    <li className="">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#RSS">Redefining Software Services</a>
                    </li>
                    <li className="">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#NAMS">New Age Mobility Solutions</a>
                    </li>
                </ul>
            </section>

            <div id="RSS" className='flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <Image src={SAASrss} className="lg:w-1/4 md:w-[20%] w-2/4" />
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Redefining Software Services</h2>
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

            <div id="NAMS" className='flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <Image src={SAASnams} className="lg:w-1/4 md:w-[20%] w-2/4 block lg:hidden" />
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">New Age Mobility Solutions</h2>
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
                <Image src={SAASnams} className="lg:w-1/4 md:w-[20%] w-2/4 lg:block hidden" />
            </div>

            <div className="my-16">
                <h1 className="text-red-400 text-center text-3xl px-2 my-0">Our approach to SaaS & Mobility Solutions</h1>

                <div className='flex justify-around items-center mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={SAASru} className="lg:w-[40%] md:w-[15%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Requirement Understanding</h2>
                        <p className="text-justify"> Understanding the problem statement and developing a concept of the problem and formulating a solution concept. </p>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={SAASrp} className="lg:w-[30%] md:w-[15%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Rapid Prototyping</h2>
                        <p className="text-justify"> Understanding task requirements and building prototypes to quickly visualize the end result through development of MVPs (Minimum Viable Product) </p>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={SAASux} className="lg:w-[40%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">UX/UI Support</h2>
                        <p className="text-justify"> Visualization of the problem solution through creating user interface wireframes and flow diagrams with due care given to optimize user experience. </p>
                    </div>

                </div>

                <div className='flex justify-around items-center mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={SAASacdd} className="lg:w-[40%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Architectural Consultations & Design Development</h2>
                        <p className="text-justify"> Mobile App architecture consultations based on requirements and design initializations. </p>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={SAASadi} className="lg:w-[40%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Application Development & Integration </h2>
                        <p className="text-justify"> The development and integration of all segments of the solutions to culminate the final mobile app solution.</p>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={SAASms} className="lg:w-[40%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Maintenance & Support</h2>
                        <p className="text-justify"> Post deployment periodic maintenance and support provision for smooth sailing of the projects.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SaaS_Mobility_Solutions