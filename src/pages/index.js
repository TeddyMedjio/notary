import Head from "next/head";
import Citation from "@/components/Citation/Citation";
import Footer from "@components/Footer/Footer";
import Header from "@/components/Header/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Notariat Riegelová – Das freie unabhängige Berufsnotariat</title>
        <meta
          name="description"
          content="Das freie unabhängige Berufsnotariat"
        />
        <meta
          name="keywords"
          content="Notariat Riegelová Biel, L'étude de la notaire Riegelová"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Citation />
        <Footer />
      </main>
    </>
  );
}
