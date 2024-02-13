"use client";

import { HomeLightHeroItem } from "@/api/types";
import { LightHeroItem } from "./light-hero-item";

interface Props {
  items: HomeLightHeroItem[];
}

export const HomeLightHero = ({ items }: Props) => {
  return (
    <div>
      {items.map((item, index) => (
        <LightHeroItem key={index} item={item} />
      ))}
    </div>
  );
};
