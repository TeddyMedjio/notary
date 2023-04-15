import Image from "next/image";
import profil from "../../../../public/img/profil.png";

export default function Profil() {
  return (
    <div className="container mx-auto flex justify-center my-20 px-5">
      <Image
        src={profil}
        height="auto"
        alt="image de la Notaire"
        className="mr-10 max-h-96 hidden lg:block"
      />

      <div className=" space-y-7 ">
        <h3 className=" font-heading text-brand-red text-4xl">
          Des conseils juridiques compétents, rapides et consciencieux dans
          toutes les situations et sur plusieurs générations.
        </h3>
        <p className=" text-lg text-brand-gray">
          En tant que notaires, nous fournissons notamment les services suivants
          : Dans le domaine du droit des personnes, nous vous assistons dans la
          création de fondations ou d&apos;associations. En matière de droit de
          la famille, nous vous conseillons sur les questions de droit
          matrimonial et établissons le contrat de mariage ou de concubinage
          adapté à votre situation financière. En matière de droit des
          successions, nous vous assistons dans le règlement de votre
          succession, nous rédigeons des testaments, des pactes successoraux et
          de donation ainsi que des mandats pour cause d’inaptitude, nous
          établissons les inventaires successoraux requis par la loi (inventaire
          fiscal, inventaire successoral, inventaire public), nous administrons
          les successions et nous procédons au partage des biens. En matière de
          droit immobilier, nous vous assistons pour toutes les questions
          relatives à votre propriété, nous notons les contrats de vente et de
          servitude, nous constituons la propriété par étages, les cédules
          hypothécaires et nous nous occupons de toutes les transactions en lieu
          avec le registre foncier. Nous vous conseillons et vous soutenons
          également dans la création d&apos;entreprises.
        </p>
      </div>
    </div>
  );
}
