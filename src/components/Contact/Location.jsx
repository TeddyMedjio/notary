import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "Leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = Leaflet.divIcon({
  html: `<svg width="38" height="54" viewBox="0 0 38 54" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.9997 25.6667C17.2316 25.6667 15.5359 24.9643 14.2856 23.7141C13.0354 22.4638 12.333 20.7681 12.333 19C12.333 17.2319 13.0354 15.5362 14.2856 14.286C15.5359 13.0357 17.2316 12.3333 18.9997 12.3333C20.7678 12.3333 22.4635 13.0357 23.7137 14.286C24.964 15.5362 25.6663 17.2319 25.6663 19C25.6663 19.8755 25.4939 20.7424 25.1589 21.5512C24.8238 22.3601 24.3328 23.095 23.7137 23.7141C23.0947 24.3331 22.3597 24.8242 21.5509 25.1592C20.7421 25.4942 19.8752 25.6667 18.9997 25.6667ZM18.9997 0.333344C14.049 0.333344 9.30103 2.3 5.80035 5.80068C2.29967 9.30136 0.333008 14.0493 0.333008 19C0.333008 33 18.9997 53.6667 18.9997 53.6667C18.9997 53.6667 37.6663 33 37.6663 19C37.6663 14.0493 35.6997 9.30136 32.199 5.80068C28.6983 2.3 23.9504 0.333344 18.9997 0.333344Z" fill="#F3002F"/>
  <circle cx="19.5" cy="19.5" r="7.5" fill="#BA0024"/>
  </svg>
  `,
  iconSize: [19, 27],
  iconAnchor: [19 / 2, 27],
  className: "ted",
});

export default function Location() {
  return (
    <MapContainer
      center={[47.13996782839861, 7.24540314038605]}
      zoom={20}
      scrollWheelZoom={false}
      style={{ height: "700px" }}
    >
      <div className="relative w-[390px] z-[2000]">
        <div className="bg-white  px-10 py-10 ">
          <div className=" space-y-2">
            <h3 className=" font-heading text-3xl text-brand-red underline">
              Contact
            </h3>
            <div className="flex items-center">
              <svg
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H21.9344V15.2823C21.9344 16.3869 21.039 17.2823 19.9344 17.2823H3C1.89543 17.2823 1 16.3869 1 15.2823V1Z"
                  stroke="#9F1832"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L11.4672 11.4672L21.9344 1"
                  stroke="#9F1832"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-brand-red font-openSans font-semibold text-xl ml-3">
                info@notariat-biel.ch
              </p>
            </div>

            <div className="flex items-center">
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.51 5.71825C17.969 12.8081 12.3869 18.3903 5.29697 19.9313C3.13823 20.4005 1.32622 18.565 1.32622 16.3559V14.3777C1.32622 13.8254 1.77476 13.3822 2.32505 13.3354C3.46349 13.2386 4.55515 12.9778 5.57634 12.5767L7.3433 14.3436C10.2172 12.9683 12.547 10.6385 13.9223 7.76458L12.1554 5.99763C12.5565 4.97644 12.8173 3.88477 12.9141 2.74633C12.961 2.19603 13.4042 1.7475 13.9564 1.7475H15.9346C18.1437 1.7475 19.9792 3.55951 19.51 5.71825Z"
                  stroke="#9F1832"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-brand-gray font-openSans text-xl ml-3">
                +41 (0) 32 322 43 55
              </p>
            </div>
          </div>

          <div className=" space-y-2 mt-5">
            <h3 className=" font-heading text-3xl text-brand-red underline">
              Adresse
            </h3>
            <div>
              <p className="text-brand-gray font-openSans font-semibold text-xl">
                Étude de la notaire Riegelová
              </p>
              <p className="text-brand-gray font-openSans text-xl">
                Rue de Nidau 14 <br /> 2502 Biel/Bienne
              </p>
            </div>
          </div>

          <div className=" space-y-2 mt-5">
            <h3 className=" font-heading text-3xl text-brand-red underline">
              Heures d&apos;ouverture
            </h3>
            <div className="flex items-center">
              <p className="text-brand-gray font-openSans font-semibold text-xl ">
                Du lundi au vendredi
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-brand-gray font-openSans text-xl">
                8h00 à 12h00 | 13h30 à 17h30
              </p>
            </div>
          </div>
        </div>
      </div>
      <TileLayer
        attribution='&copy; <Link href="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors'
        url="/map-titles/{z}/{x}/{y}"
      />
      <Marker
        position={[47.13996782839861, 7.24540314038605]}
        icon={markerIcon}
      >
        <Popup>
          <div className="w-full h-full">
            <p className=" text-base font-semibold font-openSans">
              Rue de Nidau 14 <br /> 2502 Biel/Bienne
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
