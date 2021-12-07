import type { NextPage } from "next";
import Head from "next/head";

import IndexPageView from "views/IndexPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>Bejamas</Head>
      <IndexPageView />
    </>
  );
};

export default Home;
