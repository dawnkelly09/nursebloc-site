import Image from 'next/image'
import Link from 'next/link'
import NurseBlocLogo from '../../public/nursebloc-logo-vert.svg'
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
                <Image priority src={NurseBlocLogo} alt="Nursebloc" width="258" height="101" className="d-inline-block align-text-top" />
              </Link>
            </div>
        
            <div>
              <h4>Departments</h4>
              <ul>
                <li>Family Care</li>
                <li>Women's Health</li>
                <li>Bloodwork</li>
                <li>Pediatrics</li>
                <li>Injections</li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>Our Nurses</li>
                <li>Appointment</li>
                <li>Blog Post</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='footer-icons'>
              <Image src={TG} alt="Telegram" className='icons-column'/>
              <Image src={Insta} alt="Instagram" className='icons-column'/>
              <Image src={Twitter} alt="Twitter aka X" className='icons-column'/>
            </div>
        </div>
        <div className='purple-div'>
          Built with ❤️ by Build DAO 👷🏻‍♀️ ©️ 2024
        </div>


    </div>
  )
}

