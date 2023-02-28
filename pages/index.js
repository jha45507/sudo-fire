import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from './homePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>IT Services Company in Gurgaon</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
