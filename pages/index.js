import Head from "next/head";
import data from "../public/data.json";

export default function Home() {
  const siteTitle = data.fields.title;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <h1>{siteTitle}</h1>
      </main>
    </>
  );
}
