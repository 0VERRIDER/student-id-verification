import {useRef} from 'react'
import { useRouter } from 'next/router'
import Router from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import BannerIcon from '../../public/id_verification.png'
import Logo from '../../public/logo.svg'
import QRcode from 'qrcode'
import mongoose from 'mongoose'
import connectDB from '../../middleware/mongo';
import Users from '../../models/student-model';

export default function Home() {
  const router = useRouter()
  const { id } = router.query
  const canvas = useRef(null);

   fetch("http://student-id-verification.azurewebsites.net/api/getter",{
    method : "POST",
    body:JSON.stringify({
      "id" : id
    }),
    headers:{
      "Content-Type": "application/json"
    }
  }).then((result)=>{
    return result.json();
 }).then((myjson)=>{

  if(myjson['vstat']===true){
   Router.push("/verifying/"+myjson['id'])
  }
  else if(myjson['vreg']===true){
    Router.push("/login")

  }
 })

  try{
  // const canvas = document.getElementById("canvas");
  if (canvas){
      QRcode.toCanvas(canvas.current, window.location.href)}
        else{
            console.log("error")
        }
      }
      catch(err){
      }

  const formHandler = async (event)=>{
    
    event.preventDefault();
    const formData = new FormData()
    formData.append('file', event.target.file.files[0])
    formData.append('api_key', '437438877154349')
    formData.append('upload_preset', 'upload_frt')
    formData.append('public_id', id)


   

    await fetch("https://api.cloudinary.com/v1_1/overrider/upload",{
      method : 'POST',
      body : formData,
      
    }).then((result)=>{
     return result.json();
  }).then((myjson)=>{
    if(myjson['existing']==true)
{      
fetch('/api/setter',{
  method : "PUT",
  body:JSON.stringify(
    {
      id:id,
      img:  myjson['secure_url']
    }
  ),
  headers:{
    "Content-Type":"application/json"
  }
})
Router.push("/verifying/"+id)
}    
  }).catch(err=>{
    console.log(err)
  })
  
}
 return (
    <div className={styles.container}>

      <div className={styles.main}>
      <div className={styles.qr_link}>
        <canvas ref={canvas} id="canvas" height={148} width={148} style={{border: "0px", height: "148px", width: "148px"}} ></canvas>
       </div>
       <div className={styles.subText}>Scan to continue in Mobile device</div>
       <div className={styles.seperator}><hr></hr><span className={styles.orSeperator}>OR</span></div>
       <div className={styles.subText}>Upload your pancard</div>
       <form onSubmit={formHandler}>
            <input type="file" id="myFile" accept=".jpg, .png, .jpeg" name="file" required/>
        <input type="submit"/>
        </form>
        
     </div>
     <div className={styles.subMain}>
       <div className={styles.student_id}>
       <Image src={BannerIcon} alt="student id logo" layout="fixed" width={200} height={200} priority='true'></Image>
       </div>
       <div className={styles.companyLogo}>
       <Image src={Logo} alt="Company logo" layout="fixed" width={150} height={150}></Image>
       </div>
     </div>

    </div>
  )
}
