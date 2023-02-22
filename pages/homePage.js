import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

import swiperCore, { Autoplay } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import homeimg from '../public/images/home-img.png'

import AMSharma from '../public/images/A.MSharma-removebg-preview.png'
import Abhishek_Gautam from '../public/images/Abhishek_Gautam-removebg-preview.png'
import adarshmatta from '../public/images/adarshmatta-removebg-preview.png'

import play_icon from '../public/images/play_icon.png'
import Group653 from '../public/images/Group653.png'
import Path483 from '../public/images/Path483.png'
import Group649 from '../public/images/Group649.png'
import Group650 from '../public/images/Group650.png'

import bg from '../public/images/side-img.png'


const HomePage = () => {
    
    let img_first_ref = useRef();
    let img_second_ref = useRef();
    let img_third_ref = useRef();
    swiperCore.use([Autoplay])

    let styling = {
        backgroundImage: `url(${bg.src})`,
        width: '100vw',
        
    }

    return (
        <div className="flex items-center md:justify-center justify-end flex-col md:space-y-6 space-y-0 mt-20 lg:mt-0">

            <div className='flex flex-col md:flex-row md:justify-around justify-end items-center md:h-[88vh] h-[60vh]' style={styling}>
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
            <div className='xl:w-2/4 md:w-3/4 w-[95%] h-full'>
                <h1 className='text-center lg:text-4xl md:text-3xl text-2xl font-bold text-gray-600'>Industry leaders who vouch for us</h1>
                <Swiper centeredSlides={true} pagination={{ clickable: true, }} navigation={true} className="mySwiper"
                    slidesPerView={1} autoplay={{ delay: 2500 }} loop={true} modules={[Pagination, Navigation]} >
                    <SwiperSlide>
                        <div className='w-full xl:h-[50vh] h-[50vh] lg:h-[60vh] flex flex-col items-center m-auto mt-16 border-t-8 border-blue-100 bg-gray-100' ref={img_first_ref}>
                            <div className='w-[60px] mt-8'>
                                <Image src={AMSharma} className="rounded-full bg-gray-200" />
                            </div>
                            <div className='text-center mt-5 md:mb-14 mb-7 lg:w-3/4 w-[90%]'>
                                <h3 className='text-lg text-gray-700'>A.M Sharma</h3>
                                <p className='text-sm text-gray-300 lg:underline underline-offset-[20px]'>Assistant Engineer to Director, ALL INDIA RADIO</p>
                            </div>
                            <div className='text-center text-gray-400 text-sm lg:w-3/4 w-[90%] leading-6'>
                                <p className='' >We really liked the enthusiasm and professionalism of the team at Sudofire. They did a wonderful job with our IMS. Good Luck to their future endeavors.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full xl:h-[50vh] h-[50vh] lg:h-[60vh] flex flex-col items-center m-auto mt-16 border-t-8 border-blue-100 bg-gray-100' ref={img_first_ref}>
                            <div className='w-[60px] mt-8'>
                                <Image src={Abhishek_Gautam} className="rounded-full bg-gray-200" />
                            </div>
                            <div className='text-center mt-5 md:mb-14 mb-7 lg:w-3/4 w-[90%]'>
                                <h3 className='text-lg text-gray-700'>Abhishek Gautam</h3>
                                <p className='text-sm text-gray-300 lg:underline underline-offset-[20px]'>IT HEAD, National Research Development Corporation</p>
                            </div>
                            <div className='text-center text-gray-400 text-sm lg:w-3/4 w-[90%] leading-6'>
                                <p className='' >Good Team to deliver good solutions. Not only the delivery but post deployment support is also their USP. I as a buyer really enjoyed working with Sudofire.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full xl:h-[50vh] h-[50vh] lg:h-[60vh] flex flex-col items-center m-auto mt-16 border-t-8 border-blue-100 bg-gray-100' ref={img_first_ref}>
                            <div className='w-[60px] mt-8'>
                                <Image src={adarshmatta} className="rounded-full bg-gray-200" />
                            </div>
                            <div className='text-center mt-5 md:mb-14 mb-7 lg:w-3/4 w-[90%]'>
                                <h3 className='text-lg text-gray-700'>Mr. Adarsh Matta</h3>
                                <p className='text-sm text-gray-300 lg:underline underline-offset-[20px]'>CEO of ETA</p>
                            </div>
                            <div className='text-center text-gray-400 text-sm lg:w-3/4 w-[90%] leading-6'>
                                <p className='' >We developed a great association with Sudofire and their dedication towards managing our software is commendable. We appreciate their attention to detail and creative approach. Kudos! Sudofire Team.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* <div className='carousel w-[95%] md:w-[82%] lg:h-[75vh] h-[82vh] space-y-5 relative rounded-md overflow-hidden flex lg:justify-start justify-center items-center flex-col'>
                <h1 className='text-center text-gray-600 md:text-4xl text-xl font-bold mt-8'>Industry leaders who vouch for us</h1>
                <div className='lg:w-[82%] lg:h-[60vh] w-[95%] h-[80vh] bg-indigo-300'>
                    <Swiper centeredSlides={true} pagination={{ clickable: true, }} navigation={true} FclassName="mySwiper"
                        slidesPerView={1} autoplay={{ delay: 2500 }} loop={true} modules={[Pagination, Navigation]} >
                        <SwiperSlide>
                            <div className=' w-[100%] lg:h-[60vh] h-[80vh] items-center flex justify-center m-auto' ref={img_first_ref}>
                                <div className='w-[100%] flex flex-col-reverse lg:flex-row justify-center items-center '>
                                    <div className='lg:w-[45%] shadow-2xl lg:p-[50px] p-3 w-[90%] rounded-xl lg:mt-0 mt-5'>
                                        <div className=''>
                                            <p className='text-justify text-white lg:text-lg text-md'>Assistant Engineer to Director, ALL INDIA RADIO</p>
                                            <p className='text-justify text-white lg:text-md text-sm lg:mt-10 mt-5' >We really liked the enthusiasm and professionalism of the team at Sudofire. They did a wonderful job with our IMS. Good Luck to their future endeavors.</p>
                                        </div>
                                    </div>
                                    <div className='lg:w-[30%] lg:ml-16 w-[90%] lg:flex-none flex flex-col items-center'>
                                        <Image src={AMSharma} className="lg:w-[200px] w-[150px] rounded-[50%] shadow-2xl p-2" />
                                        <h3 className='text-left lg:ml-8 lg:text-2xl text-xl text-white'>A.M Sharma</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' w-[100%] lg:h-[60vh] h-[80vh] items-center flex justify-center m-auto' ref={img_first_ref}>
                                <div className='w-[100%] flex flex-col-reverse lg:flex-row justify-center items-center'>
                                    <div className='lg:w-[45%] shadow-2xl lg:p-[50px] p-3 w-[90%] rounded-xl lg:mt-0 mt-5'>
                                        <div className=''>
                                            <p className='text-justify text-white lg:text-lg text-md'>IT HEAD, National Research Development Corporation</p>
                                            <p className='text-justify text-white lg:text-md text-sm lg:mt-10 mt-5' >Good Team to deliver good solutions. Not only the delivery but post deployment support is also their USP. I as a buyer really enjoyed working with Sudofire.</p>
                                        </div>
                                    </div>
                                    <div className='lg:w-[30%] lg:ml-16 w-[90%] lg:flex-none flex flex-col items-center'>
                                        <Image src={Abhishek_Gautam} className="lg:w-[200px] w-[150px] rounded-[50%] shadow-2xl p-2" />
                                        <h3 className='text-left lg:ml-8 lg:text-2xl text-xl text-white'>Abhishek Gautam</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' w-[100%] lg:h-[60vh] h-[80vh] items-center flex justify-center m-auto' ref={img_first_ref}>
                                <div className='w-[100%] flex flex-col-reverse lg:flex-row justify-center items-center'>
                                    <div className='lg:w-[45%] shadow-2xl lg:p-[50px] p-3 w-[90%] rounded-xl lg:mt-0 mt-5'>
                                        <div className=''>
                                            <p className='text-justify text-white lg:text-lg text-md'>CEO of ETA</p>
                                            <p className='text-justify text-white lg:text-md text-sm lg:mt-10 mt-5' >We developed a great association with Sudofire and their dedication towards managing our software is commendable. We appreciate their attention to detail and creative approach. Kudos! Sudofire Team.</p>
                                        </div>
                                    </div>
                                    <div className='lg:w-[30%] lg:ml-16 w-[90%] lg:flex-none flex flex-col items-center'>
                                        <Image src={adarshmatta} className="lg:w-[200px] w-[150px] rounded-[50%] shadow-2xl p-2" />
                                        <h3 className='text-left lg:ml-8 lg:text-2xl text-xl text-white'>Mr. Adarsh Matta</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div> */}
        </div >
    )
}

export default HomePage