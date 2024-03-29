import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'

import python from '../public/images/career/python.png'
import frontend from '../public/images/career/frontend.png'
import development from '../public/images/career/development.png'
import intern from '../public/images/career/intern-graphics.png'

const Careers = () => {
  return (
    <div className='flex flex-col mt-20 lg:mt-0 lg:flex-row lg:justify-between items-start'>
      <Head>
        <title>Join Our Team | Career Opportunities at Sudofire</title>
        <meta name="description" content="Interested in joining a dynamic and innovative team? Sudofire is always looking for talented individuals to help us create amazing digital experiences for our clients. Explore our current career opportunities and discover how you can bring your skills and expertise to Sudofire. Apply today and take the first step towards a rewarding career in digital marketing and web design."/>
        <meta name="title" content="Join Our Team | Career Opportunities at Sudofire" />
        <meta name="keywords" content="career opportunities, job openings, python jobs, django jobs, coding jobs, IT hiring, Sudofire, join our team, apply for a job, app design, jobs in Gurgaon/Gurugram/Delhi NCR" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className='text-center lg:text-left lg:w-[40%] w-auto xl:pl-[110px] lg:pl-[30px] xl:mt-[200px] lg:mt-[200px]'>
        <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl lg:text-start text-center text-red-500 mt-6 lg:mt-0'>Career</h1>
        <p className='mt-4 xl:text-2xl lg:text-xl md:text-lg text-md lg:text-start text-center text-gray-600 px-3 md:px-0'>If you wish to be a part of our amazing team, drop your CV on hr@sudofire.com</p>
      </div>
      <div className='mt-10 lg:w-[60%] w-full '>
        <div className='flex justify-around flex-col md:flex-row text-xl space-y-20 md:space-y-0 text-gray-600 p-5'>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            <Image className='w-60' src={python} alt="python" />
            <h6 className="">Python-Django Developer</h6>
            <p className="">(Experience: 3-5 years)</p>
            <button type="submit" name="submit" id="submit" className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm">
              <Link className="text-white" href="mailto:hr@sudofire.com"> Apply Now</Link>
            </button>
          </div>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            <Image className='w-60' src={frontend} alt="frontend" />
            <h6 className="">React Native</h6>
            <p className="">(Experience: 2-4 years)</p>
            <button type="submit" name="submit" id="submit" className="my-2 px-4 py-1  hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm">
              <Link className="text-white" href="mailto:hr@sudofire.com"> Apply Now</Link>
            </button>
          </div>
        </div>

        <div className='flex justify-around flex-col md:flex-row space-y-20  md:space-y-0 mt-10 text-xl text-gray-600 p-5'>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            <Image className='w-60' src={development} alt="development" />
            <h6 className="mt-10 text-center">Business Development <br /> Executive</h6>
            <p className="text-center">(Experience: 2-4 years)</p>
            <button type="submit" name="submit" id="submit" className="my-2 px-4 py-1  hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm">
              <Link className="text-white" href="mailto:hr@sudofire.com"> Apply Now</Link>
            </button>
          </div>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            <Image className='w-60' src={intern} alt="intern" />
            <h6 className="mt-10 text-center">Graphics Designing <br /> Intern</h6>
            <p className="text-center">(Experience: 0-1 year)</p>
            <button type="submit" name="submit" id="submit" className="my-2 px-4 py-1  hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm">
              <Link className="text-white" href="mailto:hr@sudofire.com"> Apply Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers