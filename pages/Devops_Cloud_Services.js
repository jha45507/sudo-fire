import Image from "next/image"
import Eis1 from '../public/images/services/Eis1.png'
import net from '../public/images/services/net-img.png'
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
            <div id="CL" className='flex justify-around items-center my-32 flex-col lg:flex-row px-8 lg:px-0'>
                <Image src={DCcc} className="w-[40%] md:w-[15%]" />
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

            <div id="CA" className='flex justify-around items-center my-32 flex-col lg:flex-row px-8 lg:px-0'>
                <Image src={DCca} className="w-[40%] md:w-[15%] lg:hidden block" />

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
                <Image src={DCca} className="w-[15%] hidden lg:block" />
            </div>

            <div id="CO" className='flex justify-around items-center my-32 flex-col lg:flex-row px-8 lg:px-0'>
                <Image src={DCco} className="w-[40%] md:w-[15%]" />
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

            <div id="M&S" className='flex justify-around items-center my-32 flex-col lg:flex-row px-8 lg:px-0'>
                <Image src={DCms} className="md:w-[18%] w-[40%] lg:hidden block" />

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
                <Image src={DCms} className="w-[18%] hidden lg:block" />
            </div>

            <div className="my-32">
                <h1 className="text-red-400 text-center text-4xl my-10">Our approach to DevOps & Cloud Solutions</h1>

                <div className="flex justify-around items-center my-20 flex-col lg:flex-row space-y-20 lg:space-y-0">

                    <div className="flex flex-col justify-center items-center lg:w-[32%] w-[75%] space-y-3">
                        <Image src={DCaes} className="lg:w-[40%] md:w-[25%] w-[35%]" />
                        <h2 className="text-center text-2xl text-black">Assessing Existing State</h2>
                        <p className="text-center"> Studying and understanding the current state of readiness to lay a firm foundation for the service solution. </p>
                    </div>

                    <div className="flex flex-col justify-center items-center lg:w-[32%] w-[75%] space-y-3">
                        <Image src={DCpast} className="lg:w-[20%] md:w-[15%] w-[20%]" />
                        <h2 className="text-center text-2xl text-black">Differentiating Between Past & Future </h2>
                        <p className="text-center"> Identifying the differences between current infrastructure and the infrastructure to deploy for the solution. </p>
                    </div>
                </div>

                <div className='flex justify-around items-center my-20 flex-col lg:flex-row space-y-20 lg:space-y-0'>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={DCac} className="lg:w-[40%] md:w-[30%] w-[40%]" />
                        <h2 className="text-center text-2xl text-black">Architectural Consulting</h2>
                        <p className="text-center"> Determining the best cloud model for each specific set of requirements through consultations. </p>
                    </div>

                    <div className="flex flex-col justify-start items-center lg:w-[25%] w-[75%] space-y-3">
                        <Image src={DCpms} className="lg:w-[40%] md:w-[30%] w-[40%]" />
                        <h2 className="text-center text-2xl text-black">Planning Management & Stability</h2>
                        <p className="text-center"> Making plans of how the infrastructure will be managed in the long run and how robust the solution will be in terms of stability.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devops_Cloud_Services