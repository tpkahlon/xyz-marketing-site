import Link from "next/link";
import data from "../public/data.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        {data.fields.pages.map((page) => (
          <Link key={page.sys.id} href={`/page/${page.fields.slug}`}>
            {page.fields.name}
          </Link>
        ))}
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
