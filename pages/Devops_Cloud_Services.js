import Image from "next/image"
import DC from '../public/images/services/D&C.png'
import net from '../public/images/services/side_Cloud-Image.png'
import DCcc from '../public/images/services/DC-cc.png'
import DCca from '../public/images/services/DC-ca.png'
import DCco from '../public/images/services/DC-co.png'
import DCms from '../public/images/services/DC-ms.png'
import DCaes from '../public/images/services/DC-aes.png'
import DCpast from '../public/images/services/DC-past.png'
import DCac from '../public/images/services/DC-ac.png'
import DCpms from '../public/images/services/DC-pms.png'
const Devops_Cloud_Services = () => {
    return (
        <div className='w-[100%]'>
            <div className="xl:h-[75vh] bg-blue-100 flex lg:justify-center justify-center lg:space-x-20 space-x-0 items-center mt-20 lg:mt-0 flex-col lg:flex-row px-8 lg:px-0 opacity-100">
                <Image className="lg:w-1/4 w-2/4 mt-12" src={DC} alt="" />
                <div className="lg:w-[32%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Devops & Cloud Services</h2>
                    <p className="text-justify text-gray-700">Services available via remote cloud computing server rather than an on-site server enabling remote access&apos; These scalable solutions are managed by solution providers/vendors thereby providing users with access to computing services such as analytics or networking via the internet. Offering powerful benefits through greater productivity and enhanced efficiency to reducing cost significantly and simplifying IT management. Cloud computing also enables mobile services that employees are using increasingly when accessing corporate data and applications. Cloud Services provide added advantages like higher speeds, better security & flexible scaling.</p>
                </div>
                <Image className='lg:w-[15%] md:w-[25%] w-[32%] lg:my-0 my-5' src={net} alt="" />
            </div>

            <section className="w-[100%] lg:sticky lg:top-[12vh] bg-scroll xl:h-[12vh] bg-white flex justify-around items-center shadow-md">
                <ul className="w-[100%] flex justify-around items-center space-y-2 flex-col lg:flex-row">
                    <li className="">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#CL">Cloud Consulting</a>
                    </li>
                    <li className="">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#CA">Cloud Architecture</a>
                    </li>
                    <li className="">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#CO">Cost Optimization</a>
                    </li>
                    <li className="">
                        <a className="text-gray-400 hover:text-red-400 text-center text-xl" href="#M&S">Migration & Security</a>
                    </li>
                </ul>
            </section>
            <div id="CL" className='scroll-mt-44 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 flex justify-center items-center">
                    <Image src={DCcc} className="" />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Cloud Consulting</h2>
                    <p className="text-justify">
                        By establishing a picture of how technology can help extend business purpose, we align
                        the
                        role of IT departments to support the business’s visit afterwards. Whether your business
                        is
                        already using the cloud or emergence to look into the idea, we help teams in making the
                        case
                        for cloud acquisition at enterprise scale by uncovering the tangible goals and welfare
                        adoption will bring.<br /><br />
                        Our cloud strategy services enable enterprises to
                        conquer the growing pains and barriers of cloud-first adoption, helping you
                        visualise–and put a plan around–how cloud technology can and will have a
                        truly transformative impression on your business.
                    </p>
                </div>
            </div>

            <div id="CA" className='scroll-mt-44 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <div className="w-[40%] md:w-[15%] lg:hidden block">
                    <Image src={DCca} className="" />
                </div>

                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3"> Cloud Architecture</h2>
                    <p className=" text-justify">
                        The whole cloud architecture is point at providing the
                        users with elevated bandwidth, allowing users to have uninterrupted entrance
                        to data and applications, on-demand agile network with possibility to move
                        swiftly and effectively between servers or even between clouds and most
                        importantly network security.<br /><br />
                        <ul>
                            The various cloud based services mentioned below have their own clear and
                            distinctive cloud architectures:
                            <li>Software as a Service (SaaS) </li>
                            <li>Development as a Service (DaaS)</li>
                            <li>Platform as a Service (PaaS) </li>
                            <li> Infrastructure as a Service (IaaS)</li>
                        </ul>
                    </p>
                </div>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 hidden lg:block">
                    <Image src={DCca} className="" />
                </div>
            </div>

            <div id="CO" className='scroll-mt-44 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 flex justify-center items-center ">
                    <Image src={DCco} className="" />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Cost Optimization</h2>
                    <p className=" text-justify">
                        Cloud cost optimization is the process of bringing down
                        your overall cloud spend by recognizing mismanaged resources, getting rid of
                        waste, putting aside capacity for excessive discounts, and right sizing
                        computing services to scale.<br /><br />
                        <ul>
                            Cloud Cost Optimization Best Practices are:
                            <li> Find Fresh or Neutral Resources</li>
                            <li> Recognize and Merge Idle Resources</li>
                            <li>Right Size Computing Services</li>
                            <li>Endow in AWS Reserved Instances (RIs) or Azure Reserved VM Instances
                                (RIs)</li>
                            <li>Take good point of Spot Instances</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div id="M&S" className='scroll-mt-44 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0'>
                <div className="md:w-[18%] w-[40%] lg:hidden block">
                    <Image src={DCms} className="" />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3">Migration & Security</h2>
                    <p className=" text-justify">
                        Operating digital assets like data, workloads, IT resources, or
                        applications, to cloud infrastructure. Cloud migration often refers to
                        operating tools and data from old, legacy infrastructure or an incorrectly
                        data center to the cloud.<br /><br />
                        The strictness and practice of safeguarding cloud computing environments,
                        applications, data, and information. Cloud security needs securing cloud
                        environments against unauthorized use/access, distributed denial of service
                        (DDOS) attacks, hackers, malware, and other risks. While cloud security
                        applies to safety for cloud environments, the connected term, cloud-based
                        security, refers to the software as a service (SaaS) delivery model of
                        security services, which are hosted in the cloud rather than deployed via
                        on-premise hardware or software.
                    </p>
                </div>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 hidden lg:block">
                    <Image src={DCms} className="" />
                </div>
            </div>

            <div className="my-16 w-[100%]">
                <h1 className="text-red-400 text-center text-3xl px-2 mt-10">Our approach to DevOps & Cloud Solutions</h1>
                <div className="w-[100%] flex justify-around lg:items-start items-center mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0">
                    <div className="flex flex-col justify-center items-center lg:w-[38%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={DCaes} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Assessing Existing State</h2>
                        <p className="text-justify"> Studying and understanding the current state of readiness to lay a firm foundation for the service solution. </p>
                    </div>

                    <div className="flex flex-col justify-center items-center lg:w-[38%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={DCpast} className="w-[38px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Differentiating Between Past & Future </h2>
                        <p className="text-justify"> Identifying the differences between current infrastructure and the infrastructure to deploy for the solution. </p>
                    </div>
                </div>

                <div className=' w-[100%] flex justify-around lg:items-start items-center mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0'>
                    <div className="flex flex-col justify-start items-center lg:w-[38%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={DCac} className="w-[130px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Architectural Consulting</h2>
                        <p className="text-justify word-spacing"> Determining the best cloud model for each specific set of requirements through consultations. </p>
                    </div>

                    <div className="flex flex-col justify-start items-center lg:w-[38%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={DCpms} className="w-[100px]" />
                        </div>
                        <h2 className="text-center text-2xl text-black">Planning Management & Stability</h2>
                        <p className="text-justify"> Making plans of how the infrastructure will be managed in the long run and how robust the solution will be in terms of stability.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devops_Cloud_Services