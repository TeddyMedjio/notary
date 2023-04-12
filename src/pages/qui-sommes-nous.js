import Head from "next/head";
import Navbar from "@/components/Header/Navbar";

export default function QuiSommesNous() {
  return (
    <>
      <Head>
        <title>Qui sommes nous - Notariat Riegelová</title>
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
        <Navbar />
      </main>
    </>
  );
}
