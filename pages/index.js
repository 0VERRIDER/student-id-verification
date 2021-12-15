import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Student ID Verification</title>
        <meta name="description" content="Student ID verification uing Azure form Validator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <button className={styles.loginBtn}>LOGIN</button>
        <button className={styles.registerBtn}>Register</button>
     </div>
     <div className={styles.subMain}>
       
     </div>

    </div>
  )
}
