import Image from "next/image";
import { useState } from "react";
const Education = () => {
  const [position] = useState([
    {
      id: 1,
      image: "/images/mite-logo-org.png ",
      role: "Bachelor’s of Engineering – Computer Science & Engineering ",
      type: "Mangalore Institute of Technology & Engineering.",
      date: "2020-2024  (CGPA-7.8)",
       skills: [
      { id: 1, image: "/images/graduation-hat-vector-illustration-flat-600w-356361836.webp", name: "Computer Science" }
      
      
    ],
    },
    {
      id: 2,
      image: "/images/SRpu.jpeg",
      role: "Senior Secondary (12th)",
      type: "S.R PU college,hebri.",
      date: "2018-2019",
       skills: [
      { id: 1, image: "/images/icons8-computer-science-64.png", name: "Pre-University" }
      
      
    ],
    },

    {
      id: 3,
      image: "/images/Srlogo.png",
      role: "Secondary School (SSLC)",
      type: "S.R Public School-CBSE,hebri.",
      date: "2016-2017",
       skills: [
      { id: 1, image: "/images/icons8-school-64.png", name: "Higher primary school" }
      
      
    ],
    },
  ]);
  return (
    <div className="py-6 border-b border-zinc-700">
      <h3 className="text-gray-400 capitalize text-lg font-medium">
        Education{" "}
      </h3>
      {position.map((pos) => (
        <div className="mt-6 flex space-x-3" key={pos.id}>
          <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={pos.image}
              fill
              alt="job"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-white capitalize">{pos.role}</h2>
            <h5 className="text-gray-500 font-medium capitalize text-sm mt-[2px]">
              {pos.type} - <span>{pos.date}</span>
            </h5>
            {pos.skills && (
              <div className="flex flex-wrap gap-2 my-2">
                {pos.skills?.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex items-center bg-zinc-800 px-3 py-1 rounded-sm ">
                      <div className="relative w-[20px] h-[20px]">
                        <Image
                          src={`${skill.image}`}
                          fill
                          alt="skill"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="ml-2 text-gray-200 capitalize text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-2">
              {pos.options &&
                pos.options.map((option) => (
                  <li key={option} className="text-gray-400">
                    {option}
                  </li>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;


