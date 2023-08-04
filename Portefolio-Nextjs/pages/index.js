import Typewriter from 'typewriter-effect';
import { introdata, meta } from '../../content_option';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {  
return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title> {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <section id="home" className={styles.home}>
        <div className={styles.intro_sec}>
          <div
            className={styles.h_bg_image}
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className={styles.text}>
            <div className={styles.align_self_center}>
              <div className={styles.intro}>
                <h2 className={styles.mb_1x}>{introdata.title}</h2>
                <h1 className={styles.fluidz_48}>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className={styles.mb_1x}>{introdata.description}</p>
                <div className={styles.intro_btn_action}>
                  <Link href="/portfolio">
                    <a className={styles.text_2}>
                      <div id="button_p" className={styles.ac_btn}>
                        Mon Portefolio
                        <div className={styles.ring_one}></div>
                        <div className={styles.ring_two}></div>
                        <div className={styles.ring_three}></div>
                      </div>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <div id="button_h" className={styles.ac_btn}>
                        Contactez moi
                        <div className={styles.ring_one}></div>
                        <div className={styles.ring_two}></div>
                        <div className={styles.ring_three}></div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
