"use client";
import { darkHeroItems } from "@/api/mockApiData";
import { DarkHeroItem } from "./dark-hero-item";

interface Props {
  items: [];
}

export const HomeDarkHero = ({ items }: Props) => {
  return (
    <DarkHeroItem item={darkHeroItems[0]} />
  );
};
