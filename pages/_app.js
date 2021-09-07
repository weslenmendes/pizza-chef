import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";

import "../css/styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
