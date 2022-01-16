import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import verified from '../../public/success.svg'
import Logo from '../../public/logo.svg'
import Router,{ useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function Home() {
    const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    fetch(publicRuntimeConfig.host_address+'api/getter',{
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
  if(myjson['id']==id && myjson['vstat']!=false){
    fetch(publicRuntimeConfig.host_address+'api/setter',{
        method : "PATCH",
        body:JSON.stringify(
          {
            id:id,
            "vregSet": "true"
          }
        ),
        headers:{
          "Content-Type":"application/json"
        }
      })

    }
    else{
      Router.push('/')
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
<Image src={verified} alt="Successful" layout="fixed" width={90} height={90}></Image>
    </div>
</div>
<div className={styles.mainText}>
Account Verified Successfully.
</div>
<div className={styles.subText}>
Continue in previous page or Login here
</div>
<Link href="/login" passHref={true}>
<button className={styles.logButtonRedirect}>Login</button>
</Link>
    </div>
  )
}
