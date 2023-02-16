import React, { useRef, useState } from 'react'
import Image from 'next/image'

import homeimg from '../public/images/home-img.png'

import AMSharma from '../public/images/A.MSharma-removebg-preview.png'
import Abhishek_Gautam from '../public/images/Abhishek_Gautam-removebg-preview.png'
import adarshmatta from '../public/images/adarshmatta-removebg-preview.png'

import play_icon from '../public/images/play_icon.png'
import Group653 from '../public/images/Group653.png'
import Path483 from '../public/images/Path483.png'
import Group649 from '../public/images/Group649.png'
import Group650 from '../public/images/Group650.png'

import { Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import swiperCore, { Autoplay } from 'swiper';
import Link from 'next/Link'

const HomePage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    swiperCore.use([Autoplay])

    let img_first_ref = useRef();
    let img_second_ref = useRef();
    let img_third_ref = useRef();

    return (
        <div className="flex items-center md:justify-center justify-end flex-col md:space-y-6 space-y-0 mt-20 lg:mt-0">

            <div className='flex flex-col md:flex-row md:justify-around justify-end items-center bg-img-banner'>
                <div className="sm:mt-60 md:mt-0">
                    <h1 className='text-center md:text-left'><strong className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-600 '>Building Solutions <br /> for Digital Age</strong></h1>
                    <div className='xl:my-8 md:my-5 my-10 xl:text-xl lg:text-lg text-md text-center md:text-left'>
                        <Link href="/portFolio" className="bg-red-500 text-white rounded-full xl:py-2 lg:py-1 py-1 md:py-2 xl:px-5 px-3 hover:text-red-400 hover:bg-gray-200">View Case Studies</Link>
                    </div>
                </div>
                <div className="md:w-[40%] w-[320px] h-[200px] md:h-auto flex justify-center items-center">
                    <Image className='w-full' src={homeimg} />
                </div>
            </div>

            <div className="w-full pb-10 pd:mb-0">
                <h2 className="md:text-4xl text-2xl text-center font-bold text-gray-600 lg:pb-10 pb-5 md:pt-4 pt-6">Our Services</h2>
                <div className="flex flex-col md:flex-row md:justify-center md:items-start items-center w-[100%] lg:space-x-10 md:space-x-3 space-x-0 space-y-10 md:space-y-0">
                    <div className='md:space-y-5 space-y-10 xl:space-y-0 xl:flex justify-center items-center xl:space-x-10 space-x-0'>
                        <Link href="/EnterpriseITSolutions" className="flex flex-col service_box_shadow w-[250px] rounded-md p-5 h-[325px]">
                            <div className="flex flex-col items-center">
                                <Image className="w-1/4 my-3" src={Group653} />
                                <h4 className='text-center lg:text-2xl text-lg text-gray-800'>Enterprise IT Solutions</h4>
                                <p className='text-sm my-3 text-gray-700 text-justify word-spacing'>Enabling business to conquer physical boundaries with new age Technologies.</p>
                            </div>
                            <Link className="flex justify-center items-center xl:mt-8 lg:mt-9 mt-10 text-red-600" href="/EnterpriseITSolutions">
                                <Image className="w-5" src={play_icon} />
                                Read More..
                            </Link>
                        </Link>
                        <Link href="/Internet_of_Things" className="flex flex-col items-center service_box_shadow w-[250px] rounded-md p-5 h-[325px]">
                            <div className="flex flex-col items-center">
                                <Image className="w-1/4 my-3" src={Path483} />
                                <h4 className='text-center lg:text-2xl text-lg text-gray-800'>Internet of Things (IoT)</h4>
                                <p className='text-justify text-sm my-3 text-gray-700 word-spacing'> Building smart cities & smarter homes with WiFi devices for industrial & manufactural insights.</p>
                            </div>
                            <Link className="flex justify-center items-center xl:mt-8 lg:mt-9 mt-10 text-red-600" href="/Internet_of_Things">
                                <Image className="w-5" src={play_icon} />
                                Read More..
                            </Link>
                        </Link>

                    </div>

                    <div className='md:space-y-5 space-y-10 xl:space-y-0 xl:flex justify-center items-center xl:space-x-10 space-x-0'>
                        <Link href="/SaaS&SaaS_Mobility_Solutions" className="flex flex-col items-center service_box_shadow w-[250px] rounded-md p-5 h-[325px]">
                            <div className="flex flex-col items-center">
                                <Image className="w-1/4 my-3" src={Group649} />
                                <h4 className='text-center lg:text-2xl text-lg text-gray-800'>SaaS & Mobility Solutions</h4>
                                <p className='text-justify text-sm my-3 text-gray-700 word-spacing'> On the go solutions for routine business processes enabling remote and in-office management.</p>
                            </div>
                            <Link className="flex justify-center items-center xl:mt-3 lg:mt-4 mt-5 text-red-600" href="/SaaS&SaaS_Mobility_Solutions">
                                <Image className="w-5" src={play_icon} />
                                Read More..
                            </Link>
                        </Link>

                        <Link href="/Devops&Devops_Cloud_Services" className="flex flex-col items-center service_box_shadow w-[250px] rounded-md p-5 h-[325px]">
                            <div className="flex flex-col items-center">
                                <Image className="w-1/4 my-3" src={Group650} />
                                <h4 className='text-center lg:text-2xl text-lg text-gray-800'>Devops & Cloud Services</h4>
                                <p className='text-justify text-sm my-3 text-gray-700 word-spacing'> New age services with flexible architecture and on demand pricing paving way for much needed flexibility.</p>
                            </div>
                            <Link className="flex justify-center items-center xl:mt-3 lg:mt-4 mt-5 text-red-600" href="/Devops&Devops_Cloud_Services">
                                <Image className="w-5" src={play_icon} />
                                Read More..
                            </Link>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='carousel w-[95%] lg:w-3/4 lg:h-[65vh] md:h-[70vh] h-[65vh] bg-gradient-to-r from-indigo-300 to-red-400  space-y-5 relative rounded-md overflow-hidden'>

                <h1 className='text-center text-white md:text-4xl text-xl font-bold mt-8'>Industry leaders who vouch for us</h1>

                <Swiper slidesPerView={1} autoplay={{ delay: 2000 }} loop={true} modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                    <SwiperSlide>
                        <div className=' w-[100%] items-start md:items-center flex justify-center px-5 rounded-sm lg:h-[48vh] h-[55vh] m-0' ref={img_first_ref}>
                            <div className='w-[100%] flex flex-col md:flex-row justify-center md:items-start items-center md:space-x-20 space-x-0'>
                                <div className='flex justify-center items-center flex-col space-y-3 lg:w-[24%] md:w-[35%]'>
                                    <Image src={AMSharma} className=" m-auto md:w-[100%] w-[150px] rounded-md bg-white" />
                                </div>
                                <div className='md:mt-0 mt-4 flex justify-start items-center md:items-start flex-col md:w-[40%] w-[100%] space-y-5'>

                                    <h3 className='md:text-left text-center md:text-2xl text-md text-white'>A.M Sharma</h3>
                                    <p className='text-justify text-white text-sm md:text-lg xl:text-xl'>Assistant Engineer to Director, ALL INDIA RADIO</p>
                                    <p className='text-justify text-white text-sm xl:text-lg pt-4' >We really liked the enthusiasm and professionalism of the team at Sudofire. They did a wonderful job with our IMS. Good Luck to their future endeavors.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[100%] items-start md:items-center flex justify-center px-5 rounded-sm lg:h-[48vh] h-[55vh] m-0' ref={img_second_ref}>
                            <div className=' w-[100%] flex flex-col md:flex-row justify-center md:items-start items-center md:space-x-20 space-x-0'>
                                <div className='flex justify-center items-center flex-col space-y-3 lg:w-[24%] md:w-[35%]'>
                                    <Image src={Abhishek_Gautam} className="md:w-[100%] w-[150px] m-auto rounded-md d bg-white" />
                                </div>
                                <div className='md:mt-0 mt-4 flex justify-start items-center md:items-start flex-col md:w-[40%] w-[100%] space-y-5'>
                                    <h3 className='md:text-left text-center md:text-2xl text-md text-white'>Abhishek Gautam</h3>
                                    <p className='text-justify text-white text-sm md:text-lg xl:text-xl'>IT HEAD, National Research Development Corporation</p>
                                    <p className='text-justify text-white text-sm xl:text-lg pt-4' >Good Team to deliver good solutions. Not only the delivery but post deployment support is also their USP. I as a buyer really enjoyed working with Sudofire.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' w-[100%] items-start md:items-center flex justify-center px-2 rounded-sm lg:h-[48vh] h-[55vh] m-0' ref={img_third_ref}>
                            <div className='w-[100%] flex flex-col md:flex-row justify-center md:items-start items-center md:space-x-20 space-x-0'>
                                <div className='flex justify-center items-center flex-col space-y-3 lg:w-[24%] md:w-[35%]'>
                                    <Image src={adarshmatta} className="md:w-[100%] w-[150px] m-auto rounded-md d bg-white" />
                                </div>
                                <div className='md:mt-0 mt-4 flex justify-start items-center md:items-start flex-col md:w-[40%] w-[100%] space-y-5'>
                                    <h3 className='md:text-left text-center md:text-2xl text-md text-white'>Mr. Adarsh Matta</h3>
                                    <p className='text-justify text-white text-sm md:text-lg xl:text-xl'>CEO of ETA</p>
                                    <p className='text-justify text-white text-sm xl:text-lg pt-4'>We developed a great association with Sudofire and their dedication towards managing our software is commendable. We appreciate their attention to detail and creative approach. Kudos! Sudofire Team.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default HomePage