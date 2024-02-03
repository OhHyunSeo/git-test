import React from "react";

export default function MovieInfo({movieTitle, handleSubmit}: {movieTitle: string, handleSubmit: () => void}) {

  return (
    <div className="w-full max-w-[1920px] flex justify-center mt-4">
      <div className="w-full flex px-16 py-4  gap-5">
        <div className="w-[280px] h-[350px]  flex items-center justify-center border-r border-[#c1c1c1]">
          <img
            className="min-w-[252px] h-full rounded-lg"
            src={`/images/poster/${movieTitle}.jpg`}
            alt="영화 포스터 이미지"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 text-[#030303] font-[700]">
            <p className="text-[24px]">영화 정보</p>
            <p>
              줄거리: 부산광영기세 있는 국제 시장을 배경으로 한 휴만 드라마
              영화이다. 1950년대 ..... 줄거리: 부산광영기세 있는 국제 시장을 배경으로 한 휴만 드라마
              영화이다. 1950년대 .....줄거리: 부산광영기세 있는 국제 시장을 배경으로 한 휴만 드라마
              영화이다. 1950년대 .....줄거리: 부산광영기세 있는 국제 시장을 배경으로 한 휴만 드라마
              영화이다. 1950년대 .....줄거리: 부산광영기세 있는 국제 시장을 배경으로 한 휴만 드라마
              영화이다. 1950년대 .....
            </p>
            <p>개봉연도: 2014년 12월 17일</p>
            <p>관객수: 14,265,682명</p>
            <p>평점: IMDb 기준 3.7</p>
          </div>
        </div>
        <div className="flex flex-col gap-[21px]"></div>
      </div>

      <div className="flex flex-col items-end gap-5 px-16 py-4">
        <div className="w-[282px] h-[52px] flex items-center justify-between p-2 bg-black rounded-lg">
            <p className="text-[#f2f2f2] text-[24px]">{movieTitle}</p>
            <img src="/images/Search.png" alt="검색 아이콘" className="w-[40px] h-[40px]"/>
        </div>
        <button className="w-[140px] h-[50px] bg-[#9356d6] text-white text-[18px] rounded-lg" onClick={handleSubmit}>
            <p>선택 완료</p>
        </button>
        <img src="/images/Check.svg" alt="" />
      </div>
    </div>
  );
}
