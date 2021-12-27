import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import BannerIcon from '../../public/id_verification.png'
import Logo from '../../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.main}>
       <form className={styles.loginForm}>
           <h1 className={styles.logTitle}>Register</h1>
           <input className={styles.logField} placeholder="Full Name" autoFocus="true"></input>
           <input className={styles.logField} placeholder="Email"></input>
           <input className={styles.logField} placeholder="Phone number" autoFocus="true"></input>
           <input className={styles.logField} placeholder="Date of Birth (dd/mm/yyyy)"></input>
           <input className={styles.logField} placeholder="Password" autoFocus="true"></input>
           <input className={styles.logField} placeholder="Confirm Password"></input>
           <button className={styles.logButton}>Sign Up</button>
       </form>
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
