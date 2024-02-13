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
  item: { title, description, list, primaryButton, img, path, isImgLeft },
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
      <div className="flex items-center gap-[100px] container font-normal">
        <div className="w-[450px]">
          <h2 className="text-[45px] mb-10 font-bold">{title}</h2>
          <p className="mb-5">{description}</p>
          <ul className="flex flex-col gap-5 mb-5">
            {list.map((item, index) => (
              <li className="flex gap-5" key={index}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 justify-start">
            <div>
                <div>
                      {primaryButton && (
                <Button title={primaryButton} variant="filled" size="medium" />
              )}
                </div>
            </div>

            <div className="text-green font-bold"> See Plans & Pricing </div>
          </div>
          <div className="text-[10px] text-gray-400 pt-2">
            No credit card required
          </div>
        </div>
        <div className="pt-10">
          <MyImg src={img} />
        </div>
      </div>
    </div>
  );
};
