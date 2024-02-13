"use client";
import React, { useEffect, useState } from "react";
import { LogoIcon } from "@/shared/assets";
import { Button } from "@/shared/ui/button/button";
import Image from "next/image";
import { Api } from "@/api";
import type { FooterSection } from "@/api/types";

export const Footer = () => {
  const [footerData, setFooterData] = useState<FooterSection[]>([]);

  useEffect(() => {
    getFooterData();
  }, []);

  const getFooterData = async () => {
    const data = await Api.getFooterData();
    setFooterData(data);
  };

  return (
    <footer className="w-full mt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row">
          <div>
            <li className="flex flex-col gap-10 items-center">
              <ul>
                <Image src={LogoIcon} alt=""/>
              </ul>
              <ul className="hidden md:block w-full">
                <Button title="Contact us" className="w-full" />
              </ul>
            </li>
          </div>
          <div className="w-full flex gap-10">
            {footerData.map((section, index) => (
              <div key={index} className="w-full flex flex-col gap-5">
                <div className="hidden font-semibold text-[1.3rem] xl:block">{section.title}</div>
                <ul className="flex flex-col gap-5">
                  {section.list.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        href={item.path} 
                        className="cursor-pointer duration-300 hover:text-green break-words text-secondary lg:font-medium"
                      >
                        {item.item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center content-center gap-5 py-5 text-[0.8rem] font-normal">
          <div>Copyright © 2020-2024 Maildroppa</div>
          <div>Sitemap</div>
        </div>
      </div>
    </footer>
  );
};
