import Image from "next/image";
import statue from "../../../../public/img/statue.png";

const Etude = () => {
  return (
    <div className="background-image flex items-center justify-center text-center lg:text-left ">
      <div className="container mx-auto flex items-center justify-center lg:justify-between py-20 px-5 md:px-0 ">
        <div className=" max-w-2xl">
          <h2 className=" font-heading text-5xl text-white">
            Le Cabinet d&#39;étude de la <br className="hidden md:block" />
            <span className="text-brand-yellow">Notaire Riegelová</span>
          </h2>
          <p className=" text-lg mt-5 text-white">
            Nous exerçons nos activités sans directives, pour notre propre
            compte et sous notre propre responsabilité. Nous protégeons les
            intérêts de nos clients de manière égale et neutre. Nous assurons
            également une médiation entre les parties pour éviter ou résoudre
            les conflits. Nous sommes soumis à l&#39;obligation de garder le
            secret et sommes responsables des dommages que nous ou nos employés
            causons de manière coupable.
          </p>
        </div>
        <Image
          src={statue}
          height="auto"
          alt="image une fillette avec balance"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Etude;
