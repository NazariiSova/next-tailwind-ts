import Image from "next/image";
import { HowToLightHeroItem } from "@/api/types";
import { MyImg } from "@/shared/ui/modal-img/modal-img";
import { Check } from "@/shared/assets/icons/check";
import { Button } from "@/shared/ui/button/button";

interface Props {
  item: HowToLightHeroItem;
}

export const LightHeroItem = ({
  item: { title, description, list, button, img, path, isImgLeft },
}: Props) => {
  return (
    <div className="flex flex-col mt-[100px] gap-[50px] lg:flex-row">
      {isImgLeft && (
        <div className="w-full flex items-center justify-center lg:max-w-[50%]">
          <MyImg src={img} />
        </div>
      )}
      <div>
        <h1 className="text-[40px] text-dark font-bold mb-5" dangerouslySetInnerHTML={{ __html: title}}></h1>
        <div className="mb-5">{ description }</div>
        <ul className="flex flex-col gap-5">
          {list?.map((item, index) => (
            <li key={index} className="flex gap-5">
              <Check /> 
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          {button && (
            <Button title={button} variant="filled" size="medium" className="w-full lg:w-fit" />
          )}
        </div>
      </div>
      {!isImgLeft && (
        <div className="w-full flex items-center justify-center lg:max-w-[50%]">
          <MyImg src={img} />
        </div>
      )}
    </div>
  );
};
