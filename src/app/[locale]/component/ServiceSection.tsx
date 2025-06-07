"use client";
import { FoodPackage } from "@/assests";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type TService = {
  id: number;
  title: string;
  description: string;
};

export default function ServiceSection() {
  const t = useTranslations("Services");
  const services = t.raw("items") as TService[];

  // Select "Branding" by default
  const defaultService =
    services.find((s) => s.title === "Branding") || services[0];
  const [selectedService, setSelectedService] =
    useState<TService>(defaultService);

  return (
    <div
      id="services"
      className="h-[70vh] bg-black flex items-center lg:py-5 xl:py-10"
    >
      <div className="w-11/12 mx-auto flex flex-col h-full justify-center">
        <p className="font-koulen text-4xl text-white">REEM</p>

        <div className="flex flex-1 items-center h-full gap-10">
          {/* Left pane */}
          <div className="flex-1/4 flex flex-col justify-center items-start space-y-7 w-2/5 h-full">
            <Image
              className="w-2/3 h-1/3 object-cover"
              alt="Food Image"
              src={FoodPackage}
            />
            <div className="space-y-4 font-inter">
              <p className="text-[#F4F4F580]">{selectedService.title}</p>
              <p className="text-[#F4F4F5] xl:w-1/2 lg:w-full">
                {selectedService.description}
              </p>
            </div>
          </div>

          {/* Right pane */}
          <div className="flex-3/4 font-inter flex flex-col gap-7 justify-center">
            {services.map((service, index) => {
              const isSelected = service.id === selectedService.id;

              return (
                <div
                  key={service.id}
                  className="space-y-5 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-start space-x-1">
                    <p
                      className={`font-semibold lg:text-4xl xl:text-5xl ${
                        isSelected ? "text-[#F4F4F5]" : "text-[#F4F4F580]"
                      }`}
                    >
                      {service.title}
                    </p>
                    <span className="text-xm font-medium text-white">{`{${
                      index + 1
                    }}`}</span>
                  </div>
                  <div className="border-t border-[#FFFFFF80]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
