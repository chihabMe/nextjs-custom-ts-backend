import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";

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
  const response = await fetch("http://localhost:3000/api/v1/hello");
  const data = await response.json();
  return {
    props: {
      message: data,
    },
  };
};
