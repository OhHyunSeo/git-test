import { MovieDataType, MoviePlaceDataType } from '@/type/movieType';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewContainer from './ReviewContainer';
import PlaceBox from './PlaceBox';
import Divider from '../common/Divider';
import MovieInfo from './MovieInfo';
import { useRecoilState } from 'recoil';
import { selectPlaceState } from '@/atom/selectPlaceStore';

export default function MovieDetails({
    movie,
    handleSelect,
}: {
    movie: string;
    handleSelect: (validateMoviePlace: boolean) => void;
}) {
    const CATEGORY_LIST = ['촬영지 선택', '리뷰 보기'];
    const [currentPage, setCurrentPage] = useState(0);
    const [moviePlaceData, setMoviePlaceData] = useState<MoviePlaceDataType[]>([]);
    const [movieInfoData, setMovieInfoData] = useState<MovieDataType>();
    const [selectedPlace, setSelectedPlace] = useRecoilState(selectPlaceState);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/movie/${movie as string}`, {
                params: { title: decodeURIComponent(movie as string) },
            })
            .then((res) => {
                console.log(res);
                setMoviePlaceData(res.data.findMoviePlace);
                setMovieInfoData(res.data.findMovie[0]);
            });
    }, []);

    const handleClick = (movie: MoviePlaceDataType) => {
        console.log(movie);
        if (selectedPlace.find((item) => item.moviePlaceId === movie.moviePlaceId)) {
            const filter = selectedPlace.filter((item) => item.moviePlaceId !== movie.moviePlaceId);
            setSelectedPlace(filter);
        } else {
            setSelectedPlace((prev) => [...prev, movie]);
        }
    };

    return (
        movieInfoData && (
            <div className="w-full h-full min-w-[1920px]  flex flex-col items-center">
                <Divider />
                <div className="w-full flex">
                    {CATEGORY_LIST.map((category, i) => (
                        <div
                            key={i}
                            className={`flex flex-1 h-[50px] items-center justify-center gap-6 font-[600] cursor-pointer ${
                                i !== CATEGORY_LIST.length - 1 ? 'border-r border-[#c1c1c1]' : ''
                            }`}
                            onClick={() => setCurrentPage(i)}
                        >
                            <p>{category}</p>
                            {currentPage === i && <div className="w-3 h-3 rounded-full bg-[#3164f4]" />}
                        </div>
                    ))}
                </div>
                {CATEGORY_LIST[currentPage] === '촬영지 선택' ? (
                    <>
                        <MovieInfo
                            movieInfo={movieInfoData}
                            handleSubmit={() => handleSelect(selectedPlace.length > 0)}
                        />

                        <div className="w-full relative">
                            <Divider />
                            <div className="absolute left-1/2 -translate-x-1/2 -top-8">
                                <p className="text-[#030303] text-[24px] font-[700]">영화의 촬영지를 골라주세요</p>
                            </div>
                        </div>
                        <div className="w-full max-w-[1920px] grid grid-cols-5 gap-y-4 px-16 py-8">
                            {moviePlaceData?.map((movie) => (
                                <PlaceBox key={movie.moviePlaceId} movie={movie} handleClick={handleClick} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <ReviewContainer movieInfo={movieInfoData} />
                    </>
                )}
            </div>
        )
    );
}
