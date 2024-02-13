"use client";

import { useEffect, useState } from "react";
import { HomeDarkHero } from "./ui/hero/dark-hero";
import { HomeLightHero } from "./ui/hero/light-hero";
import { CreateNewsLetter } from "@/shared/ui/createNewsLetter";
import { Video } from "./ui/video";
import { Api } from "@/api";
import type { HomeLightHeroItem } from "@/api/types";

export default function Home() {
  const [lightItems, setLightItems] = useState<HomeLightHeroItem[]>([]);

  useEffect(() => {
    getLiteItems()
  }, []);

  const getLiteItems = async () => {
    const items = await Api.getHomeLightItems();
    console.log(items);
    setLightItems(items);
  };

  return (
    <div className="w-full content-center justify-center">
      <HomeDarkHero />
      <Video />
      <HomeLightHero items={lightItems} />
      <CreateNewsLetter/>
    </div>
  );
}
