import Image from "next/image";
import portrait from "../../../public/img/portrait.jpg";

export default function Apropos() {
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="flex items-center md:items-stretch flex-col justify-center md:flex-row bg-[#F8F3EF] mb-20">
        <div className=" flex-1 my-20 px-10 space-y-10">
          <h2 className=" font-heading text-brand-gray text-5xl uppercase mb-20">
            à propos de <br className="" /> barbora riegelová
          </h2>

          <div>
            <div className="flex items-center">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.69753 9.73442C5.6291 8.16143 6.5229 6.66264 7.39152 5.19353C6.61102 4.13992 6.59843 4.03604 7.24046 2.92308C7.60553 2.28498 7.99578 1.67656 8.36086 1.0533C8.70075 0.474556 9.15395 0.37068 9.60714 0.741668C11.2059 2.01787 12.7795 3.32375 14.3531 4.62962C14.7937 5.00061 14.7685 5.54967 14.5042 6.02454C14.0258 6.88523 13.5097 7.73108 12.9809 8.5621C12.6536 9.08148 12.1878 9.0518 11.8102 8.71049C11.4325 8.36918 11.2185 8.50274 10.9919 8.88857C10.7653 9.28923 10.5261 9.70474 10.2618 10.1796C10.6646 10.5209 11.0171 10.8474 11.3947 11.1442C13.0439 12.4649 14.693 13.7708 16.3421 15.0766C16.745 15.3883 17.0093 15.7889 16.7701 16.3677C16.5435 16.9168 16.0652 17.0058 15.5239 16.5754C13.7614 15.1954 12.0242 13.7708 10.2618 12.3907C9.26725 11.6042 9.25466 11.6339 8.6504 12.9101C9.34278 14.023 9.34278 14.023 8.6504 15.1954C8.27274 15.8483 7.90766 16.5161 7.51741 17.1542C7.20269 17.6736 6.76209 17.7923 6.30889 17.4361C4.7353 16.1748 3.16171 14.8986 1.61329 13.5927C1.16009 13.2217 1.0342 12.7023 1.38669 12.1236C1.90283 11.2629 2.40638 10.3725 2.93511 9.51183C3.21206 9.06664 3.6149 9.08148 4.01774 9.30407C4.24433 9.39311 4.43317 9.54151 4.69753 9.73442ZM7.31599 11.9307C8.02096 10.7732 8.70075 9.67506 9.35537 8.59178C10.1233 7.31558 10.1359 7.30074 9.00288 6.48456C8.87699 6.39553 8.5371 6.44005 8.46157 6.5736C7.66848 7.83496 6.90056 9.126 6.14524 10.4319C6.06971 10.5654 6.08229 10.8919 6.17041 10.9809C6.51031 11.3074 6.88797 11.5894 7.31599 11.9307ZM7.40411 14.2308C6.24595 13.2811 5.15073 12.3759 4.05551 11.4706C3.71561 11.1887 3.56455 11.53 3.43866 11.812C3.30018 12.1236 2.88475 12.4204 3.33795 12.8062C4.40799 13.7114 5.49062 14.5869 6.62361 15.507C6.87538 15.0915 7.10198 14.7205 7.40411 14.2308ZM12.9054 5.57935C11.7598 4.62962 10.7024 3.75409 9.63232 2.8934C9.51902 2.80436 9.25466 2.78952 9.15395 2.87856C8.57487 3.39794 8.58745 3.85797 9.17912 4.34767C9.29242 4.45155 9.41831 4.55543 9.53161 4.64446C10.4002 5.35676 11.2814 6.05422 12.2004 6.81103C12.4396 6.39553 12.641 6.03938 12.9054 5.57935Z"
                  fill="#002654"
                />
                <path
                  d="M6.39683 23.2532C4.68476 23.2532 2.9601 23.2532 1.24803 23.2532C0.215753 23.2532 -0.0234325 23.0306 0.00174503 21.7841C0.0143338 20.9679 0.102457 20.1072 0.341643 19.3653C0.606006 18.5491 1.29839 18.2078 2.02853 18.2078C4.93653 18.1929 7.84453 18.1929 10.7651 18.2078C11.9862 18.2226 12.7541 19.0982 12.8549 20.5376C12.8926 21.057 12.88 21.5764 12.8674 22.0957C12.8549 22.9268 12.5779 23.2532 11.8603 23.2681C10.035 23.2681 8.2222 23.2532 6.39683 23.2532ZM6.40942 21.4576C7.83194 21.4576 9.25448 21.4576 10.677 21.4576C11.0043 21.4576 11.382 21.5318 11.3568 20.8937C11.3442 20.3595 11.2057 19.9885 10.6644 19.9885C7.81936 19.9885 4.9743 19.9885 2.12924 19.9885C1.62569 19.9885 1.49981 20.3298 1.47463 20.8492C1.44945 21.4428 1.77676 21.4576 2.12924 21.4428C3.56436 21.4576 4.98689 21.4576 6.40942 21.4576Z"
                  fill="#002654"
                />
              </svg>

              <p className=" font-heading text-brand-red text-xl border-b border-brand-gray ml-5 pb-2">
                Master of law, notaire du canton de Berne
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center w-full">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.69753 9.73442C5.6291 8.16143 6.5229 6.66264 7.39152 5.19353C6.61102 4.13992 6.59843 4.03604 7.24046 2.92308C7.60553 2.28498 7.99578 1.67656 8.36086 1.0533C8.70075 0.474556 9.15395 0.37068 9.60714 0.741668C11.2059 2.01787 12.7795 3.32375 14.3531 4.62962C14.7937 5.00061 14.7685 5.54967 14.5042 6.02454C14.0258 6.88523 13.5097 7.73108 12.9809 8.5621C12.6536 9.08148 12.1878 9.0518 11.8102 8.71049C11.4325 8.36918 11.2185 8.50274 10.9919 8.88857C10.7653 9.28923 10.5261 9.70474 10.2618 10.1796C10.6646 10.5209 11.0171 10.8474 11.3947 11.1442C13.0439 12.4649 14.693 13.7708 16.3421 15.0766C16.745 15.3883 17.0093 15.7889 16.7701 16.3677C16.5435 16.9168 16.0652 17.0058 15.5239 16.5754C13.7614 15.1954 12.0242 13.7708 10.2618 12.3907C9.26725 11.6042 9.25466 11.6339 8.6504 12.9101C9.34278 14.023 9.34278 14.023 8.6504 15.1954C8.27274 15.8483 7.90766 16.5161 7.51741 17.1542C7.20269 17.6736 6.76209 17.7923 6.30889 17.4361C4.7353 16.1748 3.16171 14.8986 1.61329 13.5927C1.16009 13.2217 1.0342 12.7023 1.38669 12.1236C1.90283 11.2629 2.40638 10.3725 2.93511 9.51183C3.21206 9.06664 3.6149 9.08148 4.01774 9.30407C4.24433 9.39311 4.43317 9.54151 4.69753 9.73442ZM7.31599 11.9307C8.02096 10.7732 8.70075 9.67506 9.35537 8.59178C10.1233 7.31558 10.1359 7.30074 9.00288 6.48456C8.87699 6.39553 8.5371 6.44005 8.46157 6.5736C7.66848 7.83496 6.90056 9.126 6.14524 10.4319C6.06971 10.5654 6.08229 10.8919 6.17041 10.9809C6.51031 11.3074 6.88797 11.5894 7.31599 11.9307ZM7.40411 14.2308C6.24595 13.2811 5.15073 12.3759 4.05551 11.4706C3.71561 11.1887 3.56455 11.53 3.43866 11.812C3.30018 12.1236 2.88475 12.4204 3.33795 12.8062C4.40799 13.7114 5.49062 14.5869 6.62361 15.507C6.87538 15.0915 7.10198 14.7205 7.40411 14.2308ZM12.9054 5.57935C11.7598 4.62962 10.7024 3.75409 9.63232 2.8934C9.51902 2.80436 9.25466 2.78952 9.15395 2.87856C8.57487 3.39794 8.58745 3.85797 9.17912 4.34767C9.29242 4.45155 9.41831 4.55543 9.53161 4.64446C10.4002 5.35676 11.2814 6.05422 12.2004 6.81103C12.4396 6.39553 12.641 6.03938 12.9054 5.57935Z"
                  fill="#002654"
                />
                <path
                  d="M6.39683 23.2532C4.68476 23.2532 2.9601 23.2532 1.24803 23.2532C0.215753 23.2532 -0.0234325 23.0306 0.00174503 21.7841C0.0143338 20.9679 0.102457 20.1072 0.341643 19.3653C0.606006 18.5491 1.29839 18.2078 2.02853 18.2078C4.93653 18.1929 7.84453 18.1929 10.7651 18.2078C11.9862 18.2226 12.7541 19.0982 12.8549 20.5376C12.8926 21.057 12.88 21.5764 12.8674 22.0957C12.8549 22.9268 12.5779 23.2532 11.8603 23.2681C10.035 23.2681 8.2222 23.2532 6.39683 23.2532ZM6.40942 21.4576C7.83194 21.4576 9.25448 21.4576 10.677 21.4576C11.0043 21.4576 11.382 21.5318 11.3568 20.8937C11.3442 20.3595 11.2057 19.9885 10.6644 19.9885C7.81936 19.9885 4.9743 19.9885 2.12924 19.9885C1.62569 19.9885 1.49981 20.3298 1.47463 20.8492C1.44945 21.4428 1.77676 21.4576 2.12924 21.4428C3.56436 21.4576 4.98689 21.4576 6.40942 21.4576Z"
                  fill="#002654"
                />
              </svg>

              <p className=" font-heading text-brand-red text-xl border-b border-brand-gray ml-5 pb-2">
                Inscrite au registre des notaires du canton de Berne
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center w-full">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.69753 9.73442C5.6291 8.16143 6.5229 6.66264 7.39152 5.19353C6.61102 4.13992 6.59843 4.03604 7.24046 2.92308C7.60553 2.28498 7.99578 1.67656 8.36086 1.0533C8.70075 0.474556 9.15395 0.37068 9.60714 0.741668C11.2059 2.01787 12.7795 3.32375 14.3531 4.62962C14.7937 5.00061 14.7685 5.54967 14.5042 6.02454C14.0258 6.88523 13.5097 7.73108 12.9809 8.5621C12.6536 9.08148 12.1878 9.0518 11.8102 8.71049C11.4325 8.36918 11.2185 8.50274 10.9919 8.88857C10.7653 9.28923 10.5261 9.70474 10.2618 10.1796C10.6646 10.5209 11.0171 10.8474 11.3947 11.1442C13.0439 12.4649 14.693 13.7708 16.3421 15.0766C16.745 15.3883 17.0093 15.7889 16.7701 16.3677C16.5435 16.9168 16.0652 17.0058 15.5239 16.5754C13.7614 15.1954 12.0242 13.7708 10.2618 12.3907C9.26725 11.6042 9.25466 11.6339 8.6504 12.9101C9.34278 14.023 9.34278 14.023 8.6504 15.1954C8.27274 15.8483 7.90766 16.5161 7.51741 17.1542C7.20269 17.6736 6.76209 17.7923 6.30889 17.4361C4.7353 16.1748 3.16171 14.8986 1.61329 13.5927C1.16009 13.2217 1.0342 12.7023 1.38669 12.1236C1.90283 11.2629 2.40638 10.3725 2.93511 9.51183C3.21206 9.06664 3.6149 9.08148 4.01774 9.30407C4.24433 9.39311 4.43317 9.54151 4.69753 9.73442ZM7.31599 11.9307C8.02096 10.7732 8.70075 9.67506 9.35537 8.59178C10.1233 7.31558 10.1359 7.30074 9.00288 6.48456C8.87699 6.39553 8.5371 6.44005 8.46157 6.5736C7.66848 7.83496 6.90056 9.126 6.14524 10.4319C6.06971 10.5654 6.08229 10.8919 6.17041 10.9809C6.51031 11.3074 6.88797 11.5894 7.31599 11.9307ZM7.40411 14.2308C6.24595 13.2811 5.15073 12.3759 4.05551 11.4706C3.71561 11.1887 3.56455 11.53 3.43866 11.812C3.30018 12.1236 2.88475 12.4204 3.33795 12.8062C4.40799 13.7114 5.49062 14.5869 6.62361 15.507C6.87538 15.0915 7.10198 14.7205 7.40411 14.2308ZM12.9054 5.57935C11.7598 4.62962 10.7024 3.75409 9.63232 2.8934C9.51902 2.80436 9.25466 2.78952 9.15395 2.87856C8.57487 3.39794 8.58745 3.85797 9.17912 4.34767C9.29242 4.45155 9.41831 4.55543 9.53161 4.64446C10.4002 5.35676 11.2814 6.05422 12.2004 6.81103C12.4396 6.39553 12.641 6.03938 12.9054 5.57935Z"
                  fill="#002654"
                />
                <path
                  d="M6.39683 23.2532C4.68476 23.2532 2.9601 23.2532 1.24803 23.2532C0.215753 23.2532 -0.0234325 23.0306 0.00174503 21.7841C0.0143338 20.9679 0.102457 20.1072 0.341643 19.3653C0.606006 18.5491 1.29839 18.2078 2.02853 18.2078C4.93653 18.1929 7.84453 18.1929 10.7651 18.2078C11.9862 18.2226 12.7541 19.0982 12.8549 20.5376C12.8926 21.057 12.88 21.5764 12.8674 22.0957C12.8549 22.9268 12.5779 23.2532 11.8603 23.2681C10.035 23.2681 8.2222 23.2532 6.39683 23.2532ZM6.40942 21.4576C7.83194 21.4576 9.25448 21.4576 10.677 21.4576C11.0043 21.4576 11.382 21.5318 11.3568 20.8937C11.3442 20.3595 11.2057 19.9885 10.6644 19.9885C7.81936 19.9885 4.9743 19.9885 2.12924 19.9885C1.62569 19.9885 1.49981 20.3298 1.47463 20.8492C1.44945 21.4428 1.77676 21.4576 2.12924 21.4428C3.56436 21.4576 4.98689 21.4576 6.40942 21.4576Z"
                  fill="#002654"
                />
              </svg>

              <p className=" font-heading text-brand-red text-xl border-b border-brand-gray ml-5 pb-2">
                Membre de l&apos;Association des notaires bernois
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center w-full">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.69753 9.73442C5.6291 8.16143 6.5229 6.66264 7.39152 5.19353C6.61102 4.13992 6.59843 4.03604 7.24046 2.92308C7.60553 2.28498 7.99578 1.67656 8.36086 1.0533C8.70075 0.474556 9.15395 0.37068 9.60714 0.741668C11.2059 2.01787 12.7795 3.32375 14.3531 4.62962C14.7937 5.00061 14.7685 5.54967 14.5042 6.02454C14.0258 6.88523 13.5097 7.73108 12.9809 8.5621C12.6536 9.08148 12.1878 9.0518 11.8102 8.71049C11.4325 8.36918 11.2185 8.50274 10.9919 8.88857C10.7653 9.28923 10.5261 9.70474 10.2618 10.1796C10.6646 10.5209 11.0171 10.8474 11.3947 11.1442C13.0439 12.4649 14.693 13.7708 16.3421 15.0766C16.745 15.3883 17.0093 15.7889 16.7701 16.3677C16.5435 16.9168 16.0652 17.0058 15.5239 16.5754C13.7614 15.1954 12.0242 13.7708 10.2618 12.3907C9.26725 11.6042 9.25466 11.6339 8.6504 12.9101C9.34278 14.023 9.34278 14.023 8.6504 15.1954C8.27274 15.8483 7.90766 16.5161 7.51741 17.1542C7.20269 17.6736 6.76209 17.7923 6.30889 17.4361C4.7353 16.1748 3.16171 14.8986 1.61329 13.5927C1.16009 13.2217 1.0342 12.7023 1.38669 12.1236C1.90283 11.2629 2.40638 10.3725 2.93511 9.51183C3.21206 9.06664 3.6149 9.08148 4.01774 9.30407C4.24433 9.39311 4.43317 9.54151 4.69753 9.73442ZM7.31599 11.9307C8.02096 10.7732 8.70075 9.67506 9.35537 8.59178C10.1233 7.31558 10.1359 7.30074 9.00288 6.48456C8.87699 6.39553 8.5371 6.44005 8.46157 6.5736C7.66848 7.83496 6.90056 9.126 6.14524 10.4319C6.06971 10.5654 6.08229 10.8919 6.17041 10.9809C6.51031 11.3074 6.88797 11.5894 7.31599 11.9307ZM7.40411 14.2308C6.24595 13.2811 5.15073 12.3759 4.05551 11.4706C3.71561 11.1887 3.56455 11.53 3.43866 11.812C3.30018 12.1236 2.88475 12.4204 3.33795 12.8062C4.40799 13.7114 5.49062 14.5869 6.62361 15.507C6.87538 15.0915 7.10198 14.7205 7.40411 14.2308ZM12.9054 5.57935C11.7598 4.62962 10.7024 3.75409 9.63232 2.8934C9.51902 2.80436 9.25466 2.78952 9.15395 2.87856C8.57487 3.39794 8.58745 3.85797 9.17912 4.34767C9.29242 4.45155 9.41831 4.55543 9.53161 4.64446C10.4002 5.35676 11.2814 6.05422 12.2004 6.81103C12.4396 6.39553 12.641 6.03938 12.9054 5.57935Z"
                  fill="#002654"
                />
                <path
                  d="M6.39683 23.2532C4.68476 23.2532 2.9601 23.2532 1.24803 23.2532C0.215753 23.2532 -0.0234325 23.0306 0.00174503 21.7841C0.0143338 20.9679 0.102457 20.1072 0.341643 19.3653C0.606006 18.5491 1.29839 18.2078 2.02853 18.2078C4.93653 18.1929 7.84453 18.1929 10.7651 18.2078C11.9862 18.2226 12.7541 19.0982 12.8549 20.5376C12.8926 21.057 12.88 21.5764 12.8674 22.0957C12.8549 22.9268 12.5779 23.2532 11.8603 23.2681C10.035 23.2681 8.2222 23.2532 6.39683 23.2532ZM6.40942 21.4576C7.83194 21.4576 9.25448 21.4576 10.677 21.4576C11.0043 21.4576 11.382 21.5318 11.3568 20.8937C11.3442 20.3595 11.2057 19.9885 10.6644 19.9885C7.81936 19.9885 4.9743 19.9885 2.12924 19.9885C1.62569 19.9885 1.49981 20.3298 1.47463 20.8492C1.44945 21.4428 1.77676 21.4576 2.12924 21.4428C3.56436 21.4576 4.98689 21.4576 6.40942 21.4576Z"
                  fill="#002654"
                />
              </svg>

              <p className=" font-heading text-brand-red text-xl border-b border-brand-gray ml-5 pb-2">
                Née le 8 octobre 1981
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center w-full">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.69753 9.73442C5.6291 8.16143 6.5229 6.66264 7.39152 5.19353C6.61102 4.13992 6.59843 4.03604 7.24046 2.92308C7.60553 2.28498 7.99578 1.67656 8.36086 1.0533C8.70075 0.474556 9.15395 0.37068 9.60714 0.741668C11.2059 2.01787 12.7795 3.32375 14.3531 4.62962C14.7937 5.00061 14.7685 5.54967 14.5042 6.02454C14.0258 6.88523 13.5097 7.73108 12.9809 8.5621C12.6536 9.08148 12.1878 9.0518 11.8102 8.71049C11.4325 8.36918 11.2185 8.50274 10.9919 8.88857C10.7653 9.28923 10.5261 9.70474 10.2618 10.1796C10.6646 10.5209 11.0171 10.8474 11.3947 11.1442C13.0439 12.4649 14.693 13.7708 16.3421 15.0766C16.745 15.3883 17.0093 15.7889 16.7701 16.3677C16.5435 16.9168 16.0652 17.0058 15.5239 16.5754C13.7614 15.1954 12.0242 13.7708 10.2618 12.3907C9.26725 11.6042 9.25466 11.6339 8.6504 12.9101C9.34278 14.023 9.34278 14.023 8.6504 15.1954C8.27274 15.8483 7.90766 16.5161 7.51741 17.1542C7.20269 17.6736 6.76209 17.7923 6.30889 17.4361C4.7353 16.1748 3.16171 14.8986 1.61329 13.5927C1.16009 13.2217 1.0342 12.7023 1.38669 12.1236C1.90283 11.2629 2.40638 10.3725 2.93511 9.51183C3.21206 9.06664 3.6149 9.08148 4.01774 9.30407C4.24433 9.39311 4.43317 9.54151 4.69753 9.73442ZM7.31599 11.9307C8.02096 10.7732 8.70075 9.67506 9.35537 8.59178C10.1233 7.31558 10.1359 7.30074 9.00288 6.48456C8.87699 6.39553 8.5371 6.44005 8.46157 6.5736C7.66848 7.83496 6.90056 9.126 6.14524 10.4319C6.06971 10.5654 6.08229 10.8919 6.17041 10.9809C6.51031 11.3074 6.88797 11.5894 7.31599 11.9307ZM7.40411 14.2308C6.24595 13.2811 5.15073 12.3759 4.05551 11.4706C3.71561 11.1887 3.56455 11.53 3.43866 11.812C3.30018 12.1236 2.88475 12.4204 3.33795 12.8062C4.40799 13.7114 5.49062 14.5869 6.62361 15.507C6.87538 15.0915 7.10198 14.7205 7.40411 14.2308ZM12.9054 5.57935C11.7598 4.62962 10.7024 3.75409 9.63232 2.8934C9.51902 2.80436 9.25466 2.78952 9.15395 2.87856C8.57487 3.39794 8.58745 3.85797 9.17912 4.34767C9.29242 4.45155 9.41831 4.55543 9.53161 4.64446C10.4002 5.35676 11.2814 6.05422 12.2004 6.81103C12.4396 6.39553 12.641 6.03938 12.9054 5.57935Z"
                  fill="#002654"
                />
                <path
                  d="M6.39683 23.2532C4.68476 23.2532 2.9601 23.2532 1.24803 23.2532C0.215753 23.2532 -0.0234325 23.0306 0.00174503 21.7841C0.0143338 20.9679 0.102457 20.1072 0.341643 19.3653C0.606006 18.5491 1.29839 18.2078 2.02853 18.2078C4.93653 18.1929 7.84453 18.1929 10.7651 18.2078C11.9862 18.2226 12.7541 19.0982 12.8549 20.5376C12.8926 21.057 12.88 21.5764 12.8674 22.0957C12.8549 22.9268 12.5779 23.2532 11.8603 23.2681C10.035 23.2681 8.2222 23.2532 6.39683 23.2532ZM6.40942 21.4576C7.83194 21.4576 9.25448 21.4576 10.677 21.4576C11.0043 21.4576 11.382 21.5318 11.3568 20.8937C11.3442 20.3595 11.2057 19.9885 10.6644 19.9885C7.81936 19.9885 4.9743 19.9885 2.12924 19.9885C1.62569 19.9885 1.49981 20.3298 1.47463 20.8492C1.44945 21.4428 1.77676 21.4576 2.12924 21.4428C3.56436 21.4576 4.98689 21.4576 6.40942 21.4576Z"
                  fill="#002654"
                />
              </svg>

              <p className=" font-heading text-brand-red text-xl border-b border-brand-gray ml-5 pb-2">
                Lieu d&apos;origine : La Neuveville BE
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center w-full">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.69753 9.73442C5.6291 8.16143 6.5229 6.66264 7.39152 5.19353C6.61102 4.13992 6.59843 4.03604 7.24046 2.92308C7.60553 2.28498 7.99578 1.67656 8.36086 1.0533C8.70075 0.474556 9.15395 0.37068 9.60714 0.741668C11.2059 2.01787 12.7795 3.32375 14.3531 4.62962C14.7937 5.00061 14.7685 5.54967 14.5042 6.02454C14.0258 6.88523 13.5097 7.73108 12.9809 8.5621C12.6536 9.08148 12.1878 9.0518 11.8102 8.71049C11.4325 8.36918 11.2185 8.50274 10.9919 8.88857C10.7653 9.28923 10.5261 9.70474 10.2618 10.1796C10.6646 10.5209 11.0171 10.8474 11.3947 11.1442C13.0439 12.4649 14.693 13.7708 16.3421 15.0766C16.745 15.3883 17.0093 15.7889 16.7701 16.3677C16.5435 16.9168 16.0652 17.0058 15.5239 16.5754C13.7614 15.1954 12.0242 13.7708 10.2618 12.3907C9.26725 11.6042 9.25466 11.6339 8.6504 12.9101C9.34278 14.023 9.34278 14.023 8.6504 15.1954C8.27274 15.8483 7.90766 16.5161 7.51741 17.1542C7.20269 17.6736 6.76209 17.7923 6.30889 17.4361C4.7353 16.1748 3.16171 14.8986 1.61329 13.5927C1.16009 13.2217 1.0342 12.7023 1.38669 12.1236C1.90283 11.2629 2.40638 10.3725 2.93511 9.51183C3.21206 9.06664 3.6149 9.08148 4.01774 9.30407C4.24433 9.39311 4.43317 9.54151 4.69753 9.73442ZM7.31599 11.9307C8.02096 10.7732 8.70075 9.67506 9.35537 8.59178C10.1233 7.31558 10.1359 7.30074 9.00288 6.48456C8.87699 6.39553 8.5371 6.44005 8.46157 6.5736C7.66848 7.83496 6.90056 9.126 6.14524 10.4319C6.06971 10.5654 6.08229 10.8919 6.17041 10.9809C6.51031 11.3074 6.88797 11.5894 7.31599 11.9307ZM7.40411 14.2308C6.24595 13.2811 5.15073 12.3759 4.05551 11.4706C3.71561 11.1887 3.56455 11.53 3.43866 11.812C3.30018 12.1236 2.88475 12.4204 3.33795 12.8062C4.40799 13.7114 5.49062 14.5869 6.62361 15.507C6.87538 15.0915 7.10198 14.7205 7.40411 14.2308ZM12.9054 5.57935C11.7598 4.62962 10.7024 3.75409 9.63232 2.8934C9.51902 2.80436 9.25466 2.78952 9.15395 2.87856C8.57487 3.39794 8.58745 3.85797 9.17912 4.34767C9.29242 4.45155 9.41831 4.55543 9.53161 4.64446C10.4002 5.35676 11.2814 6.05422 12.2004 6.81103C12.4396 6.39553 12.641 6.03938 12.9054 5.57935Z"
                  fill="#002654"
                />
                <path
                  d="M6.39683 23.2532C4.68476 23.2532 2.9601 23.2532 1.24803 23.2532C0.215753 23.2532 -0.0234325 23.0306 0.00174503 21.7841C0.0143338 20.9679 0.102457 20.1072 0.341643 19.3653C0.606006 18.5491 1.29839 18.2078 2.02853 18.2078C4.93653 18.1929 7.84453 18.1929 10.7651 18.2078C11.9862 18.2226 12.7541 19.0982 12.8549 20.5376C12.8926 21.057 12.88 21.5764 12.8674 22.0957C12.8549 22.9268 12.5779 23.2532 11.8603 23.2681C10.035 23.2681 8.2222 23.2532 6.39683 23.2532ZM6.40942 21.4576C7.83194 21.4576 9.25448 21.4576 10.677 21.4576C11.0043 21.4576 11.382 21.5318 11.3568 20.8937C11.3442 20.3595 11.2057 19.9885 10.6644 19.9885C7.81936 19.9885 4.9743 19.9885 2.12924 19.9885C1.62569 19.9885 1.49981 20.3298 1.47463 20.8492C1.44945 21.4428 1.77676 21.4576 2.12924 21.4428C3.56436 21.4576 4.98689 21.4576 6.40942 21.4576Z"
                  fill="#002654"
                />
              </svg>

              <p className=" font-heading text-brand-red text-xl border-b border-brand-gray ml-5 pb-2">
                Langues: allemand, français, slovaque (langue maternelle),
                tchèque, anglais
              </p>
            </div>
          </div>
        </div>

        <Image
          src={portrait}
          height="auto"
          alt="photo de la notaire Barbora Riegelova"
          className="flex-1 object-cover "
        />
      </div>
    </div>
  );
}