import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import verified from '../../public/email_sent.svg'
import Logo from '../../public/logo.svg'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { useEffect } from 'react'

// import { useEffect,useState,useRef } from 'react'
// function useInterval(callback, delay) {
//     const savedCallback = useRef();
  
//     // Remember the latest callback.
//     useEffect(() => {
//       savedCallback.current = callback;
//     }, [callback]);
  
//     // Set up the interval.
//     useEffect(() => {
//       let id = setInterval(() => {
//         savedCallback.current();
//       }, delay);
//       return () => clearInterval(id);
//     }, [delay]);
//   }
export default function Home() {
  const router = useRouter()
  const { id } = router.query

// const [count,setCount] =useState(30);
// useInterval(() => {
//     if(count==0){
        
//         return;
//     }
//   setCount(count - 1);
// }, 1000);
useEffect(() => {
  fetch('https://student-id-verification.azurewebsites.net/api/getter',{
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
  sendmail(myjson['id'],myjson['email'],myjson['id'],myjson['name']);
  setTimeout(()=>{
    Router.push("/email_verification/"+id)
  },5000)
}
else if(myjson['vreg']===false && myjson['vstat']===false){
  Router.push("/")
}
else{
  Router.push("/account_done")

}
})

}, [id])


const sendmail = async (id,email,authCode,name) =>{
  await fetch("https://prod-16.northcentralus.logic.azure.com:443/workflows/cbeadc2976de4c929f6ffbd9843f0ba0/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WOyYPxeSt-rWU08jp8a73D_I6TIVVUp6kAUGLGHLu50",{
    method : "POST",
    body: JSON.stringify({
      id: id,
      email:email,
      authCode:authCode,
      name:name
    }),
    headers:{
      "Content-Type": "application/json"
    }
  })
}
const checkStat= () => {
  fetch('https://student-id-verification.azurewebsites.net/api/getter',{
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
    if(myjson['vreg']===true){
      Router.push('/account_done')
    }   
  
  })
};
checkStat();
  return (
    <div className={styles.container}>
<div className={styles.logoHeader}>
<Image src={Logo} alt="Company logo" layout="fixed" width={120} height={120}></Image>
</div>
<div className={styles.verifying}>
    <div className={styles.success}>
<Image src={verified} alt="Successful" layout="fixed" width={150} height={150}></Image>
    </div>
</div>
<div className={styles.mainText}>
A verification link has been sent to your Email.</div>
<div className={styles.subText}>
Check spam mail list if you cant find it.
</div>
{/* <div className={styles.subInstruction}>
Resend the mail <span id="count"> in {count} sec</span> 
</div> */}
<div className={styles.subInstruction}>
Refresh page after verification
</div>
    </div>
  )
}
