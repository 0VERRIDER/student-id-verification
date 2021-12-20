import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../public/id_verification.png'

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
       <div className={styles.student_id} width={100} height={100} >
       <Image src={Logo} alt="student id logo" className={styles.studentId} layout='fill' ></Image>
       </div>
     </div>

    </div>
  )
}
