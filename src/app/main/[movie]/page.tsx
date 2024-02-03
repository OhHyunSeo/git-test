"use client";
import CheckBackground from "@/components/common/CheckBackground";
import Divider from "@/components/common/Divider";
import MovieInfo from "@/components/movie/MovieInfo";
import { MoviePlaceDataType } from "@/type/moviePlaceDataType";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MovieDetailPage({ params }: {params: {movie: string | number}}) {
  const [movieData, setMovieData] = useState<MoviePlaceDataType[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<number[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_LOCAL_URL}/data.json`).then((res) => {
      const filterData = res.data.filter(
        (item: MoviePlaceDataType) => String(item.TITLE_NM) === decodeURIComponent(params.movie as string)
      );
      setMovieData(filterData);
    });
  }, []);

  const handleClick = (id: number) => {
    if(selectedPlace.includes(id)){
        const filter = selectedPlace.filter((item) => item!== id)
        setSelectedPlace(filter);
    }else{
        setSelectedPlace((prev) => [...prev, id]);
    }
  };

  const handleSubmit = () => {};

  return (
    <div className="w-full h-full min-w-[1920px]  flex flex-col items-center">
      <Divider />
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
          <div key={movie.SEQ_NO} className="w-[340px] h-[220px] flex flex-col items-center">
            <div
              className="w-full h-[90%] rounded-lg cursor-pointer relative"
              onClick={() => handleClick(movie.SEQ_NO)}
            >
              <img
                src={`/images/place/${movie.TITLE_NM}/${movie.PLACE_NM}.png`}
                alt="장소 이미지"
                className="w-full h-full rounded-lg"
              />
              {selectedPlace.includes(movie.SEQ_NO) && <CheckBackground />}
            </div>
            <div className="min-w-[60%] px-2 py-1 flex items-center justify-center bg-[#030303] rounded-full mt-[2px]">
              <p className="text-[18px] text-white">{movie.PLACE_NM}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
