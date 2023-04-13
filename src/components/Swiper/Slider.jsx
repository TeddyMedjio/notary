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
            <div className="  max-w-[700px] absolute right-0 top-0 mt-[15%] ">
              <h1 className="text-brand-red font-heading text-6xl drop-shadow-[0_35px_35px_rgb(255, 255, 255)]">
                Le Notariat professionnel, indépendant et libre
              </h1>
              <p className=" text-xl text-brand-gray my-10">
                L&rsquo;étude de la notaire Riegelová est synonyme de conseils
                juridiques complets et sur mesure dans toutes les situations de
                la vie et sur plusieurs générations.
              </p>
              <Link
                href="/"
                className="font-bold uppercase transition-all duration-300 ease bg-brand-blue hover:bg-brand-gray text-white py-3 px-3 rounded cursor-pointer tracking-widest"
              >
                barbora riegelová
              </Link>
            </div>
          </div>
          <Image src={slide} height="100%" alt="image de la notaire" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative container mx-auto">
            <div className=" max-w-[700px] absolute right-0 top-0 mt-[15%]">
              <h1 className="text-brand-red font-heading text-6xl drop-shadow-[0_35px_35px_rgb(255, 255, 255)]">
                Le Notariat professionnel, indépendant et libre
              </h1>
              <p className=" text-xl text-brand-gray my-10">
                Dans le canton de Berne, les notaires sont une profession libre,
                académique et publique - séparée de l&rsquo;administration et de
                la juridiction.
              </p>
              <a
                href="mailto:info@notariat-biel.ch"
                className="font-bold uppercase transition-all duration-300 ease bg-brand-blue hover:bg-brand-gray text-white py-3 px-3 rounded cursor-pointer tracking-widest"
              >
                Laisser un message
              </a>
            </div>
          </div>
          <Image src={slider} height="100%" alt="image de la notaire" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
