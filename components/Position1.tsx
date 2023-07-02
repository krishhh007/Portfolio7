import Image from "next/image";
import { useState } from "react";
const Projects = () => {
  const [position] = useState([
    {
      id: 1,
      image: "/images/icons8-chatbot-94.png",
      role: "MITE-CHATBOT",
      type: "ANDROID-APP",

      skills: [
        {
          id: 1,
          name: "Android Studio",
          image: "/images/icons8-android-studio-48.png",
        },

        {
          id: 2,
          name: "Firebase",
          image: "/images/icons8-firebase-48.png",
        },
        {
          id: 3,
          name: "Brainshop-API",
          image: "/images/icons8-api-100.png",
        },
      ],
    },
    {
      id: 2,
      image: "/images/icons8-job-64 (1).png",
      role: "JOB_FINDER",
      type: "HYBRID-APP",

      skills: [
        {
          id: 1,
          name: "React Native",
          image: "/images/react.png",
        },
        {
          id: 2,
          name: "Expo",
          image: "/images/expo.png",
        },
        {
          id: 3,
          name: "RapidAPI",
          image: "/images/rapidapi.png",
        },
        {
          id: 4,
          name: "Insomnia",
          image: "/images/insomnia.png",
        },
      ],
    },
    {
      id: 3,
      image: "/images/icons8-building-64.png",
      role: "Find My PG ",
      type: "Hybrid App",
      skills: [
        {
          id: 1,
          name: "React Native",
          image: "/images/react.png",
        },
        { id: 2, name: "Expo", image: "/images/expo.png" },
      ],
    },

    {
      id: 4,
      image: "/images/icons8-body-mass-index-64.png",
      role: "BMI-CALCULATOR",
      type: "HYBRID-APP",

      skills: [{ id: 1, name: "Flutter", image: "/images/flutter.png" }],
    },
    {
      id: 5,
      image: "/images/icons8-chatbot-64.png",
      role: "ChatBot For business work",
      type: "ANDROID-APP",
      //date: "4/2020 - present",
      skills: [
        {
          id: 1,
          name: "Android Studio",
          image: "/images/icons8-android-studio-48.png",
        },
        { id: 2, name: "Firebase", image: "/images/icons8-firebase-48.png" },
        { id: 3, name: "Java", image: "/images/icons8-java-64.png" },
      ],
    },

    {
      id: 6,
      image: "/images/chatgpt.webp",
      role: "CHAT-GPT ",
      type: "Hybrid App",
      skills: [
        {
          id: 1,
          name: "Flutter",
          image: "/images/flutter.png",
        },
        { id: 2, name: "Open-AI", image: "/images/openai.webp" },
      ],
    },
    {
      id: 7,
      image: "/images/icons8-motion-detector-48.png",
      role: "OBJECT MOTION DETECTOR",
      type: "computer vision project",
      skills: [
        {
          id: 1,
          name: "Python",
          image: "/images/python.png",
        },
        { id: 2, name: "OpenCV", image: "/images/icons8-opencv-48.png" },
        {
          id: 3,
          name: "Pandas",
          image: "/images/pandas.png",
        },
      ],
    },
    {
      id: 8,
      image: "/images/icons8-emotion-64.png",
      role: "EMOTION DETECTOR",
      type: "computer vision project",
      skills: [
        {
          id: 1,
          name: "Python",
          image: "/images/python.png",
        },
        { id: 2, name: "OpenCV", image: "/images/icons8-opencv-48.png" },
        {
          id: 3,
          name: "Keras",
          image: "/images/keras.png",
        },
        { id: 4, name: "TenserFlow", image: "/images/tenserflow.jpg" },
      ],
    },
    {
      id: 9,
      image: "/images/icons8-licence-48.png",
      role: "Auto V Card",
      type: "WEB-APPLICATION",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: "/images/html.png",
        },
        { id: 2, name: "CSS", image: "/images/css.png" },
        {
          id: 3,
          name: "Flask",
          image: "/images/icons8-flask-64.png",
        },
        { id: 4, name: "MySql", image: "/images/icons8-mysql-24.png" },
        { id: 5, name: "Php", image: "/images/php.png" },
        {
          id: 6,
          name: "Apache",
          image:
            "/images/icons8-apache-a-free-and-open-source-cross-platform-web-server-software-96.png",
        },
        { id: 7, name: "BootStrap", image: "/images/bootstrap.png" },
      ],
    },
    {
      id: 10,
      image: "/images/command line.webp",
      role: "quiez game",
      type: "Node.js CLI game",
      skills: [
        {
          id: 1,
          name: "Node.js",
          image: "/images/node.png",
        },
        { id: 2, name: "javasript", image: "/images/javascript.png" },
        {
          id: 3,
          name: "Node Package Manager (NPM)",
          image: "/images/icons8-npm-48.png",
        },
      ],
    },
  ]);
  return (
    <div className="py-6 border-b border-zinc-700">
      <h3 className="text-gray-400 capitalize text-lg font-medium">
        Projects & Accomplishments
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

export default Projects;

