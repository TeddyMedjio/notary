import Image from "next/image";
import association from "../../../public/img/logo_associaciation.png";
import code from "../../../public/img/code_civil.png";
import canton from "../../../public/img/canton.jpg";
import Link from "next/link";
import { Links } from "../Links";

export default function Liens() {
  return (
    <div className="container mx-auto px-5 lg:px-0 py-20">
      <div className="flex flex-col lg:flex-row justify-center space-y-5 lg:space-y-0 lg:space-x-5">
        <Link
          href="https://www.bernernotar.ch/pages/accueil/?oid=50&lang=fr"
          target="_blank"
          className="flex flex-col items-center bg-[#005696]"
        >
          <Image src={association} height="auto" alt="logo" />
          <div className="bg-yellow-300 w-full py-10 flex justify-center px-5">
            <Links color="#2B3B45" />
            <h3 className="text-brand-gray font-bold text-lg lg:text-2xl ml-3 uppercase">
              {" "}
              Association des notaires bernois
            </h3>{" "}
          </div>
        </Link>

        <div className="flex flex-col items-center bg-[#F6F6F6]">
          <Image src={code} height="" alt="logo" />
          <div className="bg-red-600 w-full py-4 space-y-4 px-5">
            <Link
              href="https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr"
              target="_blank"
              className=" flex  "
            >
              <Links color="#ffffff" />
              <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase hover:text-brand-gray">
                {" "}
                Code civil suisse (CC)
              </h3>{" "}
            </Link>
            <Link
              href="https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr"
              target="_blank"
              className=" flex  "
            >
              <Links color="#ffffff" />
              <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase hover:text-brand-gray">
                {" "}
                Code suisse des obligations (CO)
              </h3>{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 bg-slate-50">
        <Image
          src={canton}
          height=""
          alt="logo"
          className=" mix-blend-multiply py-5 pl-5"
        />
        <div className="bg-black w-full py-7 space-y-7 px-5">
          <Link
            href="https://www.belex.sites.be.ch/app/fr/texts_of_law/169.11/versions/1060"
            target="_blank"
            className=" flex  "
          >
            <Links color="#ffffff" />
            <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase hover:text-brand-yellow">
              {" "}
              Loi sur le notariat (LN)
            </h3>{" "}
          </Link>

          <Link
            href="https://www.belex.sites.be.ch/app/fr/texts_of_law/169.112/versions/1061"
            target="_blank"
            className=" flex  "
          >
            <Links color="#ffffff" />
            <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase hover:text-brand-yellow">
              {" "}
              Ordonnance sur le notariat (ON)
            </h3>{" "}
          </Link>

          <Link
            href="https://www.belex.sites.be.ch/app/fr/texts_of_law/169.81/versions/1063"
            target="_blank"
            className=" flex  "
          >
            <Links color="#ffffff" />
            <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase hover:text-brand-yellow">
              {" "}
              Ordonnance sur les émoluments des notaires (OEmN)
            </h3>{" "}
          </Link>

          <Link
            href="https://www.belex.sites.be.ch/app/fr/texts_of_law/215.326.2/versions/894"
            target="_blank"
            className=" flex  "
          >
            <Links color="#ffffff" />
            <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase hover:text-brand-yellow">
              {" "}
              Loi concernant les impôts sur les mutations (LIMu)
            </h3>{" "}
          </Link>

          <Link
            href="https://www.belex.sites.be.ch/app/fr/texts_of_law/661.11/versions/1040"
            target="_blank"
            className=" flex  "
          >
            <Links color="#ffffff" />
            <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase hover:text-brand-yellow">
              {" "}
              Droit sur les impôts (LI)
            </h3>{" "}
          </Link>

          <Link
            href="https://www.belex.sites.be.ch/app/fr/texts_of_law/662.1/versions/195"
            target="_blank"
            className=" flex  "
          >
            <Links color="#ffffff" />
            <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase hover:text-brand-yellow">
              {" "}
              Loi concernant l&apos;impôt sur les successions et donations
              (LISD)
            </h3>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
