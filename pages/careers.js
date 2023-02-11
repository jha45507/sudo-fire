import Link from 'next/Link'
import Image from 'next/image'
import React from 'react'

import python from '../public/images/career/python.png'
import frontend from '../public/images/career/frontend.png'
import development from '../public/images/career/development.png'
import intern from '../public/images/career/intern-graphics.png'

const Careers = () => {
  return (
    <div className='flex flex-col mt-20 lg:mt-0'>
      <div className='text-center'>
        <h1 className='text-3xl text-gray-600 my-5 font-bold'>Career</h1>
        <p className='text-lg text-gray-600 px-3'>If you wish to be a part of our amazing team, drop your CV on hr@sudofire.com</p>
      </div>
      <div className='mt-10'>
        <div className='flex justify-around flex-col md:flex-row text-xl space-y-20 md:space-y-0 text-gray-600 p-5'>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            {/* <img className="w-60" src="/images/career/python.png" alt="" /> */}
            <Image className='w-60' src={python} />
            <h6 className="">Python-Django Developer</h6>
            <p className="">(Experience: 1-3 years)</p>
            <button type="submit" name="submit" id="submit" className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm">
              <Link className="text-white" href="mailto:hr@sudofire.com"> Apply Now</Link>
            </button>
          </div>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            {/* <img className="w-60" src="/images/career/frontend.png" alt="" /> */}
            <Image className='w-60' src={frontend} />
            <h6 className="">React Native</h6>
            <p className="">(Experience: 2-4 years)</p>
            <button type="submit" name="submit" id="submit" className="my-2 px-4 py-1  hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm">
              <Link className="text-white" href="mailto:hr@sudofire.com"> Apply Now</Link>
            </button>
          </div>
        </div>

        <div className='flex justify-around flex-col md:flex-row space-y-20  md:space-y-0 mt-20 text-xl text-gray-600 p-5'>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            {/* <img className="w-60" src="/images/career/development.png" alt="" /> */}
            <Image className='w-60' src={development} />
            <h6 className="mt-10 text-center">Business Development <br /> Executive</h6>
            <p className="text-center">(Experience: 2-4 years)</p>
            <button type="submit" name="submit" id="submit" className="my-2 px-4 py-1  hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm">
              <Link className="text-white" href="mailto:hr@sudofire.com"> Apply Now</Link>
            </button>
          </div>
          <div className='flex flex-col items-center shadow-md rounded-md p-2'>
            {/* <img className="w-60" src="/images/career/intern-graphics.png" alt="" /> */}
            <Image className='w-60' src={intern} />
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