import Head from "next/head";
import Citation from "@/components/Citation/Citation";
import Footer from "@components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Notariat Riegelová – Das freie unabhängige Berufsnotariat</title>
        <meta
          name="description"
          content="Das freie unabhängige Berufsnotariat"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Citation />
        <Footer />
      </main>
    </>
  );
}
