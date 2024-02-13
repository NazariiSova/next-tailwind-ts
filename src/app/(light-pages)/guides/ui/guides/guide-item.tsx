import  Image  from 'next/image'; 
import { IGuideItem } from "@/api/types";

interface Props {
  item: IGuideItem;
}

export const GuideItem = ({ item }: Props) => {
  return (
    <div className="w-full hover:scale-[105%] duration-500 rounded-[5px] bg-white overflow-hidden cursor-pointer">
      <div><Image src={item.img} alt="img" style={{ width: "100%" }} /></div> 
      <div className="flex flex-col justify-between gap-5 p-5">
        <div className="break-words font-bold text-[20px]">{item.title}</div> 
        <div className="text-secondary font-medium break-words">{item.description}</div>
      </div>
    </div>
  );
};
