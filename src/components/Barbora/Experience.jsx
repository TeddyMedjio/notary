import Image from "next/image";
import statuette from "../../../public/img/statuette.jpg";

export default function Experience() {
  return (
    <div className="container mx-auto px-5 lg:px-0 flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20 lg:space-x-0  justify-center my-28 ">
      <div className=" flex-1">
        <h3 className=" font-heading text-brand-red underline font-semibold text-4xl mb-10">
          Formation
        </h3>

        <div className="flex mb-5 border-b border-brand-gray pb-5">
          <p className=" text-brand-red font-semibold lg:mr-5">2004 – 2011</p>
          <p className=" text-brand-gray">
            Etudes à la faculté de droit de l&apos;Université de Berne.
          </p>
        </div>

        <div className="flex mb-5 border-b border-brand-gray pb-5 ">
          <p className=" text-brand-red font-semibold mr-6 lg:mr-18">2011</p>
          <p className=" text-brand-gray">
            Obtention du titre de Master of Law avec spécialisation en droit
            commercial.
          </p>
        </div>

        <div className="flex ">
          <p className=" text-brand-red font-semibold mr-6 lg:mr-18">2014</p>
          <p className=" text-brand-gray">
            Direction de la Justice, des affaires communales et ecclésiastiques
            du canton de Berne, délivrance du brevet de notaire bernois.
          </p>
        </div>
      </div>

      <Image
        src={statuette}
        height="auto"
        alt="image d'une statuette"
        className="mix-blend-multiply flex-1 hidden lg:block"
      />

      <div className="flex-1">
        <h3 className=" font-heading text-brand-red underline font-semibold text-4xl mb-10">
          Expérience professionnelle
        </h3>

        <p className=" text-brand-gray mb-5">
          Dans le cadre de ma formation de notaire, j&apos;ai effectué un stage
          au bureau du cadastre du Seeland à Nidau, au bureau du registre du
          commerce du canton de Berne et un stage de 19 mois dans un cabinet
          d&apos;avocats et de notaires renommé à Biel/Bienne.
        </p>

        <p className=" text-brand-gray mb-5">
          Après avoir réussi l&apos;examen d&apos;État et mon brevet de notaire,
          je suis devenu notaire à l&apos;étude de notaire Hugi à Biel/Bienne. A
          partir du
          <span className=" font-semibold">01.01.2017</span>, l&apos;étude de
          notaire Hugi est devenue{" "}
          <span className=" font-semibold">
            l&apos;étude de notaire Hugi & Riegelová.
          </span>
        </p>

        <p className=" text-brand-gray">
          À la suite du départ à la retraite du notaire Urs Hugi, j&apos;ai
          repris le bureau du notaire Hugi & Riegelová le{" "}
          <span className=" font-semibold">01.01.2019</span> et je continue à le
          diriger de manière indépendante.
        </p>
      </div>
    </div>
  );
}
