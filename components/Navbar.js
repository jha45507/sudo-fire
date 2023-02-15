import React, { useRef } from 'react'
import Link from 'next/Link'
import Image from 'next/image'
import logo from '../public/images/side-logo2.png'

import { RiArrowDropDownLine } from 'react-icons/ri'
const Navbar = () => {
    const headeRef = useRef();
    const hamRef = useRef();
    const lg_navbar = useRef()
    const accordion_nav_ref = useRef();
    const first_accordion_show = useRef();
    const second_accordion_show = useRef();
    const third_accordion_show = useRef();
    const fourth_accordion_show = useRef();

    const hamclick = () => {
        if (hamRef.current.classList.contains('ham')) {
            hamRef.current.classList.toggle('ham-active')
        }

        if (headeRef.current.classList.contains('h-20')) {
            headeRef.current.classList.replace('h-20', 'h-auto')
        }

        else if (headeRef.current.classList.contains('h-auto')) {
            headeRef.current.classList.replace('h-auto', 'h-20')
        }
    }
    const closeNavbar = () => {
        headeRef.current.classList.replace('h-auto', 'h-20')
        hamRef.current.classList.remove('ham-active')
        if (first_accordion_show.current.classList.contains('show') || second_accordion_show.current.classList.contains('show') || third_accordion_show.current.classList.contains('show') || fourth_accordion_show.current.classList.contains('show')) {
            first_accordion_show.current.classList.replace('show', 'hidden')
            second_accordion_show.current.classList.replace('show', 'hidden')
            third_accordion_show.current.classList.replace('show', 'hidden')
            fourth_accordion_show.current.classList.replace('show', 'hidden')
        }
        if (lg_navbar.current.classList.contains('lg:flex')) {
            lg_navbar.current.classList.remove('lg:flex')
            lg_navbar.current.classList.add('lg:hidden')
        }

        if (accordion_nav_ref.current.classList.contains('show')) {
            accordion_nav_ref.current.classList.remove('show')
            accordion_nav_ref.current.classList.add('hidden')
        }
    }

    const accordion = () => {
        if (lg_navbar.current.classList.contains('lg:hidden')) {
            lg_navbar.current.classList.remove('lg:hidden')
            lg_navbar.current.classList.add('lg:flex')
        }
        else {
            lg_navbar.current.classList.add('lg:hidden')
            lg_navbar.current.classList.remove('lg:flex')
        }
        if (accordion_nav_ref.current.classList.contains('hidden')) {
            accordion_nav_ref.current.classList.remove('hidden')
            accordion_nav_ref.current.classList.add('show')
        }
        else {
            accordion_nav_ref.current.classList.add('hidden')
            accordion_nav_ref.current.classList.remove('show')
        }
    }

    const first_accordion = () => {
        if (first_accordion_show.current.classList.contains('collapse')) {
            first_accordion_show.current.classList.remove('collapse')
            first_accordion_show.current.classList.add('show')
            first_accordion_show.current.classList.remove('hidden')
        }

        else {
            first_accordion_show.current.classList.add('collapse')
            first_accordion_show.current.classList.add('hidden')
            first_accordion_show.current.classList.remove('show')
        }
    }
    const second_accordion = () => {
        if (second_accordion_show.current.classList.contains('collapse')) {
            second_accordion_show.current.classList.remove('collapse')
            second_accordion_show.current.classList.add('show')
            second_accordion_show.current.classList.remove('hidden')
        }

        else {
            second_accordion_show.current.classList.add('collapse')
            second_accordion_show.current.classList.remove('show')
            second_accordion_show.current.classList.add('hidden')
        }
    }
    const third_accordion = () => {
        if (third_accordion_show.current.classList.contains('collapse')) {
            third_accordion_show.current.classList.remove('collapse')
            third_accordion_show.current.classList.add('show')
            third_accordion_show.current.classList.remove('hidden')
        }

        else {
            third_accordion_show.current.classList.add('collapse')
            third_accordion_show.current.classList.remove('show')
            third_accordion_show.current.classList.add('hidden')
        }
    }
    const fourth_accordion = () => {
        if (fourth_accordion_show.current.classList.contains('collapse')) {
            fourth_accordion_show.current.classList.remove('collapse')
            fourth_accordion_show.current.classList.add('show')
            fourth_accordion_show.current.classList.remove('hidden')
        }

        else {
            fourth_accordion_show.current.classList.add('collapse')
            fourth_accordion_show.current.classList.remove('show')
            fourth_accordion_show.current.classList.add('hidden')
        }
    }

    return (
        <div ref={headeRef} className='lg:flex w-full lg:sticky absolute lg:top-0 top-0 z-20 justify-between lg:px-[100px] items-center shadow-md font-bold h-20 overflow-hidden lg:overflow-visible lg:backdrop-blur-sm backdrop-blur-md bg-transparent '>
            <div ref={hamRef} className='lg:hidden ham' onClick={hamclick} ></div>

            <div className='w-[200px] mt-2'>
                <Link href="/" onClick={closeNavbar} ><Image src={logo} /> </Link>
            </div>

            <div className='text-sm text-center my-10 space-y-10 lg:space-y-0 lg:space-x-10 flex items-center flex-col lg:flex-row text-gray-600'>
                <Link onClick={closeNavbar} className="hover:text-red-400" href="/">HOME</Link>
                <Link className="flex hover:text-indigo-400 relative" onClick={accordion} href="#">SERVICES <RiArrowDropDownLine className='text-xl top-0 right-[-20px] absolute' /> </Link>

                <div ref={lg_navbar} className='lg:hidden hidden absolute top-20 right-0 overflow-visible bg-white border space-x-10 px-7 py-2 shadow-xl'>
                    <div className='text-left list-none'>
                        <h1 className='text-lg py-3 hover:text-red-400' onClick={accordion}><Link href="/EnterpriseITSolutions">Enterprise IT Solutions</Link></h1>
                        <Link onClick={accordion} href="/EnterpriseITSolutions#ECM"><p className='py-1 hover:text-red-400'>Enterprise Content Management </p></Link>
                        <Link onClick={accordion} href="/EnterpriseITSolutions#ESM"><p className='py-1 hover:text-red-400'>Ecommerce & Stock Management </p></Link>
                        <Link onClick={accordion} href="/EnterpriseITSolutions#CBA"><p className='py-1 hover:text-red-400'>CRMs & Business Applications </p></Link>
                        <Link onClick={accordion} href="/EnterpriseITSolutions#LM"><p className='py-1 hover:text-red-400'>Legacy Modernisation </p></Link>
                    </div>
                    <div className='text-left list-none'>
                        <h1 className='text-lg py-3 hover:text-red-400' onClick={accordion}><Link href="/Internet_of_Things">Internet of Things (IoT)</Link></h1>
                        <Link onClick={accordion} className="" href="/Internet_of_Things#HA"><p className="py-1 hover:text-red-400">Home Automation</p></Link>
                        <Link onClick={accordion} className="" href="/Internet_of_Things#IA"><p className="py-1 hover:text-red-400">Industrial Automation</p></Link>
                        <Link onClick={accordion} className="" href="/Internet_of_Things#SEI"><p className="py-1 hover:text-red-400">Smart Environment Implementation</p></Link>
                    </div>
                    <div className='text-left list-none'>
                        <h1 className='text-lg py-3 hover:text-red-400' onClick={accordion}><Link href="/SaaS_Mobility_Solutions">SaaS & Mobility Solutions</Link></h1>
                        <Link onClick={accordion} href="/SaaS_Mobility_Solutions#RSS"><p className='py-1 hover:text-red-400'>Redefining Software Services</p></Link>
                        <Link onClick={accordion} href="/SaaS_Mobility_Solutions#NAMS"><p className='py-1 hover:text-red-400'>New Age Mobility Solutions</p></Link>
                    </div>
                    <div className='text-left list-none'>
                        <h1 className='text-lg py-3 hover:text-red-400' onClick={accordion}><Link href="/Devops_Cloud_Services">Devops & Cloud Services</Link></h1>
                        <Link onClick={accordion} href="/Devops_Cloud_Services#CL"><p className='py-1 hover:text-red-400'>Cloud Consulting</p></Link>
                        <Link onClick={accordion} href="/Devops_Cloud_Services#CA"><p className='py-1 hover:text-red-400'>Cloud Architecture</p></Link>
                        <Link onClick={accordion} href="/Devops_Cloud_Services#CO"><p className='py-1 hover:text-red-400'>Cost Optimization</p></Link>
                        <Link onClick={accordion} href="/Devops_Cloud_Services#M&S"><p className='py-1 hover:text-red-400'>Migration & Security</p></Link>
                    </div>
                </div>

                <div ref={accordion_nav_ref} className="accordion accordion-flush bg-transparent lg:hidden hidden" id="accordionFlushExample">
                    <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
                        <h2 className="accordion-header mb-0" id="flush-headingOne">
                            <button onClick={first_accordion} className="accordion-button relative flex items-center justify-center w-full text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                Enterprise IT Solutions
                            </button>
                        </h2>
                        <div ref={first_accordion_show} id="flush-collapseOne" className="accordion-collapse border-0 hidden collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <ul className="accordion-body py-4">
                                <li onClick={closeNavbar} ><Link href="/EnterpriseITSolutions#ECM">Enterprise Content Management</Link></li>
                                <li><Link href="/EnterpriseITSolutions#ESM"><p className='hover:text-red-400' onClick={closeNavbar}>Ecommerce & Stock Management </p></Link></li>
                                <li><Link href="/EnterpriseITSolutions#CBA"><p className='hover:text-red-400' onClick={closeNavbar}>CRMs & Business Applications </p></Link></li>
                                <li><Link href="/EnterpriseITSolutions#LM"><p className='hover:text-red-400' onClick={closeNavbar}>Legacy Modernisation </p></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none my-3">
                        <h2 className="accordion-header mb-0" id="flush-headingTwo">
                            <button onClick={second_accordion} className="accordion-button collapsed relative flex items-center justify-center w-full text-base text-gray-800 text-center border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                Internet of Things (IoT)
                            </button>
                        </h2>
                        <div ref={second_accordion_show} id="flush-collapseTwo" className="accordion-collapse border-0 hidden collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <ul className="accordion-body py-4">
                                <li><Link href="/Internet_of_Things#HA"><p className='hover:text-red-400' onClick={closeNavbar}>Home Automation</p></Link></li>
                                <li><Link href="/Internet_of_Things#IA"><p className='hover:text-red-400' onClick={closeNavbar}>Industrial Automation</p></Link></li>
                                <li><Link href="/Internet_of_Things#SEI"><p className='hover:text-red-400' onClick={closeNavbar}>Smart Environment Implementation</p></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none mb-3">
                        <h2 className="accordion-header mb-0" id="flush-headingThree">
                            <button onClick={third_accordion} className="accordion-button collapsed relative flex items-center justify-center w-full text-base text-gray-800 text-center border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                SaaS & Mobility Solutions
                            </button>
                        </h2>
                        <div ref={third_accordion_show} id="flush-collapseThree" className="accordion-collapse hidden collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <ul className="accordion-body py-4">
                                <li><Link href="/SaaS_Mobility_Solutions#RSS"><p className='hover:text-red-400' onClick={closeNavbar}>Redefining Software Services</p></Link></li>
                                <li><Link href="/SaaS_Mobility_Solutions#NAMS"><p className='hover:text-red-400' onClick={closeNavbar}>New Age Mobility Solutions</p></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none">
                        <h2 className="accordion-header mb-0" id="flush-headingFour">
                            <button onClick={fourth_accordion} className="accordion-button collapsed relative flex items-center justify-center w-full text-base text-gray-800 text-center border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseFour">
                                Devops & Cloud Services
                            </button>
                        </h2>
                        <div ref={fourth_accordion_show} id="flush-collapseThree" className="accordion-collapse hidden collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <ul className="accordion-body py-4">
                                <li><Link href="/Devops_Cloud_Services#CL"><p className='hover:text-red-400' onClick={closeNavbar}>Cloud Consulting</p></Link></li>
                                <li><Link href="/Devops_Cloud_Services#CA"><p className='hover:text-red-400' onClick={closeNavbar}>Cloud Architecture</p></Link></li>
                                <li><Link href="/Devops_Cloud_Services#CO"><p className='hover:text-red-400' onClick={closeNavbar}>Cost Optimization</p></Link></li>
                                <li><Link href="/Devops_Cloud_Services#M&S"><p className='hover:text-red-400' onClick={closeNavbar}>Migration & Security</p></Link></li>
                            </ul >
                        </div >
                    </div >
                </div >
                <Link className='hover:text-red-400' onClick={closeNavbar} href="/portFolio">PORTFOLIO</Link>
                <Link className='hover:text-red-400' onClick={closeNavbar} href="/careers">CAREERS</Link>
                <Link className='hover:text-red-400' onClick={closeNavbar} href="/clients">CLIENTS</Link>
                <Link className='hover:text-red-400' onClick={closeNavbar} href="/contactUs">CONTACT US</Link>
            </div >
        </div >
    )
}

export default Navbar