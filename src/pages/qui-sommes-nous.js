import Head from "next/head";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/SommesNous/Header";
import Notaires from "@/components/SommesNous/Notaires/Notaires";

export default function QuiSommesNous() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
        <motion.div
          className="mx-auto fixed top-0 left-0 right-0 h-[5px] bg-brand-red z-50"
          style={{ scaleX }}
        />
        <Header />
        <Notaires />
      </main>
    </>
  );
}
