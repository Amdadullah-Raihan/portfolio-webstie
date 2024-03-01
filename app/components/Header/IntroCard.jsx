import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import Image from "next/image";
import raihan from "../../assests/raihan.png";
import Link from "next/link";
import SocialsLinks from "../SocialsLinks";

const IntroCard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" w-full lg:max-w-[35%] flex flex-col justify-center items-center  rounded-3xl p-3 lg:p-4  lg:m-0 bg-teal-900  backdrop-filter backdrop-blur-lg bg-opacity-10">
      <div className="w-full flex gap-8 justify-between items-center">
        <h1 className="">Amdadul</h1>
        <p className="font-semibold text-sm">
          ReactJS/NextJS <br /> Developer
        </p>
      </div>
      <div className="my-4 rounded-3xl max-h-80 overflow-hidden">
        <Image
          src={raihan}
          alt="Amdadul"
          className="w-full h-full   backdrop-filter backdrop-blur-xl "
        />
      </div>
      <div className="">
        <i>amdadullahrayhan@gmail.com</i>
        <p>Based in Dhaka, Bangladesh</p>
      </div>

      <div className="my-4">
        {" "}
        <SocialsLinks />
      </div>
      <div className="w-full">
        <button className="w-full bg-green-400 text-black py-3 rounded-full text-sm uppercase font-semibold hover:bg-green-500 transition-all duration-300">
          Hire me
        </button>
      </div>
    </div>
  );
};

export default IntroCard;
