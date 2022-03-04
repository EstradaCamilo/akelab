import styles from "./index.module.scss";
import Head from "next/head";
import MainLayout from "components/MainLayout";

export default function Multiples() {
  return (
    <MainLayout>
      <Head>
        <title>Movies</title>
      </Head>
      <div className={styles.movies}>
        <h1>Movies</h1>
      </div>
    </MainLayout>
  );
}
