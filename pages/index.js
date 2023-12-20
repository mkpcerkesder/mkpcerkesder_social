import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mustafakemalpaşa Çerkes Kültür Derneği</title>
        <meta name="description" content="Mustafakemalpaşa Çerkes Kültür Derneği" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="logo.png" alt="Mustafakemalpaşa Çerkes Kültür Derneği" />
      </header>
      <main>
        <h1>Bizi Takip Edin</h1>
        <div className="social-media-list">
          <a target="_blank" href="https://www.facebook.com/mkpcer.der">
            <img src="facebook.png" alt="facebook" />
              @mkpcer.der
          </a>
          <a target="_blank" href="https://www.instagram.com/mkpcerkeskulturdernegi">
            <img src="instagram.png" alt="instagram" />
              @mkpcerkeskulturdernegi
          </a>
        </div>
      </main>
    </>
  )
}
