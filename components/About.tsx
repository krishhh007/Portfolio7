import { useState } from "react";
import { FaHandPaper } from "react-icons/fa";
const About = () => {
  const [heading] = useState<string>("hello everyone");
  const [description] = useState<string>(
"Highly motivated recent Computer Science graduate with a passion for AI & ML seeking a challenging role that leverages both technical and business acumen. Eager to contribute to a culture of innovation and make a tangible impact on an organization's success." );
  return (
    <div className="py-6 border-b border-zinc-700">
      <h3 className="text-gray-400 capitalize text-lg font-medium">about me</h3>
      <h1 className="text-white text-2xl font-medium capitalize my-2 flex items-center">
        {heading}{" "}
        <FaHandPaper className="ml-3 text-yellow-400 rotate-[10deg]" />
      </h1>
      <p className="text-gray-400 font-medium ">{description}</p>
    </div>
  );
};

export default About;
