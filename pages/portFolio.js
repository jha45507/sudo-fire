import React from 'react'
import Image from 'next/image'
import tkbl from '../public/images/portfolio/tkbl.png'
import AIR from '../public/images/portfolio/AIR-logo.png'
import rakt from '../public/images/portfolio/rakt-p.png'
import instafit from '../public/images/portfolio/instafit-logo.png'
import chabarl from '../public/images/portfolio/chabarl.png'
import medicause from '../public/images/portfolio/medicauselogo512.png'
import biryaniqueen from '../public/images/portfolio/biryani-queen-p.png'
import nrdcl from '../public/images/portfolio/nrdcl.png'
import exceamindialogo from '../public/images/portfolio/exceamindialogo.png'
import IRIS from '../public/images/portfolio/IRIS-logo.png'
import pmedicause from '../public/images/portfolio/p-medicause.jpeg'
import ptkb from '../public/images/portfolio/p-tkb.jpeg'
import piris from '../public/images/portfolio/p-iris.jpeg'
import pinsta from '../public/images/portfolio/p-insta.jpeg'
import pchabar from '../public/images/portfolio/p-chabar.jpeg'
import pextream from '../public/images/portfolio/p-extream.jpeg'
import pnrdc from '../public/images/portfolio/p-nrdc.jpeg'
import pair from '../public/images/portfolio/p-air.jpeg'
import pbq from '../public/images/portfolio/p-bq.jpeg'
import praktdaan from '../public/images/portfolio/p-rd.jpeg'

import col from '../public/images/portfolio/Laptop-screens-1.jpg'
import flourish from '../public/images/portfolio/Laptop-screens-2.jpg'
import queens from '../public/images/portfolio/Laptop-screens-3.jpg'
import tnstaeats from '../public/images/portfolio/Laptop-screens-4.jpg'

import Link from 'next/link'
import Head from 'next/head'

