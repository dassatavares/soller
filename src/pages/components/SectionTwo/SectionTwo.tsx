import React from 'react';
import Image from 'next/image';

import style from './SectionTwo.module.scss';

// SVG
import svg from '../../../../images/svg/screen_desktop.svg';

export default function SectionTwo() {

  return (
    <>
      <section className={style.sectiontwo}>
        <div className={style.hero}>
          <h2>No more waste</h2>
          <h1>Pick the Sun</h1>
          <p>Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar <br /> purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
        </div>

        <Image
          className={style.svg}
          src={svg}
          alt="My SVG"
          width={1520}
          height={854}
        />

        {/* Background Circle Code (another option instead a PNG background) */}
        {/*
        <div className={style.circleBackground}>
          <div className={style.circleOrange}></div>
          <div className={style.circlePurple}></div>
        </div>
        */}
      </section>
    </>
  );
}
