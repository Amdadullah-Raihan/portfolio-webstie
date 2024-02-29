import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import Image from "next/image";
import raihan from "../../assests/raihan.png";
import Link from "next/link";

const IntroCard = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { icon: <FaLinkedin />, url: "" },
    { icon: <FaTwitter /> },
    { icon: <FaFacebook /> },
    { icon: <FaGithub /> },
  ];

  return (
    <div className=" w-full lg:max-w-[35%] flex flex-col justify-center items-center  rounded-3xl p-3 lg:p-4  lg:m-0 bg-gray-800 ">
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
          className="w-full h-full bg-gray-700"
        />
      </div>
      <div className="">
        <i>amdadullahrayhan@gmail.com</i>
        <p>Based in Dhaka, Bangladesh</p>
      </div>
      <div className="my-4">@{currentYear} Amdadul. All Rights Reserved</div>
      <div className="flex gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`#${link.icon.props.iconName}`}
            className="border p-2 rounded-full hover:border-green-500 hover:text-green-500 transition-colors duration-300"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="mt-4 w-full">
        <button className="w-full bg-green-400 text-black py-3 rounded-full text-sm uppercase font-semibold hover:bg-green-500 transition-all duration-300">
          Hire me
        </button>
      </div>
    </div>
  );
};

export default IntroCard;