const Portfolio = () => {
  return (
    <div className="mt-24 lg:mt-0">
        <Head>
          <title>Our Portfolio | Sudofire</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="title" content="Our Portfolio | Sudofire" />
          <meta name="description" content="Check out Sudofire's portfolio to see our latest work in web design, app development & Software. Our team of experts crafts unique and effective solutions to help our clients achieve their business goals. Browse our portfolio now to see how we can elevate your brand and online presence."/>
          <meta name="keywords" content="Portfolio, Sudofire, online presence, IT Solutions Gurgaon/Gurugram, Enterprise IT Solutions, Internet of Things, SaaS, Mobility Solutions, DevOps, Cloud Services"/>
        </Head>
      <div className="flex justify-around items-center flex-col lg:flex-row ">

        <div className="space-y-3">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl lg:text-start text-center text-red-400">Portfolio</h2>
          <p className="xl:text-2xl lg:text-xl md:text-lg text-md lg:text-start text-center text-gray-600">Our portfolio spans a variety of<br />industries across continents.</p>
        </div>

        <div className="my-5">
          <div className="flex justify-center items-center md:flex-nowrap flex-wrap md:flex-row">
            <div className="shadow-xl w-40 h-24 mx-1 flex justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={tkbl} alt='' />
            </div>
            <div className="shadow-xl w-36 h-42 mx-1 my-3 md:my-0 flex justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={AIR} alt='' />
            </div>
            <div className="shadow-xl w-40 h-24 mx-1 flex justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={rakt} alt='' />
            </div>
          </div>

          <div className="flex justify-center items-center my-3 md:my-5 md:flex-nowrap flex-wrap md:flex-row">
            <div className="shadow-xl w-40 h-24 mx-1 flex justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={instafit} alt='' />
            </div>
            <div className="shadow-xl w-36 h-42 mx-1 my-3 md:my-0 flex justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={chabarl} alt='' />
            </div>
            <div className="shadow-xl w-40 h-24 flex mx-1 justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={IRIS} alt='' />
            </div>
          </div>

          <div className="flex md:justify-end justify-center items-center md:flex-nowrap flex-wrap md:flex-row">
            <div className="shadow-xl w-36 h-42 mx-1 flex justify-center items-center border rounded-lg bg-gray-200 ">
              <Image className='p-7' src={medicause} alt='' />
            </div>
            <div className="shadow-xl w-40 h-24 flex mx-1 my-3 lg:my-0 justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={biryaniqueen} alt='' />
            </div>
            <div className="shadow-xl w-40 h-24 flex mx-1 md:mb-0 justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={exceamindialogo} alt='' />
            </div>
            <div className="shadow-xl w-36 h-42 flex mx-1 justify-center items-center border rounded-lg bg-gray-200">
              <Image className='p-7' src={nrdcl} alt='' />
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center my-5 w-3/4">
          <div className="">
            <Image src={pair} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">All India Radio</h2>
            <p className="text-justify text-gray-600">
              AIR (All India Radio) provides several features to general
              users as to view details of the website and to view and download tender related information,
              offering links to other portals of AIR.
              AIR (All India Radio) provides several features to general users as to view details of the
              website and to view and download tender related information, offering links to other...
              {/* portals of AIR & to get in touch with various branches of AIR
              Also available is the access to the admin dashboard where the list of functionality options
              provided expand. Here the admin has the option to view details of users & equipment
              suppliers, to view station details & details of zone officers, admin can also control HSN
              Master and Item Master related to products and equipment. The admin can also request for
              products from the main Akashvani stores by creating a requisition in the respective column.
              The Store Receipt Book (SRB) is where the list of products to be procured are stored. The
              admin can also create an issue call of a procured product by lodging it in the Store Issue
              Book (SIB). */}
            </p>
            <Link rel="noreferrer" href="http://aircentralstore.org/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={pnrdc} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">NRDC Royalty</h2>
            <p className="text-justify text-gray-600">
              NRDC Royalty is a type of record management system in which
              we maintain the details of parties, agreements, and payments that we file as a fund release
              and that we receive as collected cash from parties.
              NRDC Royalty is a kind of a record management system where we store the details of
              parties, agreements, and payments which we file as a fund release...
              {/* and which we receivefrom parties as collected funds
              In this project there are a number of parties and for each party we make agreements and
              release funds on the basis of their agreement.
              Currently here are the three types of agreement: NRDC, PATSER and PACE agreement.
              After filing royalty, we receive payment from parties on the basis of its agreement and
              installment submission duration.
              There is a report section where we can generate excel reports of how much payment
              received from which party, case wise royalty received and many more reports.
              Also there is a graph section where we can check in which agreement(NRDC, PATSER, PACE)
                            how much royalty received from which party. */}

            </p>
            <Link rel="noreferrer" href="http://nrdcindia.com/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={pbq} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">Biryani Queen</h2>
            <p className="text-justify text-gray-600">
              Biryani Queen is a culinary restaurant chain in India that delivers wonderful mouthwatering
              foods right to your door. Creative visuals were provided and incorporated into a visually
              appealing yet technologically sound website. Creative visuals were provided and incorporated into a visually appealing yet technologically sound website. A food restaurant chain serving delicious mouth watering delicacies at your doorstep inmultiple cities around India. Famous for biryani as the name suggests,...
              {/* it serves many
              more delicacies mentioned in their menu
              Featuring many great reviews and services that
              are right up there in terms of quality and delivery, it truly is remarkable at their
              service. Catering the taste buds of both vegetarians and non vegetarians alike, the menu
              along with services really are diverse. */}
            </p>
            <Link rel="noreferrer" href="http://biryaniqueen.com/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={pchabar} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">Cha Bar</h2>
            <p className="text-justify text-gray-600 word-spacing">
              Cha Bar is a one-of-a-kind urban contemporary place that made a splash in Kolkata in the
              year 2000, transforming tea from a historical footnote to a trendy beverage.Provision of
              creative graphics designing along with a cutting edge technology enabled web application.
              Provision of creative graphics designing along with a cutting edge technology enabled webapplication.
              Cha Bar is the first of its kind urban contemporary space that created a rage in Kolkata
              in year 2000, turning tea from a dry page in history to a lifestyle...
              {/* drink! Ms. Priti
              Paul’s brain child backed by generations...
              of Apeejay Surrendra group’s experience in tea
              plantation business, Cha Bar was created as an integral part of more than 90 years old
              iconic Oxford Bookstore in city centre Park Street. The concept was expanded pan India
              integrated into Oxford Bookstores and customers loved the experience of being able to
              bse at leisure, leafing through the books of their choice, over a cup of tea from the
              wide selection available at the Cha Bar or simply unwinding with friends sipping the
              rejuvenating beverage, iced or piping hot! */}
            </p>
            <Link rel="noreferrer" href="http://chabar.in/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={pextream} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">Exceam India</h2>
            <p className="text-justify text-gray-600">
              Exceam India maximises the value of great commercial property
              services by providing customers with the entire chain of real estate operations and
              Corporate Facilities Management Services.Excellence property was establish on 1999 with a registered amount of 125cr,is a Company mainly engaged in high-end office space, CBD high-tech projects,..
              {/* high-end residential,
                  large and noble humanistic community,...
                  government public project property management
                  services, and property consultants, property leasing, asset management services. aims to
                  make fully utilize the outstanding commercial property services to highlight advantages,
                  to provide customers with the whole chain of real estate operation and Corporate
                            Facilities Management Services. */}
            </p>
            <Link rel="noreferrer" href="http://www.exceamindia.in/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={pinsta} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">InstaFitness</h2>
            <p className="text-justify text-gray-600">
              Provision of a comprehensive enterprise mobility solution that is compatible with
              complicated data structures. InstaFitness is a government of India recognized start-up
              situated at New Delhi. InstaFitness is a government of India recognized start-up situated at New Delhi. With
              over 10,000 happy, motivated and disease free clients and 5 years of service excellence in the health and wellness industry,...
              {/* we are the most trusted partners for weight loss,
              keto diet and lifestyle disease management and cure such as diabetes, PCOS and thyroid.
              Our biggest commitment is to nurture human relations while delivering service through
              our seasoned team of 50+ expert dietitians and health coaches. */}
            </p>
            <Link rel="noreferrer" href="http://instafitness.in/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={piris} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">IrisCorp</h2>
            <p className="text-justify text-gray-600">
              Development of web application has been taken place with vanguard technology. The vision is
              Corporate Solutions Private Limited (IRIS-Corp) has gn from strength to strength over the years
              The vision is to become a leading Integrated HR Services Company by 2025.
              Its founders and the core team have more than three decades of entrepreneurial...
              {/* experience during which they created a string of innovative and successful ventures
              including AOK In-house BPO Services Limited and AOK In-house Factoring Private Limited,
              a prominent name in the KPO/HR service industry (now taken over by 3i-Infotech Limited
              and known as 3i-infotech BPO). */}
            </p>
            <Link rel="noreferrer" href="http://iris-corp.com/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="bg-gray-200">
            <Image className='xl:h-[90vh] lg:h-[70vh] md:h-[56vh]' src={praktdaan} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">Raktdaan</h2>
            <p className="text-justify text-gray-600">
              Raktdaan is a mobile application that promotes blood donation as a valuable social activity.
              Users can register, fill out their information, and then either donate blood or request
              blood in an emergency. Raktdaan is a mobile application based at doing a great social service of blood donation. Users can sign up, fill their details and either donate blood to others or... request blood in time of need...
              {/* The enhanced flow along with google map interface makes
              it very easy to use and the aim of the application makes it very useful. With endless
              scope of expanding this foundation into various other medical fields & helping more
              people, it is also incredibly versatile. */}
            </p>
            <Link rel="noreferrer" href="http://www.raktdaan.canwinn.org/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={ptkb} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">The Knowledge Bus Global School</h2>
            <p className="text-justify text-gray-600 word-spacing">
              TKB- Global web application is a comprehensive catalogue for all upcoming events.
              The development of a technically sophisticated web application was
              undertaken with leading edge technology. The Knowledge Bus Global School Greater Mohali in association with The Knowledge Universe Singapore, a chain of over 3000 schools worldwide on the platform... of providing highest standards of education...
              {/* Education aims at ‘Sharpening minds and shaping
                  futuristic believes towards a progressive era'.
                  Situated in a sprawling 6 acres campus, The Knowledge Bus Global School – Greater Mohali
                  is designed at par with international standards to offer high-end infrastructure. Driven
                  by technology, the infrastructure also offers 24X7 connectivity to online knowledge
                            banks through Wi-Fi Networks. */}
            </p>
            <Link rel="noreferrer" href="http://tkbglobalschools.com/" className="" target="_blank">
              <button className="my-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={pmedicause} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">Medicause</h2>
            <p className="text-justify text-gray-600">
              Medicause offers a broad spectrum of e-healthcare services over a single platform. For the
              first time, Home Healthcare services will be available at a click., WeddingGaadi
              also makes it easy for you to find and book your wedding services and celebrate life
              special moments like never before. Now finding your dream wedding services is not going to
              take a lot of time. With a directory of the largest local wedding vendors & wedding services...
              {/* all around the country, you can find your ideal wedding packages under your budget and plan... */}
              {/* your wedding exactly the way you always dreamt of.
              Get price details, wedding details, affordable wedding packages, ratings & reviews of a
              variety of wedding vendors within minutes. */}
            </p>
            <Link rel="noreferrer" href="http://medicause.in/" className="" target="_blank">
              <button className="mt-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center mt-5 w-3/4">
          <div className="">
            <Image src={col} />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">Coalgenie</h2>
            <p className="text-justify text-gray-600">
            Coalgenie is an e-business platform catering to the requirements for all coal commodities. From the time of its inception in July 2021, we have thrived to address all the pain points in the coal trade and simultaneously provide customized solutions for related issues
            </p>
            <Link rel="noreferrer" href="https://www.coalgenie.com/" className="" target="_blank">
              <button className="mt-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={flourish} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">Flourish</h2>
            <p className="text-justify text-gray-600">
            The house of flourish, a luxury jewellery brand is home to eco-friend]y and guilt-free pleasures in precious jewellery that help you make your style statement. Both through everyday luxury jewellery and occasion-specific statement pieces. We believe in empowering you through what you carry and at the House of Flourish, right from choosing the design of your jewellery to styling it the way you want, whenever you want, everything reflects - YOU!
            </p>
            <Link rel="noreferrer" href="http://flourishbygunjanjain.com" className="" target="_blank">
              <button className="mt-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={queens} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">Queen’s Gynecology</h2>
            <p className="text-justify text-gray-600">
            Queen’s Gynecology was created with the vision of empowering women by providing equal health opportunities, where women and girls live in dignity, are healthy and have choices. Our customized treatment protocols make us the best PCOS specialist in Delhi.
            </p>
            <Link rel="noreferrer" href="http://queensgynecology.in" className="" target="_blank">
              <button className="mt-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20 w-3/4">
          <div className="">
            <Image src={tnstaeats} alt='' />
          </div>
          <div className='text-center mt-5'>
            <h2 className="text-2xl text-red-500 my-2">InstaEats</h2>
            <p className="text-justify text-gray-600">
            We at InstaEats are a team of food experts and experienced dieticians who aim to make India healthy and nutritious. We help people fulfil their daily micronutrient requirements and manage their lifestyle diseases like Diabetes, PCOD and Thyroid naturally through our scientifically customized & healthiest superfood mix and Dietary consultation.
            </p>
            <Link rel="noreferrer" href="https://www.instaeats.in/" className="" target="_blank">
              <button className="mt-2 px-4 py-1 hover:bg-orange-600 active:bg-[#f05d58] bg-[#f05d58] rounded-full text-sm text-white">
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Portfolio