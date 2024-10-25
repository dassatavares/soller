import React from 'react';
import Image from 'next/image';

// Components 
import style from './LastSection.module.scss';
import Button from '../Button/Button';

// SVG
import svg from '../../../../images/svg/macbook.svg';

export default function LastSection() {

  return (
    <>
      <section className={style.sectiontwo}>
        <div className={style.hero}>
          <div className='flex flex-col gap-5'>
            <h2>Get the Sun to power your home</h2>
            <h1>All the power that you need for <br /> your house is now available</h1>
          </div>

          <div className='flex flex-col gap-5'>
            <Button button={{ text: 'Request a Quote', width: 'auto', color: 'yellow' }} />
            <p>Egestas fringilla aliquam leo</p>
          </div>
        </div>

        <div className={style.image}>
          <Image
            className={style.svg}
            src={svg}
            alt="Macbook"
            width={1008}
            height={555}
          />
        </div>
      </section>
    </>
  );
}
