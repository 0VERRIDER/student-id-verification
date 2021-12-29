import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import BannerIcon from '../../public/id_verification.png'
import Logo from '../../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.main}>
      <div className={styles.qr_link}>
        
       {/* <Image src={Qr} alt="QrCode" layout="fixed" width={100} height={100}></Image> */}
       </div>
       <div className={styles.subText}>Scan to continue in Mobile device</div>
       <div className={styles.seperator}><hr></hr><span className={styles.orSeperator}>OR</span></div>
       <form action="/action_page.php">
            <input type="file" id="myFile" name="filename"/>
        <input type="submit"/>
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
