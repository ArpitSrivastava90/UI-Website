import React from "react";
import Img from "../images/try2.jpg";
import Img1 from "../images/try3.jpg";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Card3 = () => {
  return (
    <div
      className="w-full h-full relative bg-center bg-cover"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      <div
        className="absolute inset-0  bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100 pointer-events-none mix-blend-overlay backdrop-blur-xl"
        style={{
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      ></div>

      <div className="container  flex justify-center items-center absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  p-1  w-70 h-72 bg-gray-800/70 rounded-4xl">
        <div
          className={`imgContainer  w-[95%] h-[95%] bg-center bg-cover rounded-3xl flex flex-col justify-between py-2 px-3`}
          style={{
            backgroundImage: `url(${Img})`,
          }}
        >
          <div className="upDiv w-full h-14  flex justify-around items-center">
            <div className="udiv1 h-10 w-34 rounded-3xl bg-black/20  p-1 flex justify-between items-center">
              <div
                className="smallPic h-[32px] w-[32px] bg-center bg-cover rounded-full"
                style={{
                  backgroundImage: `url(${Img1})`,
                }}
              ></div>
              <div className="sidebyCon flex-1 h-[30px] flex-col text-xs pl-1">
                <h1 className="text-white font-medium">Marcus Louis</h1>
                <h1 className="font-light text-gray-100">@Marcuc</h1>
              </div>
            </div>
            <div className="udiv2 h-9 w-9 bg-black/20 rounded-full grid place-items-center text-gray-300 text-2xl ">
              {" "}
              <MdOutlineFileUpload />{" "}
            </div>
            <div className="udiv3 h-9 w-9 bg-black/20 grid place-items-center rounded-full text-gray-300 text-lg">
              <FaHeart />
            </div>
          </div>
          <div className="dwnDiv w-full h-23  ">
            <div className="numSec w-full h-10  relative px-3 flex justify-between items-center text-white text-lg font-medium">
              <h1>1:01</h1>
              <h1>2:10</h1>
              <div className="tobeCompleted absolute left-0 bottom-1 w-full h-1 rounded-lg bg-gray-500"></div>{" "}
              <div className="tobeCompleted absolute left-0 bottom-1 w-[50%] rounded-lg h-1 bg-gray-100"></div>
            </div>
            <div className="playSec h-13  flex justify-around px-7 items-center">
              <div className="h1 w-10 h-10 bg-white/20  rounded-full flex justify-center items-center text-gray-300 text-xl">
                <IoPlaySkipBackSharp />
              </div>
              <div className="h1 w-10 h-10 bg-white/20 rounded-full flex justify-center items-center text-gray-300 text-xl pl-1">
                <FaPlay />
              </div>
              <div className="h1 w-10 h-10 bg-white/20 rounded-full flex justify-center items-center text-gray-300 text-xl">
                <IoPlaySkipForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
