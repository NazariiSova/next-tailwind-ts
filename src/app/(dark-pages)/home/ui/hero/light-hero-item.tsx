import Image from "next/image";
import { HomeLightHeroItem } from "@/api/types";
import { MyImg } from "@/shared/ui/modal-img/modal-img";
import { Check } from "@/shared/assets/icons/check";
import { Button } from "@/shared/ui/button/button";

interface Props {
  item: HomeLightHeroItem;
}

export const LightHeroItem = ({
  item: { category, title, description, list, button, img, path, isImgLeft },
}: Props) => {
  return (
    <div className="flex flex-col container mt-[100px] gap-[50px] items-center justify-between lg:flex-row">
      {isImgLeft ? <MyImg src={img} /> : null}
      <div className="w-full flex flex-col gap-5 md:max-w-[660px] lg:max-w-[50%] lg:w-[50%]">
        <h2 className="text-blue uppercase font-bold text-[16px] tracking-wider lg:text-[18px]">{category}</h2>
        <h1 className="text-[25px] text-dark font-bold lg:text-[40px]">{title}</h1>
        <p className="text-secondary">{description}</p>
        <ul className="flex flex-col gap-4">
          {list.map((item, index) => (
            <li key={index} className="flex gap-5">
              <Check />
              <span className="text-secondary text-[1rem] font-normal">{item}</span> 
            </li>
          ))}
        </ul>
        <div>
          <div>
            {button && <Button title={button} variant="filled" size="medium" className="w-full lg:w-fit"/>}
          </div>
        </div>
      </div>
      {!isImgLeft ? <MyImg src={img} /> : null}
    </div>
  );
};
