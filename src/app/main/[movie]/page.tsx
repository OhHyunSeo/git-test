"use client";
import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page({ params }) {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/data.json").then((res) => {
      const filterData = res.data.filter(
        (item) => String(item.TITLE_NM) === params.movie
      );
      console.log(filterData);
      setMovieData(filterData);
    });
  }, []);

  const handleClick = () => {};

  return (
    <div className="w-full h-full min-w-[1920px] flex flex-col items-center">
      <Divider />

      <div className="w-full flex justify-center px-10 mt-4">
        <div className="w-[400px] flex flex-col items-center gap-5">
          <div className="w-4/5 rounded-lg">
            <img
              className="w-full rounded-[inherit]"
              src={`/images/poster/${params.movie}.jpg`}
              alt="영화 포스터 이미지"
            />
          </div>
          <Button
            name="촬영지 기반 최단 경로 자동 선택"
            onClick={handleClick}
          />
          <Button name="사용자 지정 경로 선택" onClick={handleClick} />
        </div>
        <div className="w-2/3"></div>
      </div>
    </div>
  );
}
