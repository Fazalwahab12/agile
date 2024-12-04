"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wrapper from "./shared/Wreper";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isFixed, setIsFixed] = useState(true); // Start with fixed navbar

  // Update state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(false); // Remove fixed position once scrolled
      } else {
        setIsFixed(true); // Keep fixed position at the top when at the top of the page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isFixed
          ? "fixed top-0 z-50 backdrop-blur-sm bg-black/80"
          : "relative bg-black"
      } w-full transition-all ease-in-out duration-300`}
    >
      <div className="pt-6 md:px-16 h-16 flex items-center space-x-[180px]">
        <Link href="/" className="text-white text-2xl font-bold">
          Agile
        </Link>

        <div className="hidden md:flex items-center space-x-28">
          <div className="space-x-10">
            <Link href="/" className="border-white">
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-white hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/agileaihub.ai"
              className="text-white hover:text-primary transition-colors"
            >
              AI Hub
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-primary transition-colors"
            >
              Resources
            </Link>
          </div>
          <div>
            <Button
              variant="outline"
              className="mx-8 border-white bg-white text-black"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
