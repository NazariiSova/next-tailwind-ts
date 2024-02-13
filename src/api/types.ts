export interface HomeLightHeroItem {
  category: string;
  title: string;
  description: string;
  list: string[];
  button: string;
  img: any;
  path: string;
  isImgLeft: boolean;
}
export interface HowToLightHeroItem {
  title: string;
  description: string;
  list?: string[];
  button?: string;
  img: any;
  path: string;
  isImgLeft: boolean;
}


export interface FooterSection {
  title: string;
  list: FooterItem[];
}

export interface FooterItem {
  item: string;
  path: string;
}

export interface DarkHeroItems {
  title: string;
  description: string;
  list: string[];
  primaryButton?: string;
  secondaryButton?: string;
  img: any;
  path: string;
  isImgLeft: boolean;
}

export interface IGuideItem {
  title: string,
  description: string,
  img: any;
}