import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className=" antialiased font-openSans">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
