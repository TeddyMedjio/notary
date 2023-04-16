import Image from "next/image";
import association from "../../../public/img/logo_associaciation.png";
import code from "../../../public/img/code_civil.png";
import Link from "next/link";
import { Links } from "../Links";

export default function Liens() {
  return (
    <div className="container mx-auto px-5 lg:px-0 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex flex-col items-center">
          <Image src={association} height="" alt="logo" />
          <Link
            href="https://www.bernernotar.ch/pages/accueil/?oid=50&lang=fr"
            target="_blank"
            className="bg-yellow-300 w-full py-10 flex justify-center px-5"
          >
            <Links color="#2B3B45" />
            <h3 className="text-brand-gray font-bold text-lg lg:text-2xl ml-3 uppercase">
              {" "}
              Association des notaires bernois
            </h3>{" "}
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <Image src={code} height="" alt="logo" />
          <div className="bg-red-600 w-full py-4 space-y-4 px-5">
            <Link
              href="https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr"
              target="_blank"
              className=" flex  "
            >
              <Links color="#ffffff" />
              <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase">
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
              <h3 className="text-white font-bold text-lg lg:text-2xl ml-3 uppercase">
                {" "}
                Code suisse des obligations (CO)
              </h3>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
