import Head from 'next/head'
import Image from 'next/image'
// import fav from '../public/images/favicon.png'fav
// import Devops_Cloud_Services from '../components/Devops_Cloud_Services'
// import EnterpriseITSolutions from '../components/EnterpriseITSolutions'
// import Internet_of_Things from '../components/Internet_of_Things'
// import SaaS_Mobility_Solutions from '../components/SaaS_Mobility_Solutions'
import styles from '../styles/Home.module.css'
import HomePage from './homePage'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/images/favicon.png" />
      </Head>
      <HomePage/>
      {/* <EnterpriseITSolutions/> */}
      {/* <Internet_of_Things/> */}
      {/* <SaaS_Mobility_Solutions/> */}
      {/* <Devops_Cloud_Services/> */}
    </div>
  )
}
