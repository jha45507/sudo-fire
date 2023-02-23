import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from './homePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sudofire-IT Solutions</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
