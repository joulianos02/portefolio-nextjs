import { useState } from "react";
import Link from "next/link";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../themetoggle";
import styles from './headermain.module.css';

const Headermain = () => {
  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className={styles["fixed-top"]} className={styles.site__header}>
        <div className={styles["d-flex"]} className={styles["align-items-center"]} className={styles["justify-content-between"]}>
          <Link href="/">
            <a className={styles.navbar_brand} className={styles.nav_ac}>
              {logotext}
            </a>
          </Link>
          <div className={styles["d-flex"]} className={styles["align-items-center"]}>
            <Themetoggle />
            <button className={styles.menu__button} className={styles.nav_ac} onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`${styles.site__navigation} ${!isActive ? styles.menu__opend : ""}`}>
          <div className={styles.bg__menu}>
            <div className={styles.menu__wrapper}>
              <div className={styles.menu__container}>
                <ul className={styles.the_menu}>
                  <li className={styles.menu_item}>
                    <Link href="/">
                      <a className={styles.my_3} onClick={handleToggle}>
                        Page d'acceuil
                      </a>
                    </Link>
                  </li>
                  <li className={styles.menu_item}>
                    <Link href="/portfolio">
                      <a className={styles.my_3} onClick={handleToggle}>
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li className={styles.menu_item}>
                    <Link href="/about">
                      <a className={styles.my_3} onClick={handleToggle}>
                        À propos
                      </a>
                    </Link>
                  </li>
                  <li className={styles.menu_item}>
                    <Link href="/contact">
                      <a className={styles.my_3} onClick={handleToggle}>
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${styles.menu_footer} ${styles.d_flex} ${styles.flex_column} ${styles.flex_md_row} ${styles["justify-content-between"]} ${styles.align_items_md_center} ${styles.position_absolute} ${styles.w_100} ${styles.p_3}`}>
            <div className={styles.d_flex}>
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className={styles.copyright}>Copyright Genix Web Services {logotext}</p>
          </div>
        </div>
      </header>
      <div className={styles.br_top}></div>
      <div className={styles.br_bottom}></div>
      <div className={styles.br_left}></div>
      <div className={styles.br_right}></div>
    </>
  );
};

export default Headermain;
