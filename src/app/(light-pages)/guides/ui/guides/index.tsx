import { GuideItem } from "./guide-item";
import { IGuideItem } from "@/api/types";

interface Props {
  items: null | IGuideItem[];
}

const GuidesList = ({ items }: Props) => {
  return (
    <div className="w-full py-10 bg-gray-100">
      <div className="container">
        <h1 className="w-full text-center text-[45px] text-dark font-bold hidden mb-10 lg:block">
          Guides and Tutorials
        </h1>
        <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-3">
          {items?.map((item: IGuideItem, index: number) => (
            <GuideItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GuidesList;