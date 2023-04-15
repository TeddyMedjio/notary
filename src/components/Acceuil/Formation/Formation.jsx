import Image from "next/image";
import balance from "../../../../public/img/balance.svg";
import certificate from "../../../../public/img/certificate.svg";

const Formation = () => {
  return (
    <div className="background-motif">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center px-5 md:px-0 py-28 ">
        <div className=" bg-white px-10 py-20 max-w-[556px]">
          <Image src={balance} height="auto" alt="icon balance" />
          <h3 className=" font-heading text-4xl text-brand-gray my-10">
            Des conseils juridiques / Compétences
          </h3>
          <p className=" text-lg text-brand-gray">
            Nous vous conseillons de manière compétente, rapide et
            consciencieuse pour toutes les questions juridiques. Nous effectuons
            tous les travaux annexes au mandat principal, tels que les avis de
            droit et l’établissement des faits, la conduite de négociations,
            l’obtention d’autorisations et le dépôt des dossiers auprès des
            autorités compétentes, pour vous dans notre étude de notaire.
          </p>
        </div>

        <div className="bg-white px-10 py-20 max-w-[556px] mt-10 lg:mt-0 lg:ml-10">
          <Image src={certificate} height="auto" alt="icon certificate" />
          <h3 className=" font-heading text-4xl text-brand-gray my-10">
            Formation juridique des Notaires
          </h3>
          <p className=" text-lg mt-5 text-brand-gray">
            La formation juridique des notaires, qui se déroule sur plusieurs
            années, est organisée en une phase universitaire suivie d’une phase
            pratique. Nous pouvons donc vous garantir un conseil juridique
            complet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formation;
