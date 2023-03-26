import { Apostrof } from "../Apostrof/Apostrof";

const Citation = () => {
  return (
    <div className="bg-brand-red">
      <div className="max-w-7xl py-20 mx-auto relative ">
        <Apostrof className="w-36 top-10 absolute z-10" />
        <Apostrof className="w-36 bottom-10 right-0 rotate-180 absolute z-10" />
        <p className=" text-white text-3xl text-center relative z-40">
          L'étude de la notaire Riegelová est synonyme de conseils juridiques
          complets et sur mesure dans toutes les situations de la vie et sur
          plusieurs générations.
        </p>
      </div>
    </div>
  );
};

export default Citation;
