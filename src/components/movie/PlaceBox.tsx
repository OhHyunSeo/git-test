import { MoviePlaceDataType } from '@/type/moviePlaceDataType';
import React from 'react';
import CheckBackground from '../common/CheckBackground';

type PlaceBoxType = {
    movie: MoviePlaceDataType
    selectedPlace: number[]
    handleClick: (id: number) => void
}

export default function PlaceBox({movie,selectedPlace, handleClick}: PlaceBoxType) {
    return (
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
    );
}

