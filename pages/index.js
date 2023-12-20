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
          <a target="_blank" href="https://forms.gle/TuUgD1xuaHb6GcDWA">
            <img src="form.png" alt="Dilek ve Öneri Formu" />
              Dilek ve Öneri Formu
          </a>
        </div>
        <div className="social-media-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.92544470127564!2d28.38581829797479!3d40.03508571469377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b60d599cbf71e5%3A0xc7d1ba1bc36054db!2zTXVzdGFmYWtlbWFscGHFn2Egw4dlcmtlcyBLw7xsdMO8ciBEZXJuZcSfaQ!5e0!3m2!1sen!2str!4v1703109430837!5m2!1sen!2str" 
            height="450" 
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </main>
      <footer>
        <span>Copyright © 2023</span> <span>Mustafakemalpaşa Çerkes Kültür Derneği</span>
      </footer>
    </>
  )
}
