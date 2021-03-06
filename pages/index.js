import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BannerIcon from '../public/id_verification.png'
import Logo from '../public/logo.svg'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Student ID Verification</title>
        <meta name="description" content="Student ID verification uing Azure form Validator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Link href="/login" passHref={true}>
        <button className={styles.loginBtn}>Login</button></Link>
        <div className={styles.seperator}><hr></hr><span className={styles.orSeperator}>OR</span></div>
        <Link href="/register" passHref={true}><button className={styles.registerBtn}>Register</button>
     </Link>
     </div>
     <div className={styles.subMain}>
       <div className={styles.student_id}>
       <Image src={BannerIcon} alt="student id logo" layout="fixed" width={200} height={200}></Image>
       </div>
       <div className={styles.companyLogo}>
       <Image src={Logo} alt="Company logo" layout="fixed" width={150} height={150}></Image>
       </div>
     </div>

    </div>
  )
}
