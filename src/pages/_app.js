import Navbar from "@/components/Header/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className=" antialiased font-openSans">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
