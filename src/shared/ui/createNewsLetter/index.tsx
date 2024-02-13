import React from "react";
import { Button } from "@/shared/ui/button/button";
import Image from "next/image";
import darkHighImage from "@/shared/assets/bg/dark-high.svg";

export const CreateNewsLetter = () => {
  return (
    <div className="container">
      <div className="w-full flex flex-col justify-between items-center relative rounded-[20px] p-20 mt-10 overflow-hidden lg:flex-row">
        <div className="w-full h-full absolute left-0 top-0 -z-10">
          <Image
            src={darkHighImage}
            alt="bg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <h1 className="w-full text-center text-white text-[25px] font-bold lg:text-[50px] lg:max-w-[40%] lg:text-left">
          Ready to create your newsletter?
        </h1>
        <div className="w-full min-w-fit lg:w-[30%]">
          <Button title="Try Maildroppa For Free" variant="filled" className="w-full mb-5"/>
          <div className="w-full text-center text-green font-bold cursor-pointer duration-500 hover:text-blue">
            in only 5 minutes!
          </div>
        </div>
      </div>
    </div>
  )
}