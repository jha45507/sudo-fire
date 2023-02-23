import Image from "next/image"
import Eis1 from '../public/images/services/Eis1.png'
import net from '../public/images/services/side_IT-solutions-Image.png'
import EISecm from '../public/images/services/EISecm.png'
import EISesm from '../public/images/services/EISesm.png'
import EISlm from '../public/images/services/EISlm.png'
import EIScd from '../public/images/services/EIScd.png'
import EISdr from '../public/images/services/EISdr.png'
import EISux from '../public/images/services/EISux.png'
import EISac from '../public/images/services/EISac.png'
import EISte from '../public/images/services/EISte.png'
import EISms from '../public/images/services/EISms.png'
import Group315 from '../public/images/services/Group 315.png'

import { useEffect, useState } from "react"
import { useRef } from "react"
import { RiArrowDropDownLine } from 'react-icons/ri'

const EnterpriseITSolutions = () => {
    const linkRef = useRef()
    const rotateRef = useRef()

    const clickArrow = () => {
        if (linkRef.current.classList.contains('link_list')) {
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

            if(window.scrollY > 500 && window.scrollY < 900){
                document.querySelector("#ecm_smooth_links").style.color = '#F87272';
            }
            else{
                document.querySelector("#ecm_smooth_links").style.color = '#BDBDBD';
            }
            if(window.scrollY > 900 && window.scrollY < 1300){
                document.querySelector("#esm_smooth_links").style.color = '#F87272';
            }
            else{
                document.querySelector("#esm_smooth_links").style.color = '#BDBDBD';
            }
            if(window.scrollY > 1300 && window.scrollY < 1700){
                document.querySelector("#eba_smooth_links").style.color = '#F87272';
            }
            else{
                document.querySelector("#eba_smooth_links").style.color = '#BDBDBD';
            }
            if(window.scrollY > 1700 && window.scrollY < 2000){
                document.querySelector("#lm_smooth_links").style.color = '#F87272';
            }
            else{
                document.querySelector("#lm_smooth_links").style.color = '#BDBDBD';
            }
            if(window.scrollY > 2000 && window.scrollY < 2600){
                document.querySelector("#oa_smooth_links").style.color = '#F87272';
            }
            else{
                document.querySelector("#oa_smooth_links").style.color = '#BDBDBD';
            }
        });
    }, [])

    return (
        <div className='w-[100%]'>
            <div className="xl:h-[75vh] bg-blue-100 flex lg:justify-center justify-center lg:space-x-20 space-x-0 items-center mt-20 lg:mt-0 flex-col lg:flex-row px-8 lg:px-0 opacity-100">
                <Image className="lg:w-1/4 w-2/4 mt-12" src={Eis1} alt="" />
                <div className="lg:w-[32%] w-full">
                    <h2 className="text-red-400 text-center text-3xl my-3 lg:static sticky top-0 bg-blue-100 ">Enterprise IT Solutions</h2>
                    <p className="text-justify text-gray-700">To integrate multiple facets of a company&apos;s business through the interchange of information from various business process areas and related databases. Enable your company to retrieve and disseminate mission-critical data throughout the organization, providing management with real-time operating information. Overcoming physical boundaries through solutions of content management, e-commerce & stock management, CRMs, business applications along with legacy project modernisations and expanding them over the web so billions of users have immediate access to it at their disposal.</p>
                </div>
                <Image className='lg:w-[15%] md:w-[25%] w-[32%] lg:my-0 my-5' src={net} alt="" />
            </div>
            <span onClick={clickArrow} className='lg:hidden hidden aaa' ref={rotateRef} id="arrow">
                <RiArrowDropDownLine className="arrow sticky top-2 text-3xl ml-auto " />
            </span>
            <section className="w-[100%] sticky top-[5vh] lg:top-[12vh] bg-scroll xl:h-[12vh] bg-white lg:flex justify-around items-center lg:shadow-md hidden link_list lg:z-0 z-50" ref={linkRef}>
                <ul className="w-[100%] flex justify-around items-center space-y-2 lg:space-y-0 flex-col lg:flex-row">
                    <li onClick={clickArrow} className="text-gray-400 hover:text-red-400 text-center lg:text-md text-sm">
                        <a className="" href="#ECM" id="ecm_smooth_links">Enterprise Content Management</a>
                    </li>
                    <li onClick={clickArrow} className="text-gray-400 hover:text-red-400 text-center lg:text-md text-sm">
                        <a className="" href="#ESM" id="esm_smooth_links">Ecommerce & Stock Management</a>
                    </li>
                    <li onClick={clickArrow} className="text-gray-400 hover:text-red-400 text-center lg:text-md text-sm">
                        <a className="" href="#CBA" id="eba_smooth_links">CRMs & Business Applications</a>
                    </li>
                    <li onClick={clickArrow} className="text-gray-400 hover:text-red-400 text-center lg:text-md text-sm">
                        <a className="" href="#LM" id="lm_smooth_links">Legacy Modernization</a>
                    </li>
                    <li onClick={clickArrow} className="text-gray-400 hover:text-red-400 text-center lg:text-md text-sm">
                        <a className="" href="#approach_Enterprise_IT_Solutions" id="oa_smooth_links">Our Approach</a>
                    </li>
                </ul>
            </section>
            {/* <hr className='w-[90%] border border-gray-600 ' /> */}
            <div className=" scroll-mt-44 flex justify-around items-center mt-10 flex-col lg:flex-row px-8 lg:px-0" id="ECM">
                <div className="lg:w-1/4 md:w-[20%] w-2/4 flex justify-center items-center">
                    <Image src={EISecm} className="" />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center lg:text-3xl text-2xl my-3 sticky top-0 bg-white lg:static">Enterprise Content Management</h2>
                    <p className="text-justify">
                        A system solution designed to manage an organization’s documents and contents.
                        Unstructured information including Word documents, Excel spreadsheets, PDFs and
                        scanned images are stored and making them accessible to the right people at the
                        right time is the key element of ECM.<br /><br />
                        From commercial supply chains to contract management and human resource processes
                        to government administration documents, the motive behind implementing an ECM
                        solution is to do business better. By eliminating dependence on paper documents
                        and structuring information according to business need, organizations are
                        empowered to work more efficiently. Understanding customer demands over the
                        years, there’s no denying the consistent goals for implementing ECM.
                    </p>
                </div>
            </div>

            <div className="scroll-mt-44 flex justify-around items-center my-16 flex-col lg:flex-row px-8 lg:px-0" id="ESM">
                <div className="lg:w-1/4 md:w-[20%] w-2/4 block lg:hidden">
                    <Image src={EISesm} className="" />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center lg:text-3xl text-2xl my-3  sticky top-0 bg-white lg:static">Ecommerce & Stock Management</h2>
                    <p className="text-justify">
                        The act of measuring the amount, location, pricing, and mix of products available
                        from and of one’s business. Through ecommerce inventory management, businesses
                        know what products are overstocked, in stock, understocked, and out of stock.
                        Fixing mistakes associated with inventory management can cost businesses a lot,
                        both in terms of lost revenue from sales and in the form of dead stock
                        accumulation.<br /><br />
                        More efficient business practices are having an eye on all inventory, delighting
                        every customer, eliminating dead stock and wasted inventory and creating
                        enhanced order capabilities for returning customers are some of the ways
                        ecommerce & stock management turns the sales and purchase game around.
                    </p>
                </div>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 hidden lg:block">
                    <Image src={EISesm} className="" />
                </div>
            </div>
            <div className="scroll-mt-44 flex justify-around items-center my-16 flex-col lg:flex-row px-8 lg:px-0" id="CBA">
                <div className="lg:w-1/4 md:w-[20%] w-2/4 flex justify-center items-center">
                    <Image src={Group315} className="w-[200px] h-[120px] lg:h-[150px]" />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center lg:text-3xl text-2xl my-3  sticky top-0 bg-white lg:static">CRMs & Business Applications</h2>
                    <p className="text-justify">
                        A combination of business strategies, software and processes that help build long
                        lasting relationships between companies and their customers, referring to all
                        strategies, techniques, tools, and technologies used by enterprises for
                        developing, retaining and acquiring customers.<br /><br />
                        This software ensures that every step of the interaction with consumers goes
                        smoothly and efficiently in order to increase the overall profits. The software
                        gathers customer data from multiple channels. Hence, CRM stores detailed
                        information on overall purchase history, personal info, and even purchasing
                        behavior patterns.
                    </p>
                </div>
            </div>
            <div className="scroll-mt-44 flex justify-around items-center mt-16 flex-col lg:flex-row px-8 lg:px-0" id="LM">
                <div className="lg:w-1/4 md:w-[20%] w-2/4 lg:hidden block">
                    <Image src={EISlm} />
                </div>
                <div className="lg:w-[40%] w-full">
                    <h2 className="text-red-400 text-center lg:text-3xl text-2xl my-3 sticky top-0 bg-white lg:static">Legacy Modernization</h2>
                    <p className="text-justify">
                        Updating all or some of your IT stack to better support your business goals and
                        processes. Fast applications, systems that support connectivity, and platforms
                        that bring everything together are required to enable and support cutting edge
                        business applications which carry abilities to change the game. Most older IT
                        stacks fail to meet those modern needs.<br /><br />
                        Enter legacy modernization, Updating and replacing outdated or inefficient
                        systems, processes and applications – in part or in full to shape ideas to
                        create a better and efficient world.
                    </p>
                </div>
                <div className="lg:w-1/4 md:w-[20%] w-2/4 hidden lg:block">
                    <Image src={EISlm} className="w-[205px] h-[171px]" />
                </div>
            </div>

            <div className="my-16 w-[100%]" id="approach_Enterprise_IT_Solutions">
                <div className="lg:static sticky top-0 bg-white">
                    <h1 className="text-red-400 text-center lg:text-3xl text-2xl px-2 my-0 ">Our approach to Enterprise IT Solutions</h1>
                </div>
                <div className="w-[100%] flex justify-around lg:items-start items-center my-10 flex-col lg:flex-row space-y-10 lg:space-y-0">
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={EIScd} className="w-[115px]" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl text-black">Concept Development</h2>
                        </div>
                        <div className="">
                            <p className="text-justify">
                                Understanding the problem statement and developing a concept of the problem
                                and
                                formulating a solution concept.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={EISdr} className="w-[100px]" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl text-black">Documenting Requirements</h2>
                        </div>
                        <div className="">
                            <p className="text-justify">
                                Understanding task requirements and documenting them all so every
                                little nitty-gritties are taken care of.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={EISux} className="w-[100px]" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl text-black">UX/UI Support</h2>
                        </div>
                        <div className="">
                            <p className="text-justify">
                                Visualization of the problem solution through creating user interface
                                wireframes, prototypes with due care given to user experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around lg:items-start items-center flex-col lg:flex-row space-y-10 lg:space-y-0">
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={EISac} className="w-[100px]" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl text-black">Architectural Consulting</h2>
                        </div>
                        <div className="">
                            <p className="text-justify">
                                Setting the foundation for the solution of the problem through architectural
                                planning along with consultations for the same to discuss and decide the
                                best
                                approach.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={EISte} className="w-[50px]" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl text-black">Technology Enablement</h2>
                        </div>
                        <div className="">
                            <p className="text-justify word-spacing">
                                Giving structure to the problem solution and enabling deployment
                                through suitable technologies.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-[25%] md:w-[50%] w-[75%] space-y-3">
                        <div className="">
                            <Image src={EISms} className="w-[100px]" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl text-black"> Maintenance & Support</h2>
                        </div>
                        <div className="">
                            <p className="text-justify"> Post deployment periodic maintenance and support provision for smooth sailing of the projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseITSolutions