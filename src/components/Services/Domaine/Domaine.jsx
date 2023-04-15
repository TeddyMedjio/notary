import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Domaine() {
  return (
    <div className="container mx-auto px-5 py-20">
      <h3 className=" font-heading text-brand-red text-4xl">
        Domaines d&apos;activité en détail
      </h3>

      {/* Disclosure */}
      <div className="w-full pt-10">
        <div className="rounded bg-gray-100 drop-shadow-md">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded bg-brand-red px-4 py-2 text-left text-xl font-bold text-white hover:bg-brand-gray focus:outline-none focus-visible:ring focus-visible:bg-brand-gray focus-visible:ring-opacity-75">
                  <span>Droits réels</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-5 text-lg text-brand-gray pt-10">
                  <p>
                    Toute personne achetant une maison, un appartement en
                    copropriété ou un terrain doit obtenir plusieurs documents
                    pour être considérée comme propriétaire.
                  </p>
                  <p className="mt-5">
                    Nous vous conseillons pour toutes les questions concernant
                    l&apos;achat de biens immobiliers, nous authentifions le
                    contrat d&apos;achat et nous assurons de l&apos;inscription
                    au registre foncier.
                  </p>
                  <p className="mt-5">
                    Nous vous conseillons en matière d&apos;établissement et
                    d’annulation de servitudes, nous vous soutenons dans les
                    négociations et, une fois l&apos;accord conclu, nous
                    veillons à ce que l&apos;inscription soit faite au registre
                    foncier.
                  </p>
                  <p className="mt-5">
                    Nous sommes à vos côtés pour vous conseiller et vous aider
                    sur les questions d&apos;accessibilité, de financement et de
                    règlement et nous travaillons avec vous pour mettre au point
                    la meilleure formule.
                  </p>
                  <h3 className=" text-brand-red text-xl font-bold mt-10">
                    Nos prestations en matière de droit de propriété:
                  </h3>
                  <div className="mt-8 space-y-5">
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      vous conseillons dans toutes les questions de droit de
                      propriété;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      rédigeons et notarions les contrats d&apos;achat de biens
                      immobiliers;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      établissons les cédules hypothécaires nécessaires;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      prenons en charge la correspondance bancaire et avec les
                      autorités administratives;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      vous conseillons sur les questions en lien avec le
                      prélèvement de l&apos;impôt sur les gains immobiliers;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      constitutions, par l&apos;établissement des actes
                      constitutifs et leur authentification, de la propriété par
                      étages;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      établissons des servitudes;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      réglementons le droit matrimonial et le droit des
                      successions après l&apos;acquisition de biens immobiliers;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      fournissons également des conseils en matière de droit
                      fiscal.
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Droit successoral */}
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded bg-brand-red px-4 py-2 text-left text-xl font-bold text-white hover:bg-brand-gray focus:outline-none focus-visible:ring focus-visible:bg-brand-gray focus-visible:ring-opacity-75">
                  <span>Droit successoral</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-5 text-lg text-brand-gray pt-10">
                  <p>
                    Bien que l&apos;on n&apos;aime pas parler de la mort, tôt ou
                    tard, il faut y faire face. Cela inclut également la
                    question de savoir ce qu&apos;il doit advenir de ses propres
                    biens après son décès. Si l&apos;on ne veut pas s&apos;en
                    remettre uniquement à la loi, il existe différentes
                    possibilités pour régler sa succession.
                  </p>
                  <p className="mt-5">
                    Il est conseillé de réglementer le droit successoral, tout
                    particulièrement pour les couples qui vive en concubinage,
                    ce qui est très fréquent aujourd’hui, puisque même le fait
                    de faire ménage commun sur une longue période ne donne pas
                    droit à l’héritage. Il est possible de prendre des
                    dispositions complètes par pacte successoral, par mandat
                    pour cause d’inaptitude, par directive anticipée du patient,
                    ainsi qu&apos;en établissant une procuration pour les
                    médecins et les hôpitaux, même si vous n&apos;êtes pas
                    marié.{" "}
                  </p>
                  <p className="mt-5">
                    Des directives claires et réfléchies prises avant le décès -
                    que ce soit par testament ou par pacte successoral – ne
                    permet pas seulement d’éviter les litiges. Nous vous offrons
                    des conseils compétents pour toutes les questions de droit
                    successoral. Nous rédigeons vos dispositions pour cause de
                    mort ou votre pacte successoral et dressons également les
                    inventaires, administrations la succession, exécutons le
                    testament et de partageons la succession.{" "}
                  </p>
                  <h3 className=" text-brand-red text-xl font-bold mt-10">
                    Nos prestations en matière de droit des successions :
                  </h3>
                  <div className="mt-8 space-y-5">
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      vous conseillons pour toutes les questions de droit
                      successoral, en tenant compte, le cas échéant, du droit
                      matrimonial ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      rédigeons et authentifions les testaments, les pactes
                      successoraux et les mandats pour cause d’inaptitude ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      établissons et authentifions les inventaires fiscaux,
                      successoraux et publics ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      procédons à l&apos;ouverture des testaments et les pactes
                      successoraux ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      délivrons des certificats d&apos;hérédité ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      menons des procédures relatives à l&apos;impôt successoral
                      ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      gérons et liquidons des actifs successoraux et procédons
                      au partage de la succession ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      assumons les mandats d&apos;exécution testamentaire.
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Droit de la famille */}
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded bg-brand-red px-4 py-2 text-left text-xl font-bold text-white hover:bg-brand-gray focus:outline-none focus-visible:ring focus-visible:bg-brand-gray focus-visible:ring-opacity-75">
                  <span>Droit de la famille</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-5 text-lg text-brand-gray pt-10">
                  <p>
                    Par le mariage, les couples mariés entrent dans une
                    communauté à laquelle s&apos;appliquent des règles
                    juridiques spécifiques; il en va de même pour le partenariat
                    enregistré.{" "}
                  </p>
                  <p className="mt-5">
                    Dans notre bureau, nous répondons à toutes vos questions
                    concernant l&apos;aspect juridique de votre mariage ou
                    l&apos;enregistrement du partenariat. Nous vous expliquons
                    les implications juridiques de votre situation actuelle,
                    nous vous indiquons les avantages et les inconvénients de
                    celle-ci et nous élaborons la solution optimale pour vous,
                    consistant généralement en la conclusion d’un contrat de
                    mariage, notamment sous l’angle patrimonial.{" "}
                  </p>
                  <h3 className=" text-brand-red text-xl font-bold mt-10">
                    Nos prestations en matière de droit matrimonial :
                  </h3>
                  <div className="mt-8 space-y-5">
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      conseillons les conjoints ainsi que les couples de même
                      sexe sur toutes les questions de droit matrimonial, en
                      tenant compte du droit des successions ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      certifions les conventions matrimoniales, les contrats de
                      mariage (éventuellement combinés avec des pactes
                      successoraux) et les inventaires des biens matrimoniaux ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      traitons les litiges matrimoniaux.
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Droit des sociétés */}
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded bg-brand-red px-4 py-2 text-left text-xl font-bold text-white hover:bg-brand-gray focus:outline-none focus-visible:ring focus-visible:bg-brand-gray focus-visible:ring-opacity-75">
                  <span>Droit des sociétés</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-5 text-lg text-brand-gray pt-10">
                  <p>
                    Toute personne qui dirige ou veut créer sa propre entreprise
                    devra tôt ou tard se pencher sur le droit des sociétés.{" "}
                  </p>
                  <p className="mt-5">
                    Vous souhaitez devenir indépendant, créer votre propre
                    entreprise, augmenter votre capital, modifier les statuts ou
                    coopérer étroitement avec une autre société ? Quelle forme
                    de société convient le mieux ? Quels sont les risques
                    éventuels ? Quelles sont les potentielles implications
                    fiscales ? Quelles sont les effets de l&apos;inscription au
                    registre du commerce ?{" "}
                  </p>
                  <p className="mt-5">
                    Ce sont toutes ces questions pour lesquelles nous vous
                    fournissons des conseils complets. Qu&apos;il s&apos;agisse
                    d&apos;une nouvelle inscription ou d&apos;un changement,
                    nous vous conseillons et organisons la correspondance avec
                    le registre du commerce. Nous vous conseillons dans la
                    préparation de transactions complexes en droit commercial
                    telles que les fusions, les scissions, les transformations
                    ou les transferts d&apos;actifs et nous rédigeons pour vous
                    tous les contrats nécessaires.{" "}
                  </p>
                  <h3 className=" text-brand-red text-xl font-bold mt-10">
                    Nos prestations en matière de droit des sociétés :
                  </h3>
                  <div className="mt-8 space-y-5">
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      vous conseillons sur toutes les questions de droit des
                      sociétés, en tenant compte de la législation fiscale et
                      douanière;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      procédons à la constitution d&apos;entreprises et de
                      fondations ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      authentifions les changements apportés aux entreprises
                      existantes (par exemple augmentations de capital,
                      modifications des statuts, fusions, restructurations);
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      rédigeons les statuts des sociétés, des coopératives et
                      des associations;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      rédigeons des contrats d&apos;apport en nature, des
                      statuts et les conventions d&apos;actionnaires ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Nous
                      gérons la correspondance avec le registre du commerce.
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Droit fiscal */}
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded bg-brand-red px-4 py-2 text-left text-xl font-bold text-white hover:bg-brand-gray focus:outline-none focus-visible:ring focus-visible:bg-brand-gray focus-visible:ring-opacity-75">
                  <span>Droit fiscal</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-5 text-lg text-brand-gray pt-5">
                  <p>
                    Nous vous conseillons en matière fiscale, notamment dans les
                    domaines suivants:{" "}
                  </p>
                  <div className="mt-8 space-y-5">
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Impôt
                      sur le revenu et sur la fortune ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Impôts
                      sur les mutations ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span>{" "}
                      L&apos;impôt sur les gains immobiliers ;
                    </p>
                    <p className="flex">
                      <span className="text-brand-red mr-5">&bull;</span> Impôts
                      sur les successions et donations.
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Légalisations */}
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded bg-brand-red px-4 py-2 text-left text-xl font-bold text-white hover:bg-brand-gray focus:outline-none focus-visible:ring focus-visible:bg-brand-gray focus-visible:ring-opacity-75">
                  <span>Légalisations</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-5 text-lg text-brand-gray pt-5">
                  <p>
                    Nous certifions des documents, des copies et des signatures
                    de personnes physiques et morales pour les autorités
                    nationales et étrangères.{" "}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Coûts */}
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded bg-brand-red px-4 py-2 text-left text-xl font-bold text-white hover:bg-brand-gray focus:outline-none focus-visible:ring focus-visible:bg-brand-gray focus-visible:ring-opacity-75">
                  <span>Coûts</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-5 text-lg text-brand-gray pt-10">
                  <div>
                    <h3 className=" text-brand-red text-xl font-bold">
                      Émoluments
                    </h3>
                    <p>
                      Nos tarifs pour les actes authentiques sont fixés par la
                      loi. Pour nos autres activités, nous facturons nos
                      services en régie (honoraires). Ce procédé de tarification
                      permet aux administrés du même prix pour une prestations
                      notariale identique, et ceci, dans tout le canton.{" "}
                    </p>
                  </div>

                  <div>
                    <h3 className=" text-brand-red text-xl font-bold mt-10">
                      Impôts et taxes
                    </h3>
                    <p>
                      Nous sommes tenus par la loi de percevoir les impôts sur
                      les mutations et les frais d&apos;inscription au registre
                      foncier et au registre du commerce auprès de nos clients
                      pour l&apos;État.
                    </p>
                  </div>

                  <div>
                    <h3 className=" text-brand-red text-xl font-bold mt-10">
                      Facture globale
                    </h3>
                    <p>
                      Vous recevrez de notre part une facture détaillée, sur
                      laquelle vous pourrez voir les différents postes et taxes
                      ainsi que les impôts et taxes que nous avons payés pour
                      vous.
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Surveillance */}
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded bg-brand-red px-4 py-2 text-left text-xl font-bold text-white hover:bg-brand-gray focus:outline-none focus-visible:ring focus-visible:bg-brand-gray focus-visible:ring-opacity-75">
                  <span>Surveillance</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-7 w-7 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-5 text-lg text-brand-gray pt-10">
                  <div>
                    <h3 className=" text-brand-red text-xl font-bold">
                      Autorité
                    </h3>
                    <p>
                      Le Conseil exécutif et la Direction de la justice, des
                      affaires communales et ecclésiastiques contrôlent le
                      respect de la législation notariale. Le cas échéant, ils
                      engagent d&apos;office des procédures de surveillance.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h3 className=" text-brand-red text-xl font-bold">
                      Révision
                    </h3>
                    <p>
                      Les cabinets de notaire sont régulièrement contrôlés. Cela
                      implique la vérification des comptes, de la gestion des
                      actifs, de la facturation et du respect des règles de
                      procédure. Les irrégularités peuvent être sanctionnées par
                      des mesures disciplinaires pouvant aller jusqu&apos;au
                      retrait du brevet.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h3 className=" text-brand-red text-xl font-bold">
                      Association
                    </h3>
                    <p>
                      Outre la surveillance par les autorités judiciaires
                      cantonales, l&apos;Association des notaires bernois (ANB)
                      a créé en son sein une organisation de contrôle interne
                      qui, sur demande, tente de régler à l&apos;amiable les
                      litiges entre notaires ou entre les notaires et leurs
                      clients.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h3 className=" text-brand-red text-xl font-bold">
                      Règles d&apos;éthique professionnelle
                    </h3>
                    <p>
                      Les règles de conduite et les règlements du notariat sont
                      également définis dans le Code de conduite de l’ANB. Toute
                      violation de ces dispositions peut entraîner des mesures
                      disciplinaires.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h3 className=" text-brand-red text-xl font-bold">
                      Obligation professionnelle
                    </h3>
                    <p>
                      Chaque notaire souscrit une assurance responsabilité
                      professionnelle d&apos;au moins deux millions de francs
                      suisses.
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
