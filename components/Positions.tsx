import Image from "next/image";
import { useState } from "react";
const Positions = () => {
  const [position] = useState([
    {
      id: 1,
      image: "/images/ROS.jpg",
      role: "Rosette Smart Bottles-Full Stack Flutter Intern",
      type: "hybrid",
      date: "05/2023 - present  , 2mos",
      skills: [
        { id: 1, name: "Figma", image: "/images/figma.png" },
        { id: 2, name: "Flutter", image: "/images/flutter.png" },
        { id: 3, name: "bloc", image: "/images/bloc.webp" },

        { id: 4, name: "Firebase", image: "/images/icons8-firebase-48.png" },
        {
          id: 5,
          name: "REST API's",
          image: "/images/icons8-rest-api-64.png",
        },
        { id: 6, name: "github", image: "/images/git.png" },
        {
          id: 7,
          name: "Jira administrator",
          image: "/images/icons8-jira-48.png",
        },
      ],
       options: ['soon'],
    },
  ]);
  return (
    <div className="py-6 border-b border-zinc-700">
      <h3 className="text-gray-400 capitalize text-lg font-medium">
        work history{" "}
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

export default Positions;
