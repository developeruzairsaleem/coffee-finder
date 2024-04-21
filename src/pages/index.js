// import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "../components/banner"
import Head from "next/head"
import Image from "next/image"


import styles from "../styles/Home.module.css"
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const handleBannerBtnClick=()=>{
    console.log("banner button clicked")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
        
        <Banner handleOnClick={handleBannerBtnClick} buttonText={"View Stores Nearby"}/>
        <div className={styles.heroImage}>
          <Image src="/assets/hero-image.png" width={700} height={400} />
        </div>  
      
      </main>
    </div>
  );
}
