import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';


export default function Home() {
  return (
    <div className='{styles.container}'>
      <Head>
        <title>C7 Studio</title>
        <meta name='description' content='generated by create-ivan-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero/>
    </div>
  )
}