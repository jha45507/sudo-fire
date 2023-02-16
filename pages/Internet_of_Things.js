import Image from "next/image"
import Iot from '../public/images/services/Iot.png'
import net from '../public/images/services/side_IOT-image.png'
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
            <div className="flex lg:justify-center justify-center lg:space-x-20 space-x-0  items-center my-10 flex-col lg:flex-row px-8 lg:px-0 mt-20 lg:mt-0 mb-10 bg-blue-100">
                <Image className="lg:w-1/4 w-2/4 mt-12" src={Iot} alt="" />
                <div className="lg:w-[32%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Internet of Things</h2>
                    <p className="text-justify text-gray-700">
                    Enabling enterprise strategies for new beginnings&apos; Building smart cities & smarter homes with WiFi devices for industrial & manufactural insights. IoT-enabled smart city implementation spans multiple fields including contributing to a healthier environment, improving traffic, enhancing public safety and optimizing street lighting. Similarly, IoT home automation is the ability to control domestic appliances by electronically controlled, internet-connected systems. It may include setting complex heating, lighting systems in advance, setting alarms and/or home security controls, all connected by a central hub and remote-controlled by a mobile app.</p>
                </div>
                <Image className='lg:w-[15%] md:w-[25%] w-[32%] lg:my-0 my-5' src={net} alt="" />
            </div>

            <section className="flex w-[100%] justify-around items-center">
                <ul className="flex w-[100%] justify-around items-center space-y-2 flex-col lg:flex-row">
                    <li className="text-gray-400 hover:text-red-400 text-center text-xl">
                        <a className="" href="#HA">Home Automation</a>
                    </li>
                    <li className="text-gray-400 hover:text-red-400 text-center text-xl">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#IA">Industrial Automation</a>
                    </li>
                    <li className="text-gray-400 hover:text-red-400 text-center text-xl">
                        <a className="" href="#SEI">Smart Environment Implementation</a>
                    </li>
                </ul>
            </section>

            <div id="HA" className="scroll-mt-28 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0">
                <div className="lg:w-1/4 md:w-[20%] w-2/4 flex justify-center items-center">
                    <Image src={IOThome} className="lg:w-[50%] w-[75%]" />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Home Automation</h2>
                    <p className="text-justify"> With the help of suitable IoT devices, home automation has become very easy and has helped IoT companies to flourish well. In home automation, allowing control of various IoT devices just with a single click and that too without the hassle of manually doing so. Controlling all aspects of a home from lighting, bathroom appliances, to temperature control through air conditioning, garden irrigation, security systems and kitchen appliances from just a mobile phone interface is what makes IoT home automation so favourable by doing these small things right. And to top it all, these are only a selected few IoT applications that are commonly used for making your Home, a smart home. The list is long but distinguished.</p>
                </div>
            </div>

            <div id="IA" className='scroll-mt-28 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 lg:hidden block">
                    <Image src={IOTindustrial} />
                </div>
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
                <div className="lg:w-1/4 md:w-[20%] w-2/4 hidden lg:block">
                    <Image src={IOTindustrial} />
                </div>
            </div>

            <div id="SEI" className='scroll-mt-28 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 flex justify-center items-center ">
                    <Image src={IOTsmart} className="lg:w-[50%] w-[75%]" />
                </div>
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

            <div className="my-16 w-[100%]">
                <h1 className="text-red-400 text-center text-3xl px-2 my-0">Our approach to IoT Solutions</h1>

                <div className=' flex justify-around lg:items-start items-center mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[38%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={IOTrecog} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Recognize IoT Possibilities</h2>
                        <p className="text-justify">Understanding the broader aspect of where IoT can be used as a solution.</p>
                    </div>

                    <div className="flex flex-col justify-start items-center lg:w-[38%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={IOTtranslate} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Translate IoT To HarnessRequirements</h2>
                        <p className="text-justify"> Transforming the requirement structure to accommodate IoT to eradicate the problem by using IoT as the solution.</p>
                    </div>

                </div>

                <div className='flex justify-around lg:items-start items-center mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[38%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={IOTarchitech} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Architecture Formulation</h2>
                        <p className="text-justify"> Setting up the base of the solution after taking all technical aspects into consideration by generating frameworks and architectural diagrams.</p>
                    </div>

                    <div className="flex flex-col justify-start items-center lg:w-[38%] md:w-[50%] w-[75%] space-y-3">
                        <div>
                            <Image src={IOTbuild} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Build & Deploy IoT Service</h2>
                        <p className="text-justify"> Giving structure to the problem solution and enabling deployment through suitable technologies. </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Internet_of_Things