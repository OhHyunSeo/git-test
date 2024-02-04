"use client";
import Divider from "@/components/common/Divider";
import MovieInfo from "@/components/movie/MovieInfo";
import PlaceBox from "@/components/movie/PlaceBox";
import ReviewContainer from "@/components/movie/ReviewContainer";
import { MoviePlaceDataType } from "@/type/movieType";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

export default function MovieDetailPage({
  params,
}: {
  params: { movie: string | number };
}) {
  const CATEGORY_LIST = ["촬영지 선택", "리뷰 보기"];
  const [currentPage, setCurrentPage] = useState(0);
  const [movieData, setMovieData] = useState<MoviePlaceDataType[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<number[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/movie/${params.movie}`, {
        params: { title: decodeURIComponent(params.movie as string) },
      })
      .then((res) => {
        console.log(res)
        setMovieData(res.data.findMoviePlace);
      });
  }, []);

  const handleClick = (id: number) => {
    if (selectedPlace.includes(id)) {
      const filter = selectedPlace.filter((item) => item !== id);
      setSelectedPlace(filter);
    } else {
      setSelectedPlace((prev) => [...prev, id]);
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="w-full h-full min-w-[1920px]  flex flex-col items-center">
      <Divider />
      <div className="w-full flex">
        {CATEGORY_LIST.map((category, i) => (
          <div
            key={i}
            className={`flex flex-1 h-[50px] items-center justify-center gap-6 font-[600] cursor-pointer ${
              i !== CATEGORY_LIST.length - 1 ? "border-r border-[#c1c1c1]" : ""
            }`}
            onClick={() => setCurrentPage(i)}
          >
            <p>{category}</p>
            {currentPage === i && (
              <div className="w-3 h-3 rounded-full bg-[#3164f4]" />
            )}
          </div>
        ))}
      </div>
      {CATEGORY_LIST[currentPage] === "촬영지 선택" ? (
        <>
          <MovieInfo
            movieTitle={decodeURIComponent(params.movie as string)}
            handleSubmit={handleSubmit}
          />

          <div className="w-full relative">
            <Divider />
            <div className="absolute left-1/2 -translate-x-1/2 -top-8">
              <p className="text-[#030303] text-[24px] font-[700]">
                영화의 촬영지를 골라주세요
              </p>
            </div>
          </div>
          <div className="w-full max-w-[1920px] grid grid-cols-5 gap-y-4 px-16 py-8">
            {movieData?.map((movie) => (
              <PlaceBox
                key={movie.moviePlaceId}
                movie={movie}
                handleClick={handleClick}
                selectedPlace={selectedPlace}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <ReviewContainer
            movieTitle={decodeURIComponent(params.movie as string)}
          />
        </>
      )}
    </div>
  );
}
