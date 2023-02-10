import React from 'react'
import Image from 'next/image'

import { FaHome } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { FaWhatsappSquare } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'
import sidelogo from '../public/images/side-logo2.png'

import Link from 'next/Link'

const Footer = () => {
	return (
		<>
			<div className='mt-12 side-img'>
				<div className='w-full space-y-10 flex flex-col lg:flex-row md:justify-evenly lg:items-start items-center'>
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
						<div className='text-center leading-10 text-gray-600'>
							<h1 className='text-gray-700 font-bold text-lg' >SERVICES</h1>
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
							<div className='flex md:justify-start justify-center items-center space-x-2 mt-4'>
								<FaHome className='text-[#f05d58] text-2xl' />
								<p>WEBSITE: https://sudofire.com</p>
							</div>
							{/* <p className=''>https://sudofire.com</p> */}
							<div className='flex md:justify-start justify-center space-x-2 mt-3'>
								<MdEmail className='text-[#f05d58] text-2xl' />
								<p>EMAIL: sales@sudofire.com</p>
							</div>
							{/* <p className=''>sales@sudofire.com</p> */}
							<div className='flex md:justify-start justify-center items-center space-x-2 mt-3'>
								<FaPhoneAlt className='text-[#f05d58] text-2xl text-left' />
								<p className='text-left'>PHONE: +91 98114 06941</p>
							</div>
							{/* <p>+91 98114 06941</p> */}
							<div className='flex md:justify-start justify-center items-center space-x-2 mt-3'>
								<BiCurrentLocation className='text-2xl text-[#f05d58]' />
								<p className="">OFFICE LOCATION:</p>
							</div>
							<p className='text-justify' >Sudofire Technologies, 1st Floor, Landmark Cyberpark, Sector 67, Gurugram, Haryana</p>
						</div>
					</div>
				</div>
				<div className='mt-10 pb-10 flex flex-col items-center space-y-5 font-bold text-lg text-gray-800'>
					<h1>FOLLOW US</h1>
					<div className='flex flex-row space-x-10 items-center '>
						<Link href="https://www.facebook.com/sudofire/">
							<GrFacebook className='text-[#f05d58] rounded-sm w-[32px] h-[32px]' />
						</Link>
						<Link href="https://www.linkedin.com/company/sudofire-technologies/about/">
							<GrLinkedin className='text-[#f05d58] rounded-sm w-[32px] h-[32px]' />
						</Link>
						<Link href="https://www.instagram.com/sudofire_official/">
							<GrInstagram className='text-[#f05d58] rounded-sm w-[36px] h-[36px]' />
						</Link>
						<Link href="https://api.whatsapp.com/send?phone=+919811406941&text=Hi, I contacted you through your website.">
							<FaWhatsappSquare className='text-[#f05d58] rounded-sm w-[37px] h-[37px]' />
						</Link>
					</div>
				</div>
			</div>
		</>

	)
}

export default Footer;