import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from './homePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>IT Services Company in Gurgaon</title>
        <meta name="title" content="Homepage | Sudofire" />
        <meta name="description" content="Get dedicated IT services for Enterprise Software, Mobile Applications, Saas solutions, IOT solutions, AI solutions. We are an IT company in Gurgaon providing  Cloud services and devops services. We are one of the top IT Outsourcing companies in India for MSMEs." />
        <meta name="keywords" content="IT solutions, IT services, cloud & devops, iot, saas, mobility solutions, software services, AI Service company, Ecommerce Portal Development, Web Development" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
