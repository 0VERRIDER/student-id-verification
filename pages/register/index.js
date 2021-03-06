import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import BannerIcon from '../../public/id_verification.png'
import Logo from '../../public/logo.svg'
import { useState } from 'react'
import Router from 'next/router'


export default function Home() {
  const [info,setInfo] = useState();
  const signup = async (event)=>{
    event.preventDefault();
    await fetch("https://student-id-verification.azurewebsites.net/api/register",{
      method : 'POST',
      body : JSON.stringify({
        "name" : event.target.username.value,
    "email":event.target.email.value,
    "mobile": event.target.mobile.value,
    "Dob": event.target.dob.value,
    "password": event.target.password.value
      }),
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then((result)=>{
      return result.json()
    }).then(myjson=>{
      if(myjson['status']===true){
        Router.push("/verify/"+myjson["id"])
      }
      else if (myjson['status'] === false){
        if(myjson['error']=="E11000 duplicate key error collection: test.students. Failed _id or unique index constraint.")
        setInfo("Account Already exist")
        else
        setInfo("Something Went Wrong")
      }
    })
   
  }
  return (
    <div className={styles.container}>

      <div className={styles.main}>
       <form className={styles.loginForm} onSubmit={signup} >
           <h1 className={styles.logTitle}>Register</h1>
           <span className={styles.subText}>{info}</span>
           <input name="username" className={styles.logField} placeholder="Full Name as per your ID" autoFocus={true}></input>
           <input name="email" type="email" className={styles.logField} placeholder="Email"></input>
           <input name="mobile" type="tel" className={styles.logField} placeholder="Phone number" ></input>
           <input name="dob" className={styles.logField}  placeholder="Date of Birth (dd/mm/yyyy)"></input>
           <input name="password" type="password" className={styles.logField} placeholder="Password" ></input>
           <input name="cpass" type="password"className={styles.logField} placeholder="Confirm Password"></input>
           <button name="subBtn" className={styles.logButton} type="submit" >Sign Up</button>
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
