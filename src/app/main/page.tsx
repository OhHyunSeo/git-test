"use client";
import Divider from "@/components/common/Divider";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MoviePlaceDataType } from "@/type/moviePlaceDataType";

export default function MainPage() {
  const [movies, setMovies] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_LOCAL_URL}/data.json`).then((res) => {
      const filterData = [
        ...new Set(res.data.map((item: MoviePlaceDataType) => String(item.TITLE_NM))),
      ];
      console.log(filterData);
      setMovies(filterData as string[]);
    });
  }, []);

  return (
    <div className="w-full h-full min-w-[1920px] flex flex-col items-center">
      <Divider />
      <div className="w-full max-w-[1920px] flex flex-col items-center px-40 py-8">
        <div className="w-full flex items-center justify-between py-4">
          <h2 className="font-[600] text-[24px]">여행에 담고 싶은 컨텐츠를 선택하세요</h2>

        </div>
        <div className="w-full grid grid-cols-5 gap-y-6">
          {movies.map((movie, i) => {
            return (
              <Link key={movie} href={`/main/${movie}`} className="flex flex-col items-start">
                <div key={i} className="w-[250px] h-[320px] rounded-lg">
                  <img
                    className="w-full h-full rounded-[inherit]"
                    src={`/images/poster/${movie}.jpg`}
                    alt="로고 이미지"
                  />
                </div>
                <p>{movie}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
