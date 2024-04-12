import Image from 'next/image'
import Link from 'next/link'
import NurseBlocLogo from '../../public/nursebloc-logo-vert.svg'
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
        
            <div>Departments link list</div>
            <div>Quick links list</div>
            <div>Socials icons list</div>
        </div>
        <div className='purple-div'></div>


    </div>
  )
}

