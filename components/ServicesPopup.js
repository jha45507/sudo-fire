import React from 'react'
import Link from 'next/link'

const ServicesPopup = () => {
    return (
        <div className='lg:flex hidden absolute top-20 right-0 overflow-visible bg-white border space-x-10 px-7 py-2 shadow-xl'>
            <div className='text-left list-none'>
                <h1 className='text-lg py-3 hover:text-red-400' ><Link href="/EnterpriseITSolutions">Enterprise IT Solutions</Link></h1>
                <Link  href="/EnterpriseITSolutions#ECM"><p className='py-1 hover:text-red-400'>Enterprise Content Management </p></Link>
                <Link  href="/EnterpriseITSolutions#ESM"><p className='py-1 hover:text-red-400'>Ecommerce & Stock Management </p></Link>
                <Link  href="/EnterpriseITSolutions#CBA"><p className='py-1 hover:text-red-400'>CRMs & Business Applications </p></Link>
                <Link  href="/EnterpriseITSolutions#LM"><p className='py-1 hover:text-red-400'>Legacy Modernisation </p></Link>
            </div>
            <div className='text-left list-none'>
                <h1 className='text-lg py-3 hover:text-red-400' ><Link href="/Internet_of_Things">Internet of Things (IoT)</Link></h1>
                <Link  className="" href="/Internet_of_Things#HA"><p className="py-1 hover:text-red-400">Home Automation</p></Link>
                <Link  className="" href="/Internet_of_Things#IA"><p className="py-1 hover:text-red-400">Industrial Automation</p></Link>
                <Link  className="" href="/Internet_of_Things#SEI"><p className="py-1 hover:text-red-400">Smart Environment Implementation</p></Link>
            </div>
            <div className='text-left list-none'>
                <h1 className='text-lg py-3 hover:text-red-400' ><Link href="/SaaS_Mobility_Solutions">SaaS & Mobility Solutions</Link></h1>
                <Link  href="/SaaS_Mobility_Solutions#RSS"><p className='py-1 hover:text-red-400'>Redefining Software Services</p></Link>
                <Link  href="/SaaS_Mobility_Solutions#NAMS"><p className='py-1 hover:text-red-400'>New Age Mobility Solutions</p></Link>
            </div>
            <div className='text-left list-none'>
                <h1 className='text-lg py-3 hover:text-red-400' ><Link href="/Devops_Cloud_Services">Devops & Cloud Services</Link></h1>
                <Link  href="/Devops_Cloud_Services#CL"><p className='py-1 hover:text-red-400'>Cloud Consulting</p></Link>
                <Link  href="/Devops_Cloud_Services#CA"><p className='py-1 hover:text-red-400'>Cloud Architecture</p></Link>
                <Link  href="/Devops_Cloud_Services#CO"><p className='py-1 hover:text-red-400'>Cost Optimization</p></Link>
                <Link  href="/Devops_Cloud_Services#M&S"><p className='py-1 hover:text-red-400'>Migration & Security</p></Link>
            </div>
        </div>
    )
}

export default ServicesPopup