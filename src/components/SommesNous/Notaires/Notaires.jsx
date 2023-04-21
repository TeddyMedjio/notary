import Image from "next/image";
import Link from "next/link";
import fleche from "../../../../public/img/arrow_right.svg";

export default function Notaires() {
  return (
    <div className="background-motif">
      <div className="container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row items-center justify-center flex-wrap gap-5 py-28 ">
        {/* Barbora */}
        <Link
          href="/barbora-regielova"
          className="barbora rounded-md flex items-end min-h-[631px] max-w-[628px] md:min-w-[628px] group "
        >
          <div className="py-10 bg-gradient-to-t from-brand-red w-full px-5 rounded-b-lg lg:opacity-0 transition-all duration-300 ease-in-out  group-hover:opacity-100 lg:group-hover:translate-y-1">
            <div className=" flex items-center pt-20 ">
              <h2 className="text-5xl text-white font-heading mr-5">
                Barbora <br className="md:hidden" /> Riegelová
              </h2>
              <div className="relative">
                <Image src={fleche} height="auto" alt="icon fleche" />
                <span className="bg-yellow-500 h-12 w-12 rounded-full absolute top-0 animate-ping lg:hidden"></span>
              </div>
            </div>
            <p className=" text-2xl text-white mt-3 border-brand-yellow border-b">
              Master of law, notaire du canton de Berne
            </p>
            <p className="text-brand-yellow text-xl ">info@notariat-biel.ch</p>
          </div>
        </Link>

        {/* regula */}
        <Link
          href="/contact"
          className="regula rounded-md flex items-end min-h-[631px] max-w-[628px] md:min-w-[628px] group "
        >
          <div className="py-10 bg-gradient-to-t from-brand-red w-full px-5 rounded-b-lg lg:opacity-0 transition-all duration-300 ease-in-out  group-hover:opacity-100 lg:group-hover:translate-y-1">
            <div className=" flex items-center pt-20 ">
              <h2 className="text-5xl text-white font-heading mr-5">
                Regula <br className="md:hidden" /> Stettler
              </h2>
              <div className="relative">
                <Image src={fleche} height="auto" alt="icon fleche" />
                <span className="bg-yellow-500 h-12 w-12 rounded-full absolute top-0 animate-ping lg:hidden"></span>
              </div>
            </div>
            <p className=" text-2xl text-white mt-3 border-brand-yellow border-b">
              Employée de notaire certifiée
            </p>
            <p className="text-brand-yellow text-xl ">
              regula.stettler@notariat-biel.ch
            </p>
          </div>
        </Link>

        {/* Maria */}
        <Link
          href="/contact"
          className="maria rounded-md flex items-end min-h-[631px] max-w-[628px] md:min-w-[628px] group "
        >
          <div className="py-10 bg-gradient-to-t from-brand-red w-full px-5 rounded-b-lg lg:opacity-0 transition-all duration-300 ease-in-out  group-hover:opacity-100 lg:group-hover:translate-y-1">
            <div className=" flex items-center pt-20 ">
              <h2 className="text-5xl text-white font-heading mr-5">
                Maria <br className="md:hidden" /> Righenzi
              </h2>
              <div className="relative">
                <Image src={fleche} height="auto" alt="icon fleche" />
                <span className="bg-yellow-500 h-12 w-12 rounded-full absolute top-0 animate-ping lg:hidden"></span>
              </div>
            </div>
            <p className=" text-2xl text-white mt-3 border-brand-yellow border-b">
              Employée de notaire certifiée
            </p>
            <p className="text-brand-yellow text-xl ">
              maria.righenzi@notariat-biel.ch
            </p>
          </div>
        </Link>

        {/* Carla */}
        <Link
          href="/contact"
          className="carla rounded-md flex items-end min-h-[631px] max-w-[628px] md:min-w-[628px] group "
        >
          <div className="py-10 bg-gradient-to-t from-brand-red w-full px-5 rounded-b-lg lg:opacity-0 transition-all duration-300 ease-in-out  group-hover:opacity-100 lg:group-hover:translate-y-1">
            <div className=" flex items-center pt-20 ">
              <h2 className="text-5xl text-white font-heading mr-5">
                Carla <br className="md:hidden" /> Hartmann
              </h2>
              <div className="relative">
                <Image src={fleche} height="auto" alt="icon fleche" />
                <span className="bg-yellow-500 h-12 w-12 rounded-full absolute top-0 animate-ping lg:hidden"></span>
              </div>
            </div>
            <p className=" text-2xl text-white mt-3 border-brand-yellow border-b">
              Assistante juridique
            </p>
            <p className="text-brand-yellow text-xl ">
              sekretariat@notariat-biel.ch
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
