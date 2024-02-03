import React from "react";
import ReviewBox from "./ReviewBox";

export default function ReviewList() {
  const arr = new Array(5).fill(0);
  return (
    <div className="w-full flex flex-col gap-3 px-16 mt-8">
      <div className="flex items-end justify-between">
        <h2 className="text-[24px] text-[#333333] font-[700]">
          무비트립 사용자 평
        </h2>
        <div className="flex gap-2 items-center">
            <p className="text-[24px]">평가하기</p>
            <p className="text-[24px]">★★★★★</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <textarea
          className="w-full border border-[#9356d6] rounded-lg p-4"
          name=""
          id=""
          cols={5}
          rows={3}
        />
        <button className="w-[140px] h-[50px] bg-[#9356d6] text-white text-[18px] rounded-lg">
          <p>리뷰 등록</p>
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {arr.map((item, i) => (
          <ReviewBox key={i} />
        ))}
      </div>
    </div>
  );
}
