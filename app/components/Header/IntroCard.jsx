import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import Image from "next/image";
import raihan from "../../assests/raihan.png";
import Link from "next/link";
import SocialsLinks from "../SocialsLinks";
import { motion } from "framer-motion";

const IntroCard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative w-full lg:max-w-[40%] custom__shadow rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col justify-center items-center  rounded-3xl p-3 lg:p-4  lg:m-0 bg-teal-900  backdrop-filter backdrop-blur-lg bg-opacity-10  "
      >
        <div className="w-full flex gap-4 justify-between items-center ">
          <h1 className="text-4xl md:text-[2.9rem]  font-bold">Amdadul</h1>
          <p className="font-semibold text-sm">
            ReactJS/NextJS <br /> Developer
          </p>
        </div>
        <div className="my-4 rounded-3xl max-h-96 overflow-hidden ">
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
        <div className="w-full ">
          <Link
            href="https://drive.google.com/file/d/1TmPdtPbwJ6U1KTc_UE7z45Y4DviklB8i/view"
            target="_black"
          >
            <motion.button
              whileTap={{ scale: 0.7 }}
              className=" w-full
               bg-green-500
                text-gray-900 py-3 rounded-full text-sm uppercase font-semibold  shadow__lg__on__hover btn-shadow transition-all duration-300"
            >
              Hire me
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <div className="absolute w-60 h-60 bg-gradient-radial from-green-500 opacity-15 rounded-full top-28 left-0 right-0 mx-auto z-0 "></div>
    </div>
  );
};

export default IntroCard;
