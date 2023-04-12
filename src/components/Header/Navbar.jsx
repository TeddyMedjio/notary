import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import german from "../../../public/german-flag.svg";
import french from "../../../public/french-flag.svg";
import { Logo } from "@components/Logo/Logo";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex items-center justify-between jus py-8 container mx-auto">
      <Link href="/">
        <Logo className="h-10 md:h-14" />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex xl:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 px-8 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 rounded animate-pulse bg-brand-red"></span>
            <span className="block h-0.5 w-8 rounded animate-pulse bg-brand-red"></span>
            <span className="block h-0.5 w-8 rounded animate-pulse bg-brand-red"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 p-8 cursor-pointer"
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
              <Logo className="h-21 my-10" color="#ffffff" text="#ffffff" />
              <li className="text-white border-y border-brand-yellow uppercase w-full py-8">
                <Link href="/">Acceuil</Link>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <Link href="/qui-sommes-nous">Qui sommes-nous</Link>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <Link href="/nos-services">Nos Services</Link>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <Link href="/liens-utiles">Liens Utiles</Link>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <Link href="/la-presse">La Presse</Link>
              </li>
              <li className="text-white border-b border-brand-yellow uppercase w-full py-8">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="flex items-center mt-11">
                <Link href="/">
                  <Image
                    src={french}
                    className="w-9 mr-5"
                    alt="icon french flag"
                  />
                </Link>
                <Link href="/">
                  <Image src={german} className="w-9" alt="icon german flag" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-6 xl:flex">
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <Link
              href="/"
              className={router.pathname === "/" ? "text-brand-red" : ""}
            >
              Acceuil
            </Link>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <Link
              href="/qui-sommes-nous"
              className={
                router.pathname === "/qui-sommes-nous" ? "text-brand-red" : ""
              }
            >
              Qui sommes-nous
            </Link>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <Link
              href="/nos-services"
              className={
                router.pathname === "/nos-services" ? "text-brand-red" : ""
              }
            >
              Nos Services
            </Link>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <Link
              href="/liens-utiles"
              className={
                router.pathname === "/liens-utiles" ? "text-brand-red" : ""
              }
            >
              Liens Utiles
            </Link>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <Link
              href="/la-presse"
              className={
                router.pathname === "/la-presse" ? "text-brand-red" : ""
              }
            >
              La Presse
            </Link>
          </li>
          <li className="text-brand-gray text-[17px] transition-all duration-300 ease hover:text-brand-red">
            <Link
              href="/contact"
              className={router.pathname === "/contact" ? "text-brand-red" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={german} className="w-7" alt="icon french flag" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
