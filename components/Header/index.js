import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <img
            className="mx-auto"
            src="/logo-pizza-chef.png"
            alt="Pizza Chef"
          />
        </div>
      </div>
      <div className={styles.menu}>
        <Link href="/about">
          <a className={styles.item}>Sobre</a>
        </Link>
        <Link href="/contact">
          <a className={styles.item}>Contato</a>
        </Link>
        <Link href="/search">
          <a className={styles.item}>Pesquisa</a>
        </Link>
      </div>
    </>
  );
};

export default Header;
