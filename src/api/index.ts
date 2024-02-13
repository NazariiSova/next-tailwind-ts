import { homeLightHeroListItems, howToLightHeroListItems, mockFooterData, mockGuideData } from "./mockApiData";

const getHomeLightItems = async () => {
  return homeLightHeroListItems;
};
const getHowToLightItems = async () => {
  return howToLightHeroListItems;
};

const getFooterData = async () => {
  return mockFooterData;
};

const getGuideData = async () => {
  return mockGuideData;
}

export const Api = {
  getHowToLightItems,
  getHomeLightItems,
  getFooterData,
  getGuideData,
};
