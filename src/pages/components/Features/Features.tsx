import React from 'react';
import Image from 'next/image';

import style from './Features.module.scss';

// SVG
import svg from '../../../../images/svg/mobile_features.svg';

export default function Features() {

  return (
    <>
      <section className={style.features}>
        <div className={style.container}>
          
          <div className={style.hero}>
            <div className={style.header}>
              <h2>System features</h2>
              <h1>Powerful features</h1>
              <p>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
            </div>

            <div className={style.listItems}>
              <div className={style.row}>
                <div className={style.items}>
                  <h3>Erat sit</h3>
                  <p>Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.</p>
                </div>

                <div className={style.items}>
                  <h3>Ullamcorper arcu</h3>
                  <p>Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.</p>
                </div>
              </div>
              
              <div className={style.row}>
                <div className={style.items}>
                  <h3>Et pellentesque</h3>
                  <p>Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.</p>
                </div>

                <div className={style.items}>
                  <h3>Amet egestas</h3>
                  <p>Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. </p>
                </div>
              </div>
            </div>
          </div>

          <Image
            className={style.svg}
            src={svg}
            alt="Phone Mobile"
          />
        </div>
      </section>
    </>
  );
}
