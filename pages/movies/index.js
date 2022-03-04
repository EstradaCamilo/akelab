import styles from "./index.module.scss";
import Head from "next/head";
import MainLayout from "components/MainLayout";
import CardMovie from "components/CardMovie";

export default function Multiples() {
  return (
    <MainLayout>
      <Head>
        <title>Movies</title>
      </Head>
      <div className={styles.movies}>
        <h1>Movies</h1>
        <div className={styles.collectionMovies}>
          <CardMovie data="1" />
          <CardMovie data="2" />
          <CardMovie data="3" />
          <CardMovie data="4" />
          <CardMovie data="5" />
        </div>
      </div>
    </MainLayout>
  );
}
