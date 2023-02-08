import Image from "next/image"
import Eis1 from '../public/images/services/Eis1.png'
import net from '../public/images/services/net-img.png'
import IOThome from '../public/images/services/IOT-home.png'
import IOTindustrial from '../public/images/services/IOT-industrial.png'
import IOTsmart from '../public/images/services/IOT-smart.png'
import IOTrecog from '../public/images/services/IOT-recog.png'
import IOTtranslate from '../public/images/services/IOT-translate.png'
import IOTarchitech from '../public/images/services/IOT-architech.png'
import IOTbuild from '../public/images/services/IOT-build.png'

const Internet_of_Things = () => {
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
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#HA">Home Automation</a>
                    </li>
                    <li className="">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#IA">Industrial Automation</a>
                    </li>
                    <li className="">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#SEI">Smart Environment Implementation</a>
                    </li>
                </ul>
            </section>

            <div id="HA" className="flex justify-around items-center my-32 flex-col lg:flex-row px-8 lg:px-0">
                <Image src={IOThome} className="lg:w-1/4 md:w-[20%] w-2/4" />
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Home Automation</h2>
                    <p className="text-justify"> With the help of suitable IoT devices, home automation has become very easy and has helped IoT companies to flourish well. In home automation, allowing control of various IoT devices just with a single click and that too without the hassle of manually doing so. Controlling all aspects of a home from lighting, bathroom appliances, to temperature control through air conditioning, garden irrigation, security systems and kitchen appliances from just a mobile phone interface is what makes IoT home automation so favourable by doing these small things right. And to top it all, these are only a selected few IoT applications that are commonly used for making your Home, a smart home. The list is long but distinguished.</p>
                </div>
            </div>

            <div id="IA" className='flex justify-around items-center my-32 flex-col lg:flex-row px-8 lg:px-0'>
                <Image src={IOTindustrial} className="lg:w-1/4 md:w-[20%] w-2/4 lg:hidden block" />
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Industrial Automation</h2>
                    <p className="text-justify"> Interconnected sensors, instruments, and other devices networked together in an industrial setting. This connectivity setup allows for remote access and monitoring, but more importantly, it allows for data acquisition and collection, exchange and analysis of different data sources. This has enormous potential for improving productivity and efficiency. Industrial IoT solutions are characterised by their low cost and fast implementation.<br /><br />
                        <ul>
                            Some of the key features of IIoT include:
                            <li>Internet enabled devices like PLC, HMI, IP cameras and sensors.</li>
                            <li>Connectivity of devices through networks.</li>
                            <li>Collection, storage and processing of data.</li>
                            <li>A centralised and secure cloud platform for hosting the data and
                                enabling
                                remote services.</li>
                            <li>Data collection and automated analysis to send alerts and reports.</li>
                        </ul>
                    </p>
                </div>
                <Image src={IOTindustrial} className="lg:w-1/4 md:w-[20%] w-2/4 hidden lg:block" />
            </div>

            <div id="SEI" className='flex justify-around items-center my-32 flex-col lg:flex-row px-8 lg:px-0'>
                <Image src={IOTsmart} className="lg:w-1/4 md:w-[20%] w-2/4" />
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Smart Environment Implementation</h2>
                    <p className="text-justify">
                        The main features and services in key smart environments
                        include but are not
                        limited to smart home, smart health, smart cities and smart factories. To
                        diversify, smart environments can gather water and energy usage data from
                        sensors, send that data to smart devices, and allow users to reduce their
                        water
                        and energy use accordingly.<br /><br />
                        The same principles are applied to healthcare & medical industries and fitness
                        industries and activities using IoT devices which monitor bodily parameters to
                        optimize the process at hand.
                    </p>
                </div>
            </div>

            <div className="my-32">
                <h1 className="text-red-400 text-center text-4xl my-10">Our approach to IoT Solutions</h1>

                <div className='flex justify-around items-center my-20 flex-col lg:flex-row space-y-20 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={IOTrecog} className="lg:w-[40%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Recognize IoT Possibilities</h2>
                        <p className="text-center">Understanding the broader aspect of where IoT can be used as a solution.</p>
                    </div>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={IOTtranslate} className="lg:w-[40%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Translate IoT To HarnessRequirements</h2>
                        <p className="text-center"> Transforming the requirement structure to accommodate IoT to eradicate the problem by using IoT as the solution.</p>
                    </div>

                </div>

                <div className='flex justify-around items-center my-20 flex-col lg:flex-row space-y-20 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={IOTarchitech} className="lg:w-[40%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Architecture Formulation</h2>
                        <p className="text-center"> Setting up the base of the solution after taking all technical aspects into consideration by generating frameworks and architectural diagrams.</p>
                    </div>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={IOTbuild} className="lg:w-[40%] w-[25%]" />
                        <h2 className="text-center text-2xl text-black">Build & Deploy IoT Service</h2>
                        <p className="text-center"> Giving structure to the problem solution and enabling deployment through suitable technologies. </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Internet_of_Things