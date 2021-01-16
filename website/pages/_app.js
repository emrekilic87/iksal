import "../css/style.css";
import "../css/icomoon/style.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <title>İKSAL</title> 
      </Head>
      <Component {...pageProps} />
    </div>
  );
}