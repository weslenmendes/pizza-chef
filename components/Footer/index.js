import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.text}>
        <div className="block mb-4">
          Developed by <b>Weslen Mendes</b>
        </div>

        <div>
          <Link href="https://www.github.com/weslenmendes">
            <a className="inline-block mx-4" target="_blank">
              <img
                className={styles.imgLink}
                src="/github-logo.png"
                alt="Github"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/weslen-mendes">
            <a className="inline-block mx-4" target="_blank">
              <img
                className={styles.imgLink}
                src="/linkedin-logo.png"
                alt="LinkedIn"
              />
            </a>
          </Link>
          <Link href="https://www.facebook.com/WeslenMendes7">
            <a className="inline-block mx-4" target="_blank">
              <img
                className={styles.imgLink}
                src="/facebook-logo.png"
                alt="Facebook"
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
