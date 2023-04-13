// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import slide from "../../../public/img/slider_notaire.jpg";
import slider from "../../../public/img/slider_notaire02.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative container mx-auto">
            <div className="  max-w-[700px] absolute right-0 top-0 mt-[40%] lg:mt-[15%] text-center lg:text-left  ">
              <h1 className="text-brand-red font-heading text-6xl">
                Le Notariat professionnel, indépendant et libre
              </h1>
              <p className=" text-xl text-brand-gray my-10">
                L&#39;étude de la notaire Riegelová est synonyme de conseils
                juridiques complets et sur mesure dans toutes les situations de
                la vie et sur plusieurs générations.
              </p>
              <Link
                href="/"
                className="font-bold uppercase transition-all duration-300 ease bg-brand-blue hover:bg-brand-gray text-white py-3 px-3 rounded cursor-pointer tracking-widest "
              >
                barbora riegelová
              </Link>
            </div>
          </div>
          <Image src={slide} height="100%" alt="image de la notaire" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative container mx-auto">
            <div className=" max-w-[700px] absolute sm:left-0 lg:left-auto right-0 top-0 mt-[40%] lg:mt-[15%] text-center lg:text-left">
              <h1 className="text-brand-red font-heading text-6xl drop-shadow-[0_35px_35px_rgb(255, 255, 255)]">
                Le Notariat professionnel, indépendant et libre
              </h1>
              <p className=" text-xl text-brand-gray my-10 px-3 md:px-0">
                Dans le canton de Berne, les notaires sont une profession libre,
                académique et publique - séparée de l&#39;administration et de
                la juridiction.
              </p>
              <Link
                href="mailto:info@notariat-biel.ch"
                className="font-bold uppercase transition-all duration-300 ease bg-brand-blue hover:bg-brand-gray text-white py-3 px-3 rounded cursor-pointer tracking-widest"
              >
                Laisser un message
              </Link>
            </div>
          </div>
          <Image src={slider} height="100%" alt="image de la notaire" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
