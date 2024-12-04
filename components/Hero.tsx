"use client";

import { useState } from "react";
import Wrapper from "./shared/Wreper";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <Wrapper>
      <section
        className="relative flex  
bg-custom-gradient"
      >
        {/* Background color overlay */}
        <div className="absolute inset-0 bg-black/80 z-10 rounded-lg" />{" "}
        <div className="  grid md:grid-cols-2 gap-12 items-center z-20">
          <div className="  bg md:px-16">
            <div className="flex items-center space-x-4">
              <div className="w-[50px] h-[2px] bg-white"></div>
              <p className="text-[#FFFFFF] font-gothic_book text-[18px] font-medium">
                ONE OF THE BEST SOLUTIONS
              </p>
            </div>

            <h1 className="font-avantgarde text-[39px]  leading-[46px] pt-1 text-left  ">
              Providing 360° Solutions For IT Infrastructure Support Anywhere in
              UAE
            </h1>
            <p className="font-gothic_book text-[15px] font-normal pt-1 leading-[28px] text-left">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>

            <form className="flex mt-7 items-center bg-white  p-1  rounded-sm">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your mail address"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2  bg-[#0f172a] text-white rounded-r-md hover:bg-[#1e293b] transition-colors duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="hidden md:block  relative w-full aspect-square rounded-lg overflow-hidden">
            {/* Right side decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full animate-pulse" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute  inset-0  h-[600px] object-cover"
            >
              <source src="/assets/ai.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
