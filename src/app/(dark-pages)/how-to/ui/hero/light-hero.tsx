"use client";

import { HowToLightHeroItem } from "@/api/types";
import { LightHeroItem } from "./light-hero-item";

interface Props {
  items: HowToLightHeroItem[];
}

export const HowToLightHero = ({ items }: Props) => {
  return (
    <div className="container">
      {items.map((item, index) => (
        <LightHeroItem key={index} item={item} />
      ))}
    </div>
  );
};
