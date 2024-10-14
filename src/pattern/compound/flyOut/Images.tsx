import React from "react";
import FlyOutMenu from "./FlyoutMenu";

const sources = [
  "https://images.pexels.com/photos/939478/pexels-photo-939478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/162829/squirrel-sciurus-vulgaris-major-mammal-mindfulness-162829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

function Image({ source }: { source: string }) {
  return (
    <div className="image-item relative w-72">
      {" "}
      {/* تعديل العرض ليتناسب مع الأنماط */}
      <img
        src={source}
        alt="Squirrel"
        className="w-full h-auto rounded-lg mb-5" // ضبط العرض الكامل مع الحواف المدورة
      />
      <div className="flyout absolute top-2 right-2">
        {" "}
        {/* إضافة نمط flyout */}
        <FlyOutMenu />
      </div>
    </div>
  );
}

export default function ImageList() {
  return sources.map((source, i) => <Image source={source} key={i} />);
}
