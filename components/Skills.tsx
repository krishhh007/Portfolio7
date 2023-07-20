import Image from "next/image";
import { useState } from "react"
const Skills = () => {
    const [skillsList] = useState([
 { id: 1, name: "HTML", image: "/images/html.png" },
      { id: 2, name: "CSS", image: "/images/css.png" },
      { id: 3, name: "Flutter", image: "/images/flutter.png" },
      { id: 4, name: "react native", image: "/images/react.png" },
      {
        id: 5,
        name: "Android Studio",

        image: "/images/icons8-android-studio-48.png",
      },
      

      { id: 6, name: "figma", image: "/images/figma.png" },
      
      { id:7, name: "node", image: "/images/node.png" },
      { id: 8, name: "express", image: "/images/express.png" },
      
      {
        id: 9,
        name: "Firebase",
        image: "/images/icons8-firebase-48.png",
      },
      { id: 10, name: "MySQL", image: "/images/mysql.png" },
    
      { id: 11, name: "Jira", image: "/images/icons8-jira-48.png" },
        {id: 12, name: 'Agile Methodology', image: '/images/icons8-agile-64.png'},
      
      { id: 13, name: "Dart", image: "/images/icons8-dart-48.png" },
      {
        id: 14,
        name: "Java",
        image: "/images/icons8-java-64.png",
      },
      { id: 15, name: "JavaScript", image: "/images/javascript.png" },
      { id: 16, name: "Python", image: "/images/python.png" },

      { id: 17, name: "C", image: "/images/icons8-c-64.png" },
      
      { id: 18, name: "netlify", image: "/images/netlify.png" },
        { id: 19, name: "Git", image: "/images/icons8-git-96.png" },
         { id: 20, name: "Github", image: "/images/icons8-github-50.png" },
         { id: 21, name: "Insomnia", image: "/images/insomnia.png" },
    ]);
  return (
    <div className="py-6 border-b border-zinc-700">
    <h3 className="text-gray-400 capitalize text-lg font-medium">tech stack</h3>
    <div className="flex flex-wrap -mx-2">
            {skillsList.map(skill => (
                <div key={skill.id} className="p-2">
                    <div className="flex items-center bg-zinc-800 px-3 py-1.5 rounded-sm ">
                 <div className="relative w-[25px] h-[25px]">
                 <Image src={`${skill.image}`} fill alt="skill" className="w-full h-full object-cover" />
                 </div>
                 <span className="ml-2 text-gray-200 capitalize text-sm font-medium">{skill.name}</span>
            </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills
