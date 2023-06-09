import Head from "next/head";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import HeaderLiensUtiles from "@/components/LiensUtiles/HeaderLiensUtiles";
import Liens from "@/components/LiensUtiles/Liens";

export default function LiensUtiles() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Head>
        <title>Liens Utiles - Notariat Riegelová</title>
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
          className="mx-auto fixed top-0 left-0 right-0 h-[5px] bg-brand-red z-[10000] "
          style={{ scaleX }}
        />
        <HeaderLiensUtiles />
        <Liens />
      </main>
    </>
  );
}
