import Image from 'next/image';
import styles from './app.module.css';
import nurseheart from '../../public/nurse-heart.svg'

const imageStyle = {
  borderRadius: '12px',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.leftCol}>
          <h1>Medical care simplified for everyone</h1>
          <p>Personalized care delivered in your home by nurses in your community</p>
          <div className={styles.waitlistBox}>
            <h2>Join the Waitlist</h2>
            <div>
              <button className={styles.button}>Nurses</button>
              <button className={styles.buttonPurple}>Patients</button>
            </div>
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.heroImage}>
            <Image 
              src={nurseheart} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              alt="smiling nurse with hands in a heart shape" 
              style={imageStyle}
            />
          </div>
        </div>
      </section>
      <section className={styles.featuresSection}>

      </section>
      
    </main>
  );
}
