import Image from "next/image";

export default function TechLogos() {
  return (
    <div className="w-full  bg-white pt-5">
      <div className=" ">
        <h2 className="font-avantgarde text-[30px]   leading-[60px] tracking-[-0.02em] text-center">
          Technologies we specialize in
        </h2>

        <div className="grid grid-cols-2 ">
          {/* First Image Container */}

          <Image
            src="/assets/brands.png"
            alt="SAP"
            className="object-contain"
            height={100}
            width={970}
          />

          <Image
            src="/assets/brands.png"
            alt="SAP"
            className="object-contain"
            height={100}
            width={970}
          />
        </div>
      </div>
    </div>
  );
}
