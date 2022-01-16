import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import verified from '../../public/success.svg'
import Logo from '../../public/logo.svg'
import Link from 'next/link'

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
Account Created Successfully.
</div>
<div className={styles.subText}>
Welcome to our humble family
</div>
<Link href="/login" passHref={true}>
<button className={styles.logButtonRedirect}>Login</button>
</Link>    </div>
  )
}
