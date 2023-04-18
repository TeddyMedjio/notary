import Image from "next/image";
import Link from "next/link";
import article_one from "../../../public/img/article_one.png";
import article_two from "../../../public/img/article_two.png";
import article_three from "../../../public/img/article_three.png";
import article_four from "../../../public/img/article_four.png";
import article_five from "../../../public/img/article_five.png";
import article_six from "../../../public/img/article_six.png";

export default function Articles() {
  return (
    <div className="container mx-auto px-5 lg:px-0 py-20">
      <div className="flex justify-between flex-wrap space-y-20 lg:space-y-0 ">
        <div className="flex flex-col md:flex-row lg:max-w-xl md:space-x-5 ">
          <Image
            src={article_one}
            height="auto"
            alt="couverture article flex-1"
          />
          <div className="flex-1">
            <p className=" font-heading text-2xl md:text-4xl lg:text-2xl">
              Beitrag in der BZ: «Rechtsberatung inklusive. Ihre Berner Notare»
            </p>
            <div className="mt-5">
              <h4 className="font-heading text-2xl text-brand-red mb-3">
                31.05.2021
              </h4>
              <Link href="/img/Beitrag_BZ_2021.pdf" target="blank">
                <button className=" text-white font-semibold rounded bg-brand-red px-10 py-3 ">
                  Savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:max-w-xl md:space-x-5">
          <Image
            src={article_two}
            height="auto"
            alt="couverture article flex-1"
          />
          <div className="flex-1">
            <p className=" font-heading text-2xl md:text-4xl lg:text-2xl ">
              La gueule 2020
            </p>
            <div className="mt-5">
              <h4 className="font-heading text-2xl text-brand-red mb-3">
                17.06.2020
              </h4>
              <Link href="/img/la_gueule_01_2020.pdf" target="blank">
                <button className=" text-white font-semibold rounded bg-brand-red px-10 py-3 ">
                  Savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:max-w-xl md:space-x-5">
          <Image
            src={article_three}
            height="auto"
            alt="couverture article flex-1"
          />
          <div className="flex-1">
            <p className=" font-heading text-2xl md:text-4xl lg:text-2xl ">
              Bieler Tagblatt
            </p>
            <div className="mt-5">
              <h4 className="font-heading text-2xl text-brand-red mb-3">
                10.12.2018
              </h4>
              <Link href="/img/Kurzporträt-BR.pdf" target="blank">
                <button className=" text-white font-semibold rounded bg-brand-red px-10 py-3 ">
                  Savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:max-w-xl md:space-x-5">
          <Image
            src={article_four}
            height="auto"
            alt="couverture article flex-1"
          />
          <div className="flex-1">
            <p className=" font-heading text-2xl md:text-4xl lg:text-2xl ">
              La gueule
            </p>
            <div className="mt-5">
              <h4 className="font-heading text-2xl text-brand-red mb-3">
                2018
              </h4>
              <Link href="/img/La-Gueule-2018.png" target="blank">
                <button className=" text-white font-semibold rounded bg-brand-red px-10 py-3 ">
                  Savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:max-w-xl md:space-x-5">
          <Image
            src={article_five}
            height="auto"
            alt="couverture article flex-1"
          />
          <div className="flex-1">
            <p className=" font-heading text-2xl md:text-4xl lg:text-2xl ">
              La gueule / Kurzporträt
            </p>
            <div className="mt-5">
              <h4 className="font-heading text-2xl text-brand-red mb-3">
                2016
              </h4>
              <Link
                href="/img/Bieler-Tagblatt-vom-10.12.2018.png"
                target="blank"
              >
                <button className=" text-white font-semibold rounded bg-brand-red px-10 py-3 ">
                  Savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:max-w-xl md:space-x-5">
          <Image
            src={article_six}
            height="auto"
            alt="couverture article flex-1"
          />
          <div className="flex-1">
            <p className=" font-heading text-2xl md:text-4xl lg:text-2xl ">
              « Adieu à la <br className="hidden lg:block" /> Société{" "}
              <br className="hidden lg:block" /> Anonyme »
            </p>
            <div className="mt-5">
              <h4 className="font-heading text-2xl text-brand-red mb-3">
                2016
              </h4>
              <Link href="/img/Adieu-à-la-Société-Anonyme.png" target="blank">
                <button className=" text-white font-semibold rounded bg-brand-red px-10 py-3 ">
                  Savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
