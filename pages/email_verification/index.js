import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import verified from '../../public/email_sent.svg'
import Logo from '../../public/logo.svg'
import { useEffect,useState,useRef } from 'react'
function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }
export default function Home() {
const [count,setCount] =useState(30);
useInterval(() => {
    if(count==0){
        
        return;
    }
  setCount(count - 1);
}, 1000);
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
<div className={styles.subInstruction}>
Resend the mail <span id="count"> in {count} sec</span> 
</div>
    </div>
  )
}
