import Image from "next/image";
import { DarkHeroItems } from "@/api/types";
import darkHighImage from "@/shared/assets/bg/dark-high.svg";
import { Button } from "@/shared/ui/button/button";
import { Check } from "@/shared/assets/icons/check";
import { MyImg } from "@/shared/ui/modal-img/modal-img";

interface Props {
  item: DarkHeroItems;
}

export const DarkHeroItem = ({
  item: { title, description, list, img, path, isImgLeft },
}: Props) => {
  return (
    <div className="w-full relative py-[130px] h-fit bg-cover text-white block">
      <div className="w-full h-full absolute top-0 -z-10">
        <Image
          src={darkHighImage}
          alt="bg"
          style={{ width: "100vw", height: "100%" }}
        />
      </div>
      <div className="w-full flex flex-col items-center gap-[100px] container font-normal lg:flex-row">
        <div className="w-full lg:max-w-[50%]">
          <h2 className="text-[45px] mb-10 font-bold">{title}</h2>
          <p className="mb-5">{description}</p>
          <ul className="grid grid-cols-2 gap-5 mb-5">
            {list.map((item, index) => (
              <li className="flex gap-5 items-center" key={index}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-10">
          <MyImg src={img} />
        </div>
      </div>
    </div>
  );
};
