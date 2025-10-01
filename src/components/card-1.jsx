import img from "../images/spyd1.jpg";

import { FaPersonHarassing } from "react-icons/fa6";
import { GiChewedSkull } from "react-icons/gi";
import { TbSpider } from "react-icons/tb";
import { motion } from "motion/react";
const Card1 = () => {
  return (
    <div className="box w-64 h-[380px] relative bg-[#1A1A1A] ml-5 p-2 rounded-xl">
      <motion.div
        whileHover={{
          height: "100%",
        }}
        className="img-div w-full h-50 z-0 rounded-lg  bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      ></motion.div>
      <div
        className=" foot h-39 w-60 z-20 absolute bottom-[7px] rounded-b-lg bg-transparent backdrop-blur-[4px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 75%, transparent 100%)", // WebKitMask for chrome safari and all . .  .
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to top, black 70%, transparent 100%)", // modern browsers
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <div className="mini-container w-full h-full flex flex-col pt-4">
          <div className="div1 h-12 w-full flex justify-start items-center pl-1 gap-3">
            <h1 className="font-mono text-xl text-white">Spider Man</h1>
            <h1 className="text-white text-2xl">
              {" "}
              <TbSpider />
            </h1>
          </div>
          <div className="div2  h-10 w-full pl-1 flex ">
            <h1 className="text-[13px]  text-gray-300">
              Great Powers comes with great Responsibilty
            </h1>
          </div>
          <div className="div3  h-10 w-full  flex justify-evenly ">
            <div className="text-white flex justify-start items-center gap-1 w-25 h-full ">
              <GiChewedSkull />
              <h1>0</h1>
              <div className="flex  h-full ml-1 gap-1 items-center">
                <FaPersonHarassing />
                <h1>∞</h1>
              </div>
            </div>
            <div className=" w-30 h-full flex justify-center items-center group">
              <div className=" w-23 h-7 rounded-xl grid place-items-center bg-black text-white ">
                <h1 className="text-[14px] group-hover:text-red-300 transition-colors duration-300 cursor-pointer">
                  {" "}
                  Need Help ?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

// so what happpens is , there is little trick
// black --> visible, white --> div content invisible
// transparent means div fully invisible
