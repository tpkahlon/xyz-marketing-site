import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import data from "../../public/data.json";

export function getStaticPaths() {
  const paths = data.fields.pages.map(({ fields: { slug } }) => {
    return {
      params: {
        slug: [slug],
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const [page] = data.fields.pages.filter(({ fields: { slug } }) => {
    return slug === params.slug.join("");
  });
  return {
    props: {
      page,
    },
  };
}

export default function Home(props) {
  const pageName = props.page.fields.name;
  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      <main>
        <h1>{pageName}</h1>
        <div>{documentToReactComponents(props.page.fields.body)}</div>
      </main>
    </>
  );
}
