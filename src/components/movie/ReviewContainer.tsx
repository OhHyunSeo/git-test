import React from "react";
import ReviewList from "./ReviewList";
import Divider from "../common/Divider";

export default function ReviewContainer({movieTitle}: {movieTitle: string}) {

    const handleClick = () => {}
  return (
    <div className="w-full max-w-[1920px] flex flex-col justify-center mt-4">
      <div className="w-full flex px-16 py-3  gap-5">
        <div className="w-[200px] h-[250px]  flex items-center justify-center border-r border-[#c1c1c1]">
          <img
            className="min-w-[200px] h-full rounded-lg"
            src={`/images/poster/${movieTitle}.jpg`}
            alt="영화 포스터 이미지"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-[#030303] font-[700]">
            <p className="text-[24px]">{movieTitle}</p>
            <p>개봉일: 2014년 12월 17일</p>
            <p>평점: 3.7</p>
            <p>
              줄거리: 부산광영기세 있는 국제 시장을 배경으로 한 휴만 드라마
              영화이다. 1950년대 ..... 줄거리: 부산광영기세 있는 국제 시장을
              배경으로 한 휴만 드라마 영화이다. 1950년대 .....줄거리:
              부산광영기세 있는 국제 시장을 배경으로 한 휴만 드라마 영화이다.
              1950년대 .....줄거리: 부산광영기세 있는 국제 시장을 배경으로 한
              휴만 드라마 영화이다. 1950년대 .....줄거리: 부산광영기세 있는 국제
              시장을 배경으로 한 휴만 드라마 영화이다. 1950년대 .....
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[21px]"></div>
      </div>
      <ReviewList movieTitle={movieTitle} />
    </div>
  );
}
