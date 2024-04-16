import Image from 'next/image'
import Link from 'next/link'
import NurseBlockVert from '../../public/nursebloc-logo-vert.svg'
import TG from '../../public/tg-purple.svg'
import Insta from '../../public/insta-purple.svg'
import Twitter from '../../public/twitter-purple.svg'
import styles from '../app/globals.css'

export default function Footer(){
  return (
    <div>
        <div className='purple-div'></div>
        <div className='footer-body'>
            <div>
              <Link href="/" passHref legacyBehavior>
                <Image priority src={NurseBlockVert} alt="Nursebloc" height="160"/>
              </Link>
            </div>
        
            <div>
              <h6>Departments</h6>
              <ul className='footer-links'>
                <li>Family Care</li>
                <li>Women's Health</li>
                <li>Bloodwork</li>
                <li>Pediatrics</li>
                <li>Injections</li>
              </ul>
            </div>
            <div>
              <h6>Quick Links</h6>
              <ul className='footer-links'>
                <li>Our Nurses</li>
                <li>Appointment</li>
                <li>Blog Post</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='footer-icons'>
              <Image src={TG} alt="Telegram" className='icons-column' height="30"/>
              <Image src={Insta} alt="Instagram" className='icons-column'height="30"/>
              <Image src={Twitter} alt="Twitter aka X" className='icons-column'height="30"/>
            </div>
        </div>
        <div className='purple-div'>
          Built with ❤️ by Build DAO 👷🏻‍♀️ ©️ 2024
        </div>


    </div>
  )
}

