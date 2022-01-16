import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import BannerIcon from '../../public/id_verification.png'
import Logo from '../../public/logo.svg'
import Router from 'next/router'
import { useState } from 'react'
import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function Home() {
const [info,setInfo] = useState("");
  const login = async (event)=>{
    event.preventDefault();
    await fetch("https://student-id-verification.azurewebsites.net/api/login",{
      method: "POST",
      body:JSON.stringify({
        email:event.target.email.value,
        password:event.target.password.value
      }),
      headers:{
        "Content-Type": "application/json"
      }
    }).then(result=>{
      return result.json()
    }).then(myjson=>{
      if(myjson['loggedin']===true){
        localStorage.setItem('token', myjson['token']);
        localStorage.setItem('loggedin', true);
        Router.push("/Home")
      }
      else if(myjson['error']=="user"){
        setInfo("Username / password is incorrect!")
      }
      else if(myjson['error']=="verification"){
        setInfo("ID didn't verified yet. Redirecting shortly.")
        setTimeout(() => {
          Router.push(myjson['page'])
        }, 2000);
      }
      else if(myjson['error']=="email_verification"){
        setInfo("Email didn't verified yet. Redirecting shortly.")
        setTimeout(() => {
          Router.push(myjson['page'])
        }, 2000);
      }
    })
  }
  return (
    <div className={styles.container}>

      <div className={styles.main}>
       <form className={styles.loginForm} onSubmit={login}>
           <h1 className={styles.logTitle}>Login</h1>
           <span className={styles.subText}>{info}</span>
           <input name="email" className={styles.logField} placeholder="Email" autoFocus={true} type="email" required></input>
           <input name="password" className={styles.logField} placeholder="Password" type="password" required></input>
           <button className={styles.logButton} type="submit">Sign in</button>
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
