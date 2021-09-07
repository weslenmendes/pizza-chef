import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className="container mx-auto">
          <Link href="/">
            <a className="mx-auto">
              <img
                className="mx-auto"
                src="/logo-pizza-chef.png"
                alt="Pizza Chef"
              />
            </a>
          </Link>
        </div>
      </div>
      <nav className={styles.menu}>
        <Link href="/about">
          <a className={styles.item}>Sobre</a>
        </Link>
        <Link href="/contact">
          <a className={styles.item}>Contato</a>
        </Link>
        <Link href="/search">
          <a className={styles.item}>Pesquisa</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
