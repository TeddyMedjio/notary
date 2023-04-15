import Image from "next/image";
import Link from "next/link";
import fleche from "../../../../public/img/arrow_right.svg";

export default function Notaires() {
  return (
    <div className="background-motif">
      <div className="container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row items-center justify-center flex-wrap gap-5 py-28 ">
        <div className="barbora px-5 rounded-md flex items-center pb-10 min-h-[631px] max-w-[628px] md:min-w-[628px] ">
          <div className=" mt-[470px]">
            <div className="flex items-center">
              <h2 className="text-5xl text-white font-heading mr-5">
                Barbora <br className="md:hidden" /> Riegelová
              </h2>
              <Link href="/barbora-regielova">
                <Image src={fleche} height="auto" alt="icon fleche" />
              </Link>
            </div>
            <p className=" text-2xl text-white mt-3 border-brand-yellow border-b">
              Master of law, notaire du canton de Berne
            </p>
            <p className="text-brand-yellow text-xl ">info@notariat-biel.ch</p>
          </div>
        </div>

        <div className="regula px-5 rounded-md flex items-center pb-10 min-h-[631px] max-w-[628px] md:min-w-[628px] ">
          <div className=" mt-[470px]">
            <div className="flex items-center">
              <h2 className="text-5xl text-white font-heading mr-5">
                Regula <br className="md:hidden" /> Stettler
              </h2>
              <Link href="/contact">
                <Image src={fleche} height="auto" alt="icon fleche" />
              </Link>
            </div>
            <p className=" text-2xl text-white mt-3 border-brand-yellow border-b">
              Employée de notaire certifiée
            </p>
            <p className="text-brand-yellow text-xl ">
              regula.stettler@notariat-biel.ch
            </p>
          </div>
        </div>

        <div className="maria px-5 rounded-md flex items-center pb-10 min-h-[631px] max-w-[628px] md:min-w-[628px] ">
          <div className=" mt-[470px]">
            <div className="flex items-center">
              <h2 className="text-5xl text-white font-heading mr-5">
                Maria <br className="md:hidden" /> Righenzi
              </h2>
              <Link href="/contact">
                <Image src={fleche} height="auto" alt="icon fleche" />
              </Link>
            </div>
            <p className=" text-2xl text-white mt-3 border-brand-yellow border-b">
              Employée de notaire certifiée
            </p>
            <p className="text-brand-yellow text-xl">
              maria.righenzi@notariat-biel.ch
            </p>
          </div>
        </div>

        <div className="carla px-5 rounded-md flex items-center pb-10 min-h-[631px] max-w-[628px] md:min-w-[628px] ">
          <div className=" mt-[470px]">
            <div className="flex items-center">
              <h2 className="text-5xl text-white font-heading mr-5">
                Carla <br className="md:hidden" /> Hartmann
              </h2>
              <Link href="/contact">
                <Image src={fleche} height="auto" alt="icon fleche" />
              </Link>
            </div>
            <p className=" text-2xl text-white mt-3 border-brand-yellow border-b">
              Assistante juridique
            </p>
            <p className="text-brand-yellow text-xl ">
              sekretariat@notariat-biel.ch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
