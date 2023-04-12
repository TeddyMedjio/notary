import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import german from "../../../public/german-flag.svg";
import french from "../../../public/french-flag.svg";
import { Logo } from "@components/Logo/Logo";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex items-center justify-between py-8 container mx-auto">
      <a href="/">
        <Logo className="h-10 md:h-14" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 px-8"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 rounded animate-pulse bg-brand-red"></span>
            <span className="block h-0.5 w-8 rounded animate-pulse bg-brand-red"></span>
            <span className="block h-0.5 w-8 rounded animate-pulse bg-brand-red"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 p-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between text-center min-h-[250px] w-full">
              <li className="text-white border-y border-brand-yellow uppercase w-full py-8">
                <a href="/">Acceuil</a>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <a href="/qui-sommes-nous">Qui sommes-nous</a>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <a href="/nos-services">Nos Services</a>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <a href="/liens-utiles">Liens Utiles</a>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <a href="/la-presse">La Presse</a>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <a href="/contact">Contact</a>
              </li>
              <li className="flex items-center mt-11">
                <a href="/">
                  <Image
                    src={french}
                    className="w-9 mr-5"
                    alt="icon french flag"
                  />
                </a>
                <a href="/">
                  <Image src={german} className="w-9" alt="icon german flag" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <a
              href="/"
              className={router.pathname === "/" ? "text-brand-red" : ""}
            >
              Acceuil
            </a>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <a
              href="/qui-sommes-nous"
              className={
                router.pathname === "/qui-sommes-nous" ? "text-brand-red" : ""
              }
            >
              Qui sommes-nous
            </a>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <a
              href="/nos-services"
              className={
                router.pathname === "/nos-services" ? "text-brand-red" : ""
              }
            >
              Nos Services
            </a>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <a
              href="/liens-utiles"
              className={
                router.pathname === "/liens-utiles" ? "text-brand-red" : ""
              }
            >
              Liens Utiles
            </a>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <a
              href="/la-presse"
              className={
                router.pathname === "/la-presse" ? "text-brand-red" : ""
              }
            >
              La Presse
            </a>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <a
              href="/contact"
              className={router.pathname === "/contact" ? "text-brand-red" : ""}
            >
              Contact
            </a>
          </li>
          <li>
            <a href="/">
              <Image src={german} className="w-7" alt="icon french flag" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
