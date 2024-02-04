import { MoviePlaceDataType } from "@/type/movieType";
import React from "react";
import CheckBackground from "../common/CheckBackground";

type PlaceBoxType = {
  movie: MoviePlaceDataType;
  selectedPlace: number[];
  handleClick: (id: number) => void;
};

export default function PlaceBox({
  movie,
  selectedPlace,
  handleClick,
}: PlaceBoxType) {
  return (
    <div
      key={movie.moviePlaceId}
      className="w-[340px] h-[220px] flex flex-col items-center"
    >
      <div
        className="w-full h-[90%] rounded-lg cursor-pointer relative"
        onClick={() => handleClick(movie.moviePlaceId)}
      >
        <img
          src={`/images/place/${movie.title}/${movie.placeName}.png`}
          alt="장소 이미지"
          className="w-full h-full rounded-lg"
        />
        {selectedPlace.includes(movie.moviePlaceId) && <CheckBackground />}
      </div>
      <div className="min-w-[60%] px-2 py-1 flex items-center justify-center bg-[#030303] rounded-full mt-[2px]">
        <p className="text-[18px] text-white">{movie.placeName}</p>
      </div>
    </div>
  );
}
