import "../css/style.css";
import "../css/icomoon/style.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <title>İKSAL</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
