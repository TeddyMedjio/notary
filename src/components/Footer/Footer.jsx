import { Logo } from "@components/Logo/Logo";

const Footer = () => (
  <footer className="bg-brand-gray">
    <div className="py-12 flex flex-col justify-center">
      <Logo className="h-28" color="#758896" text="#758896" />
      <p className="mt-3 max-w-4xl mx-auto text-center text-white text-xl md:text-2xl">
        <span className="text-brand-light-gray">Adresse:</span> Étude de la
        notaire Riegelová Rue de Nidau 14 2502 Biel/Bienne{" "}
        <span className="text-brand-light-gray">Phone:</span> +41 (0) 32 322 43
        55 - <span className="text-brand-light-gray">Email:</span>{" "}
        info[@]notariat-biel.ch
      </p>
    </div>
    <div className="border-t border-brand-light-gray py-4">
      <p className="text-center text-slate-400">
        Copyright {new Date().getFullYear()} Notariat Riegelová | Website by{" "}
        <a
          href="https://medjio.me"
          className="text-white font-medium"
          target="_blank"
        >
          medjio
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
