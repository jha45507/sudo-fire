import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { FaHome } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { TfiFacebook } from 'react-icons/tfi'
import { TfiLinkedin } from 'react-icons/tfi'
import { RiInstagramFill } from 'react-icons/ri'
import { RiWhatsappFill } from 'react-icons/ri'
import { BiCurrentLocation } from 'react-icons/bi'
import sidelogo from '../public/images/side-logo2.png'

import bg from '../public/images/5.png'

import bgg from '../public/images/side-img.png'

import Link from 'next/link'

const Footer = () => {

	const [bgi, setBgi] = useState(bgg.src)
	let styling = {
        backgroundImage: `url(${bgi})`,
        width: '100%',
        height: '100%',
    }
	
	useEffect(() => {
		if(window.outerWidth < 768){
			setBgi(bg.src)
		}
		else{
			setBgi(bgg.src)
		}
		window.addEventListener("resize", ()=>{
			if(window.outerWidth < 768){
				setBgi(bg.src)
			}
			else{
				setBgi(bgg.src)
			}
			console.log(window.outerWidth)
		});
	}, [bgi])
	
	return (
		<>
			<div className='mt-12' style={styling}>
				<div className='pt-10 w-full space-y-10 flex flex-col lg:flex-row md:justify-evenly lg:items-start items-center'>
					<div className='lg:w-[20%] md:w-[50%] w-[80%] leading-7 text-center flex flex-col lg:items-start items-center mt-4 space-y-5'>
						<Image className='w-[200px]' src={sidelogo} />
						<p className='text-gray-600 text-justify'>
							Founded in 2015, Sudofire is
							recognised as an Innovative
							Solution Provider by D.P.I.I.T for
							developing a framework that
							enables our developers to be more
							efficient with their coding skills.</p>
					</div>
					<div className='lg:w-[20%] md:w-[50%] w-[100%] text-center'>
						<h1 className='text-gray-700 font-bold text-lg' >SERVICES</h1>
						<div className='text-center leading-7 text-gray-600'>
							<Link href="/EnterpriseITSolutions">
								<p className='text-md hover:text-red-400 mt-3'>Enterprise Content Management</p>
							</Link>
							<Link href="/Internet_of_Things">
								<p className='text-md hover:text-red-400'>Internet Of Things(IoT)</p>
							</Link>
							<Link href="/SaaS_Mobility_Solutions">
								<p className='text-md hover:text-red-400'>SaaS & Mobility Solutions</p>
							</Link>
							<Link href="/Devops_Cloud_Services">
								<p className='text-md hover:text-red-400'>Devops & Cloud Services</p>
							</Link>
						</div>
					</div>
					<div className='lg:w-[20%] md:w-[50%] w-[100%] text-center text-gray-600 flex flex-col items-center'>
						<h1 className='text-gray-700 text-lg font-bold md:text-left text-center'>CONTACT INFO</h1>
						<div className='flex flex-col items-start w-[255px] lg:w-'>
							<div className='flex md:justify-start justify-center items-center space-x-2 mt-4 hover:text-red-400'>
								<FaHome className='text-[#f05d58] text-2xl' />
								<p>WEBSITE: <Link href="https://sudofire.com/">https://sudofire.com</Link></p>
							</div>
							<div className='flex md:justify-start justify-center space-x-2 mt-3 hover:text-red-400'>
								<MdEmail className='text-[#f05d58] text-2xl' />
								<p>EMAIL: <Link href="mailto:hr@sudofire.com">sales@sudofire.com</Link></p>
							</div>
							<div className='flex md:justify-start justify-center items-center space-x-2 mt-3 hover:text-red-400'>
								<FaPhoneAlt className='text-[#f05d58] text-2xl text-left' />
								<p className='text-left'>PHONE: <Link href="tel:+91 98114 06941">+91 98114 06941</Link></p>
							</div>
							<div className='flex md:justify-start justify-center items-center space-x-2 mt-3'>
								<BiCurrentLocation className='text-2xl text-[#f05d58]' />
								<p className="">OFFICE LOCATION:</p>
							</div>
							<p className='text-justify mt-1 ml-[30px]'>Sudofire Technologies, 1st Floor, Landmark Cyberpark, Sector 67, Gurugram, Haryana</p>
						</div>
					</div>
				</div>
				<div className='mt-10 pb-20 md:pb-10 flex flex-col items-center space-y-5 font-bold text-lg text-gray-800'>
					<h1>FOLLOW US</h1>
					<div className='flex flex-row space-x-5 items-center'>
						<Link href="https://www.facebook.com/sudofire/">
							<TfiFacebook className='w-[30px] h-[30px] text-red-500 hover:text-indigo-400' />
						</Link>
						<Link href="https://www.linkedin.com/company/sudofire-technologies/about/">
							<TfiLinkedin className='w-[30px] h-[30px] text-red-500 hover:text-indigo-400' />
						</Link>
						<Link href="https://api.whatsapp.com/send?phone=+919811406941&text=Hi, I contacted you through your website.">
							<RiWhatsappFill className='w-[30px] h-[30px] text-red-500 hover:text-indigo-400' />
						</Link>
						<Link href="https://www.instagram.com/sudofire_official/">
							<RiInstagramFill className='w-[30px] h-[30px] text-red-500 hover:text-indigo-400' />
						</Link>
					</div>
				</div>
			</div>
		</>

	)
}

export default Footer;