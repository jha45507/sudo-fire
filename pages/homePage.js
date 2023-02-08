import React, { useRef, useState } from 'react'
import Image from 'next/image'
import homeimg from '../public/images/home-img.png'
import AMSharma from '../public/images/A.MSharma.png'
import Abhishek_Gautam from '../public/images/Abhishek Gautam.png'
import adarshmatta from '../public/images/adarshmatta.png'

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
        <div className="flex items-center justify-center flex-col space-y-20 mt-20 md:mt-0">

            <div className='flex flex-col md:flex-row md:justify-around justify-center items-center bg-img-banner'>
                <div className="sm:mt-60 md:mt-0">
                    <h1 className=''><strong className='lg:text-5xl md:text-3xl text-2xl font-bold text-gray-600'>Building Solutions <br /> for Digital Age</strong></h1>
                    <div className='my-10 lg:text-xl text-md text-center md:text-left'>
                        <a href="" className="bg-red-500 text-white rounded-full py-2  lg:px-5 px-3">View Case Studies</a>
                    </div>
                </div>
                <div className="md:w-[40%] w-[60%] h-[350px] md:h-auto flex justify-center items-center">
                    <Image className='w-full' src={homeimg} />
                </div>
            </div>

            <div className="w-full">
                <h2 className="text-4xl text-center font-bold text-gray-600 pb-20">Our Services</h2>
                <div className="flex flex-col md:flex-row justify-center md:items-start items-center w-[100%] lg:space-x-10 md:space-x-3 space-x-0 space-y-10 md:space-y-0 px-3">

                    <div className="flex flex-col service_box_shadow w-[250px] rounded-md p-5 h-[325px]">
                        <div className="flex flex-col items-center">
                            <img className="w-1/4" src="images/Group 653.png" alt="" />
                            <h4 className='text-center lg:text-2xl text-lg my-3 text-gray-800'>Enterprise IT Solutions</h4>
                            <p className='text-center text-sm text-gray-700'>Enabling business to conquer physical boundaries with new age Technologies.</p>
                        </div>
                        <Link className="flex justify-center items-center mb-3 mt-8 text-red-600" href="/EnterpriseITSolutions">
                            <img className="w-5" src="images/play_icon.png" alt="" />
                            Read More..
                        </Link>
                    </div>
                    <div className="flex flex-col items-center service_box_shadow w-[250px] rounded-md p-5 h-[325px]">
                        <div className="flex flex-col items-center">
                            <img className="w-1/4" src="images/Path 483.png" alt="" />
                            <h4 className='text-center lg:text-2xl text-lg my-3 text-gray-800'>Internet of Things (IoT)</h4>
                            <p className='text-center text-sm text-gray-700'> Building smart cities & smarter homes with WiFi devices for industrial & manufactural insights.</p>
                        </div>
                        <Link className="flex justify-center items-center my-3 text-red-600" href="/Internet_of_Things">
                            <img className="w-5" src="images/play_icon.png" alt="" />
                            Read More..
                        </Link>
                    </div>
                    <div className="flex flex-col items-center service_box_shadow w-[250px] rounded-md p-5 h-[325px]">
                        <div className="flex flex-col items-center">
                            <img className="w-1/4" src="images/Group 649.png" alt="" />
                            <h4 className='text-center lg:text-2xl text-lg my-3 text-gray-800'>SaaS & Mobility Solutions</h4>
                            <p className='text-center text-sm text-gray-700'> On the go solutions for routine business processes enabling remote and in-office management.</p>
                        </div>
                        <Link className="flex justify-center items-center my-3 text-red-600" href="/SaaS&SaaS_Mobility_Solutions">
                            <img className="w-5" src="images/play_icon.png" alt="" />
                            Read More..
                        </Link>
                    </div>
                    <div className="flex flex-col items-center service_box_shadow w-[250px] rounded-md p-5 h-[325px]">
                        <div className="flex flex-col items-center">
                            <img className="w-1/4" src="images/Group 650.png" alt="" />
                            <h4 className='text-center lg:text-2xl text-lg my-3 text-gray-800'>Devops & Cloud Services</h4>
                            <p className='text-center text-sm text-gray-700'> New age services with flexible architecture and on demand pricing paving way for much needed flexibility.</p>
                        </div>
                        <Link className="flex justify-center items-center my-3 text-red-600" href="/Devops&Devops_Cloud_Services">
                            <img className="w-5" src="images/play_icon.png" alt="" />
                            Read More..
                        </Link>
                    </div>

                </div>
            </div>
            <div className='carousel sm:w-3/4 w-[95%] h-[75vh] items-start justify-center bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300  space-y-5 relative rounded-md overflow-hidden'>

                <div className="text-white md:text-4xl text-2xl font-bold mt-12">
                    <h1 className='text-center'>Industry leaders who vouch for us</h1>
                </div>

                <Swiper slidesPerView={1} autoplay={{ delay: 2000 }} loop={true} modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                    <SwiperSlide>
                        <div className=' w-full items-center flex justify-center px-5 rounded-sm h-[60vh] m-0' ref={img_first_ref}>
                            <div className='flex justify-center md:items-center items-start space-x-5 w-full'>
                                <div className='flex justify-center items-center flex-col space-y-3 lg:w-[25%] w-[50%]'>
                                    <Image src={AMSharma} className="bg-white m-auto w-[100%] rounded-md" />
                                    <h3 className='text-left md:text-xl text-lg text-white'>A.MSharma</h3>
                                </div>
                                <div className='flex justify-center items-center flex-col w-48 space-y-5'>
                                    <p className='text-left text-white text-sm md:text-md' >We really liked the enthusiasm and professionalism of the team at Sudofire. They did a wonderful job with our IMS. Good Luck to their future endeavors.</p>
                                    <p className='text-left text-white  text-sm md:text-md'>Assistant Engineer to Director, ALL INDIA RADIO</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' w-full items-center shadow-md flex justify-center px-5 rounded-sm h-[60vh] m-0' ref={img_second_ref}>
                            <div className='flex justify-center md:items-center items-start space-x-5 w-full'>
                                <div className='flex justify-center items-center flex-col space-y-3 lg:w-[25%] w-[50%]'>
                                    <Image src={Abhishek_Gautam} className="bg-white w-[100%] m-auto rounded-md" />
                                    <h3 className='text-left md:text-xl text-lg text-white'>Abhishek Gautam</h3>
                                </div>
                                <div className='flex justify-center items-center flex-col w-48 space-y-5'>
                                    <p className='text-left text-white  text-sm md:text-md' >Good Team to deliver good solutions. Not only the delivery but post deployment support is also their USP. I as a buyer really enjoyed working with Sudofire.</p>
                                    <p className='text-left text-white  text-sm md:text-md'>IT HEAD, National Research Development Corporation</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' w-full items-center shadow-md flex justify-center px-5 rounded-sm h-[60vh] m-0' ref={img_third_ref}>
                            <div className='flex justify-center md:items-center items-start space-x-5 w-full'>
                                <div className='flex justify-center items-center flex-col space-y-3 lg:w-[25%] w-[50%]'>
                                    <Image src={adarshmatta} className="w-[100%] bg-white m-auto rounded-md" />
                                    <h3 className='text-left md:text-xl text-lg text-white'>Mr. Adarsh Matta</h3>
                                </div>
                                <div className='flex justify-center items-center flex-col w-48 space-y-5'>
                                    <p className='text-left text-white  text-sm md:text-md'>We developed a great association with Sudofire and their dedication towards managing our software is commendable. We appreciate their attention to detail and creative approach. Kudos! Sudofire Team.</p>
                                    <p className='text-left text-white  text-sm md:text-md'>CEO of ETA</p>
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