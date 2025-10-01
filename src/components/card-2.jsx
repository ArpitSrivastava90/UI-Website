import { useState } from "react";
import { motion } from "motion/react";
import img from "../images/Pic1.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiPathDistance } from "react-icons/gi";

const Card2 = () => {
  const [isClicked, setisClicked] = useState(false);
  return (
    <div className="w-[100%] h-[100%] bg-gray-100 rounded-lg overflow-hidden flex justify-center items-start pt-30">
      <div className="w-[280px] h-[445px]">
        <motion.div
          className={`expander w-full ${
            isClicked ? "h-full " : "h-[220px]"
          } bg-white p-1.5 rounded-xl flex  flex-col  justify-start items-center transition-all duration-300`}
        >
          <div
            className={`w-full min-h-[180px] relative ${
              isClicked ? "" : "saturate-200"
            } overflow-hidden rounded-xl bg-cover bg-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div
              className={`dropdiv absolute flex justify-around items-end  bottom-0 w-full h-15 ${
                isClicked
                  ? "bg-black/50"
                  : "bg-transparent  backdrop-blur-[2px]"
              } transition-all duration-300`}
              style={{
                WebkitMask:
                  "linear-gradient(to top, black 70% , transparent 100%)",
              }}
            >
              <div className="head w-25 h-14.5  flex flex-col pt-3">
                <h1 className="text-white font-semibold">Embrocule</h1>
                <h1 className="text-[13px] text-gray-200">Clear view</h1>
              </div>
              <div className="button w-34 h-14.5 z-10 grid pt-2 place-items-center">
                <div className="btn w-[95%] h-10 rounded-xl z-20 text-gray-300 bg-gray-600 grid place-items-center">
                  <h1>start route</h1>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: isClicked ? 1 : 0 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
            className={`${
              !isClicked ? "hidden" : " flex flex-col justify-around pt-5"
            } w-full h-[195%] bg-white`}
            style={{
              WebkitMask:
                "linear-gradient(to top, black 83% ,transparent 100% )",
            }}
          >
            <div className="updiv w-full h-22  flex justify-between gap-x-2  pt-2">
              <div className="textdiv w-[160px] h-[78px]  flex flex-col">
                <div className="heading w-full h-8 ">
                  <h1 className="text-[15px] font-semibold">
                    Embrect summit Trail
                  </h1>
                  <h1 className="text-[10px] text-gray-400">
                    Hick You heart with beats
                  </h1>
                </div>
                <div className="scores w-full h-11 border-t-2 mt-2 pt-1 border-gray-300  flex justify-between items-start">
                  <div className="div1 text-[12px]">
                    <h1>12.4Km</h1>
                    <h1 className="text-[10px] font-light">exercise</h1>
                  </div>
                  <div className="div2 text-[12px]">
                    {" "}
                    <h1>870m</h1>
                    <h1 className="text-[10px] font-light">ambulance</h1>{" "}
                  </div>
                  <div className="div3 text-[12px]">
                    {" "}
                    <h1>4hr 24min</h1>
                    <h1 className="text-[10px] font-light">chopper</h1>{" "}
                  </div>
                </div>
              </div>
              <div className="imgdiv  w-[90px] h-[58px] bg-gray-200/70 grid place-items-center rounded-xl">
                <GiPathDistance className="h-12 w-12" />
              </div>
            </div>
            <div className="lowdiv w-full h-33  text-[10px] gap-y-3 flex flex-col text-gray-400/80">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit repellat nam, reiciendis impedit, veritatis ad maiores
                cum fuga pariatur laudantium explicabo ipsam quaerat.
              </h1>{" "}
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit repellat nam, reiciendis impedit, veritatis ad maiores
                cum fuga pariatur laudantium explicabo ipsam quaerat. cum fuga
                pariatur laudantium explicabo ipsam quaerat.
              </h1>
            </div>
          </motion.div>
          <button
            onClick={() => setisClicked(!isClicked)}
            className="hover:cursor-pointer text-2xl"
          >
            <RiArrowDropDownLine />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Card2;
