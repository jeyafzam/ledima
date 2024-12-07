import React from "react";
import Image from "next/image";
import {
  PrinterIcon,
  GiftIcon,
  PencilIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const HeroSection: React.FC = () => {
  return (
    <section className="relative mb-16 ">
      <div className="px-4 text-center container mx-auto max-w-[1100px] ">
        <div className="bg-custom-blue text-white pt-8 pb-[100px]">
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center">
              <Image
                src="/images/4.png"
                width={270}
                height={200}
                alt="Illustration"
                style={{ filter: "invert(1) brightness(1.3) " }}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className=" md:text-3xl font-bold ">
              هر چیز که در جستن آنی ... آنی
            </h1>
            <button className="bg-[#FF8B22] text-[#1c1815] px-3 py-0.5 rounded-full  mt-1">
              کانون تبلیغات آریا
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[900px] absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white shadow-[11px_11px_1px_1px_rgba(200,190,210,0.6)] p-6 flex items-center justify-between w-11/12 max-w-4xl">
        <div className="flex items-center justify-around w-full">
          {[
            {
              icon: <PrinterIcon className="h-8 w-8 text-blue-500" />,
              label: "انواع چاپ",
            },
            {
              icon: <GiftIcon className="h-8 w-8 text-blue-500" />,
              label: "هدایای تبلیغاتی",
            },
            {
              icon: <PencilIcon className="h-8 w-8 text-blue-500" />,
              label: "طراحی تخصصی",
            },
            {
              icon: <VideoCameraIcon className="h-8 w-8 text-blue-500" />,
              label: "چند رسانه ای",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center  gap-8 text-gray-700 space-y-2 ${index !== 3 ? "border-l pl-4" : ""}`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
