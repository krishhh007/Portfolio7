import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";
const Header = () => {
  const [name] = useState<string>("Krishnaraj Shetty");
  const [role] = useState<string>("Aspiring Full Stack Engineer");
  const [location] = useState<string>("India, Karnataka");
  const [exp] = useState<string>("COO & Software developer");
  const [education] = useState<string>("Computer science Engineering");
  return (
    <div className="flex items-center flex-wrap space-y-5 sm:space-x-10 border-b border-zinc-700 pb-6">
      <div className="w-[100px] h-[100px] relative">
        <Image
          src="/images/krish3.jpg"
          fill
          alt="profile image"
          className="object-cover rounded-full w-full h-full p-[] bg-gray-800"
        />
      </div>
      <div>
        <h4 className="text-white capitalize text-4xl font-bold">{name}</h4>
        <p className="text-gray-300 text-lg mt-1">{role}</p>
        <div className="flex flex-wrap -mx-4 mt-1">
          <div className="flex items-center px-4">
            <FaMapMarkerAlt className="text-gray-400" />
            <span className="capitalize text-gray-400 ml-2">{location}</span>
          </div>
          <div className="flex items-center px-4">
            <SiGnubash className="text-gray-400" />
            <span className="text-gray-400 ml-2">{exp}</span>
          </div>
          <div className="flex items-center px-4">
            <IoSchoolSharp className="text-gray-400" />
            <span className="text-gray-400 ml-2">{education}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
