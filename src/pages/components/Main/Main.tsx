import React from 'react';
import Image from 'next/image';

import style from './Main.module.scss';

// Components 
import Header from '../Header/Header';
import Button from '../Button/Button';

// Images
import profile from '../../../../images/jpg/profile.jpeg'
import worker from '../../../../images/png/worker_solar.png'

export default function Main() {

  return (
    <>
      <section className={style.main}>

        <Header />

        <div className={style.container}>
          <div className={style.content}>
            <div className={style.message}>
              <h1>Get the Sun to <br /> Power Your Home</h1>
              <p>
                Viverra viverra nibh enim et aliquam, enim. Tempor, sit <br /> mus viverra
                orci dui consequat turpis scelerisque.
              </p>

              <Button 
              text="Request a Quote" 
              width="auto" 
              color="purple" 
            />
            </div>

            <div className={style.testimonial}>
              <p>
                “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui <br />
                consequat turpis scelerisque faucibus.”
              </p>

              <div className={style.testimonialAuthor}>
                <Image
                  src={profile}
                  alt="Rwanda Melfor"
                  className={style.authorImage}
                />

                <div>
                  <span className={style.authorName}>Rwanda Melflor</span>
                  <br />
                  <span className={style.authorCompany}>zerowaste.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className={style.headerImage}>
            <Image
              src={worker}
              alt="Worker installing solar panels"
              className={style.image}
            />
          </div>
        </div>

      </section>
    </>
  );
}
