import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import prefixUrl from "@/helpers/prefixUrl";

export default function Home({ message }: { message: string }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div>{message}</div>
        <div>new text</div>
        <div>new text 2</div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const url = prefixUrl("/api/v1/hello", ctx);
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    return {
      props: {
        message: data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
