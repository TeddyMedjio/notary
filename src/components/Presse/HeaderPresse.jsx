import Image from "next/image";
import arrow from "../../../public/img/arrow.svg";

export default function HeaderPresse() {
  return (
    <div className="presse relative">
      <h2 className="absolute left-0 right-0 bottom-[15%] z-40 text-center font-heading text-4xl md:text-5xl text-white ">
        La presse
      </h2>
      <div className="absolute left-0 right-0 bottom-0  bg-gradient-to-t from-black py-40 "></div>
      <div className="arrow bounce absolute left-0 right-0 bottom-[5%] ">
        <Image src={arrow} height="auto" alt="icon arrow" />
      </div>
    </div>
  );
}
