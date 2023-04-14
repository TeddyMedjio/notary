import Head from "next/head";
import { motion, useScroll, useSpring } from "framer-motion";
import Citation from "@/components/Citation/Citation";
import Footer from "@components/Footer/Footer";
import Slider from "@/components/Swiper/Slider";
import Etude from "@/components/Etude/Etude";
import Formation from "@/components/Formation/Formation";
import Navbar from "@/components/Header/Navbar";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
        <Navbar />
        <motion.div
          className="mx-auto fixed top-0 left-0 right-0 h-[5px] bg-brand-red z-50 "
          style={{ scaleX }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Slider />
          <Etude />
          <Formation />
          <Citation />
          <Footer />
        </motion.div>
      </main>
    </>
  );
}
