import Link from 'next/Link'
import Image from 'next/image'
import React from 'react'

import python from '../public/images/career/python.png'
import frontend from '../public/images/career/frontend.png'
import development from '../public/images/career/development.png'
import intern from '../public/images/career/intern-graphics.png'

const Careers = () => {
  return (
    <div className='flex flex-col mt-20 lg:mt-0 lg:flex-row lg:justify-between items-start'>
      <div className='text-center lg:text-left lg:w-[40%] w-auto xl:pl-[110px] lg:pl-[30px] xl:mt-[200px] lg:mt-[200px]'>
        <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl lg:text-start text-center text-red-500 mt-6 lg:mt-0'>Career</h1>
        <p className='mt-4 xl:text-2xl lg:text-xl md:text-lg text-md lg:text-start text-center text-gray-600 px-3 md:px-0'>If you wish to be a part of our amazing team, drop your CV on hr@sudofire.com</p>
      </div>
      <div className='mt-10 lg:w-[60%] w-full '>
        <div className='flex justify-around flex-col md:flex-row text-xl space-y-20 md:space-y-0 text-gray-600 p-5'>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            <Image className='w-60' src={python} alt="python" />
            <h6 className="">Python-Django Developer</h6>
            <p className="">(Experience: 1-3 years)</p>
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
            <h6 className="mt-10 text-center">Graphics Designing Intern</h6>
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