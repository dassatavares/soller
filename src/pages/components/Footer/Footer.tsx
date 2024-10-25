import React from 'react';
import Image from 'next/image';

import style from './Footer.module.scss';

// Images
import logo from '../../../../images/svg/logo_soller.svg'

export default function Footer() {

  return (
    <>
      <footer className={style.footer}>
        <div className={style.group}>
          <div className={style.logo}>
            <Image
              src={logo}
              alt="Soller Logo"
            />
          </div>
          
          <div className={style.copyright}>
            <p>© 2023 Soller, Inc. All rights reserved.</p>
          </div>
        </div>
        
        <div className={style.links}>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
