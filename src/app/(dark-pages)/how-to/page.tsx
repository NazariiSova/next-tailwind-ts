"use client";

import { useEffect, useState } from "react";
import { HowToDarkHero } from "./ui/hero/dark-hero";
import { HowToLightHero } from "./ui/hero/light-hero";
import { CreateNewsLetter } from "@/shared/ui/createNewsLetter";
import { Api } from "@/api";
import type { HowToLightHeroItem } from "@/api/types";

export default function Home() {
  const [lightItems, setLightItems] = useState<HowToLightHeroItem[]>([]);

  useEffect(() => {
    getLiteItems()
  }, []);

  const getLiteItems = async () => {
    const items = await Api.getHowToLightItems();
    console.log(items);
    setLightItems(items);
  };

  return (
    <div className="w-full content-center justify-center ">
      <HowToDarkHero />
      <HowToLightHero items={lightItems} />
      <CreateNewsLetter/>
    </div>
  );
}
