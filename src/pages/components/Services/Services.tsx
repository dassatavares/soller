import React from 'react';
import Image from 'next/image';

import style from './Services.module.scss';

// SVG
import svg from '../../../../images/svg/mobile_services.svg';

export default function Services() {

  return (
    <>
      <section className={style.services}>
        <div className={style.container}>
          <Image
            className={style.svg}
            src={svg}
            alt="Phone Mobile"
          />

          <div className={style.hero}>
            <div className={style.header}>
              <h2>Services</h2>
              <h1>Personalized services</h1>
              <p>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
            </div>

            <div className={style.listItems}>
              <div className={style.row}>
                <div className={style.items}>
                  <h3>Et mauris</h3>
                  <p>Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.</p>
                </div>

                <div className={style.items}>
                  <h3>Eget sit</h3>
                  <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                </div>
              </div>
              
              <div className={style.row}>
                <div className={style.items}>
                  <h3>Imperdiet pellentesque</h3>
                  <p>Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.</p>
                </div>

                <div className={style.items}>
                  <h3>Non libero</h3>
                  <p>Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
