import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import verified from '../../public/id_verification.png'
import Logo from '../../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
<div className={styles.logoHeader}>
<Image src={Logo} alt="Company logo" layout="fixed" width={120} height={120}></Image>
</div>
<div className={styles.verifying}>
    <div className={styles.HomeId}>
<Image src={verified} alt="Successful" layout="fixed" width={150} height={150}></Image>
    </div>
</div>
<div className={styles.homeText}>
Account verified and Logged in Successfully.
</div>
<div className={styles.subText}>
Welcome to our humble and secure family.
</div>
<button className={styles.logButtonRedirect}>Logout</button>
    </div>
  )
}
