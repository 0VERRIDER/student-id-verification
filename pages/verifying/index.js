import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import dummyId from '../../public/check_id.svg'
import Logo from '../../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
<div className={styles.logoHeader}>
<Image src={Logo} alt="Company logo" layout="fixed" width={120} height={120}></Image>
</div>
<div className={styles.verifying}>
<div className={styles.dummyId}>
  <Image src={dummyId} alt="Verification Id" width={200} height={200} />
</div>
<div className={styles.verifier}>
<svg
      xmlns="http://www.w3.org/2000/svg"
      width="229"
      height="100"
      fill="none"
      viewBox="0 0 339 110"
    >
      <g filter="url(#filter0_d_106_27)" shapeRendering="crispEdges">
        <rect
          width="309"
          height="80"
          x="15"
          y="10"
          fill="#C4C4C4"
          fillOpacity="0.5"
          rx="20"
        ></rect>
        <rect
          width="304"
          height="75"
          x="17.5"
          y="12.5"
          stroke="#000"
          strokeWidth="5"
          rx="17.5"
        ></rect>
      </g>
      <defs>
        <filter
          id="filter0_d_106_27"
          width="339"
          height="110"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="5"
            result="effect1_dropShadow_106_27"
          ></feMorphology>
          <feOffset dy="5"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_106_27"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_106_27"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
</div>
</div>
<div className={styles.mainInstruction}>
  Please Be Patient While verfying the data
</div>
<div className={styles.subText}>
Make sure that the document is not blurry
</div>
<div className={styles.subInstruction}>
It may take a while. Sit back and relax.
</div>
    </div>
  )
}
