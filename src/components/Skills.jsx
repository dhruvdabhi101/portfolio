import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import ReactJs from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Github from "../assets/github.png";

const Skills = () => {
  return (
    <div className="bg-[#0a192f] w-full h-screen text-gray-300" name="skill">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img src={HTML} alt="HTML Icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img src={CSS} alt="CSS Icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img src={JavaScript} alt="JS Icon" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img src={Tailwind} alt="TailWind Icon" className="w-20 mx-auto" />
            <p className="my-4">TailWind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img src={ReactJs} alt="React Icon" className="w-20 mx-auto" />
            <p className="my-4">React Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img src={Node} alt="Node Icon" className="w-20 mx-auto" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img src={Mongo} alt="Mongo Icon" className="w-20 mx-auto" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-200">
            <img src={Github} alt="Github Icon" className="w-20 mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills