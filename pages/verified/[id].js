import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import verified from '../../public/success.svg'
import Logo from '../../public/logo.svg'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { useEffect } from 'react'
export default function Home() {
  const router = useRouter()
  const { id } = router.query


  useEffect(() => {
    fetch('/api/getter',{
      method: "POST",
      body:JSON.stringify(
        {
          id: id
        }
      ),
      headers:{
        "Content-Type": "application/json"
      }
    }).then(results=>{
      return results.json()
    }).then(myjson=>{
      if(myjson['vreg']===false && myjson['vstat']===true){
        setTimeout(()=>{
          Router.push("/email_verification/"+id)
        },5000)
    }
    else{
      Router.push("/")
    }
    })
  }, [id])
  
  
  return (
    <div className={styles.container}>
<div className={styles.logoHeader}>
<Image src={Logo} alt="Company logo" layout="fixed" width={120} height={120}></Image>
</div>
<div className={styles.verifying}>
    <div className={styles.success}>
<Image src={verified} alt="Successfull" layout="fixed" width={90} height={90}></Image>
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
