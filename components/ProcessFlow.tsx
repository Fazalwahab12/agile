import React from "react";
import Image from "next/image";

const ProcessFlow = () => {
  return (
    <div className="relative bg-white ">
      {/* Vector Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Vector.svg"
          alt="Curved Vector Line"
          objectFit="cover"
          width={1918}
          height={400}
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center space-x-20 z-10">
        {/* First Box */}
        <div className="flex mt-[142] flex-col items-center bg-[#F5F7FA] p-8 rounded-lg shadow-md w-[300px]">
          <Image
            src="/assets/rpa-robotic-process-automation-icon.svg"
            alt="RPA"
            width={70}
            height={70}
          />
          <p className="mt-4  text-xs font-medium text-gray-800">
            RPA, CPA-Gen(AI)
          </p>
        </div>

        {/* Middle Box */}
        <div className="flex flex-col mt-56 items-center bg-[#0F172A] p-8 rounded-lg shadow-md w-[300px] text-white">
          <Image
            src="/assets/computer-internet-network-icon.svg"
            alt="IT Infrastructure"
            width={70}
            height={70}
          />
          <p className="mt-4 text-xs font-medium">IT Infrastructure</p>
        </div>

        {/* Third Box */}
        <div className="flex flex-col items-center bg-[#F5F7FA] p-6 rounded-lg shadow-md w-[300px]">
          <Image
            src="/assets/cyber.svg"
            alt="Cyber Security"
            width={70}
            height={70}
          />
          <p className="mt-4 text-xs font-medium text-gray-800">
            Cyber Security
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
