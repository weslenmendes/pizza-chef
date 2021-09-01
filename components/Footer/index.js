import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <div className="block mb-4">
          Developed by <b>Weslen Mendes</b>
        </div>

        <div className="">
          <Link href="/github">
            <a className="inline-block mx-4">
              <img
                className={styles.imgLink}
                src="/github-logo.png"
                alt="Github"
              />
            </a>
          </Link>
          <Link href="/linkedin">
            <a className="inline-block mx-4">
              <img
                className={styles.imgLink}
                src="/linkedin-logo.png"
                alt="LinkedIn"
              />
            </a>
          </Link>
          <Link href="/facebook">
            <a className="inline-block mx-4">
              <img
                className={styles.imgLink}
                src="/facebook-logo.png"
                alt="Facebook"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
