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
           <h1 className={styles.logTitle}>Login</h1>
           <input className={styles.logField} placeholder="Username or Email" autoFocus={true}></input>
           <input className={styles.logField} placeholder="Password"></input>
           <button className={styles.logButton}>Sign in</button>
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
