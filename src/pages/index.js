import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import myImg from '@/assets/How-to-draw-a-cartoon-tree-20.webp';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hadeel Page</title>
      </Head>
      <Image src={myImg} alt=''/>
      <div className={styles.main}>Hello World!!</div>
    </>
  );
}
