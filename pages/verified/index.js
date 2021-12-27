import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import verified from '../../public/success.svg'
import Logo from '../../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
<div className={styles.logoHeader}>
<Image src={Logo} alt="Company logo" layout="fixed" width={120} height={120}></Image>
</div>
<div className={styles.verifying}>
    <div className={styles.success}>
<Image src={verified} alt="Successful" layout="fixed" width={90} height={90}></Image>
    </div>
</div>
<div className={styles.mainText}>
Student ID Verified Successfully
</div>
<div className={styles.subInstruction}>
You will be redirected shortly
</div>
    </div>
  )
}
