import React, { FormEvent, useState } from "react";
import ReviewBox from "./ReviewBox";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "@/atom/userStore";

export default function ReviewList({movieTitle}: {movieTitle: string}) {
  const [starRating, setStarRating] = useState(0);
  const [review, setReview] = useState("");
  const {userId} = useRecoilValue(userState);
  console.log(userId)

  const arr = new Array(5).fill(0);

  const handleStart = (index: number) => {
    if (index + 1 === starRating) {
      setStarRating(0);
    } else {
      setStarRating(index + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setReview(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const reqReview = {
      authorId: userId,
        content: review,
        rating: starRating,
        movieTitle: movieTitle,
    }
    axios.post(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/review`, reqReview).then((res) => {
      console.log(res);
    })
  }

  return (
    <div className="w-full flex flex-col gap-3 px-16 mt-8">
      <div className="flex items-end justify-between">
        <h2 className="text-[24px] text-[#333333] font-[700]">
          무비트립 사용자 평
        </h2>
        <div className="flex gap-2 items-center">
          <p className="text-[24px]">평가하기 {">"} </p>
          <div className="flex gap-2 items-center">
            {arr.map((item, i) => (
              <span
                key={i}
                className={i < starRating ? "text-[#ffc107]" : "text-[#c1c1c1]"}
                onClick={() => handleStart(i)}
              >
                {i < starRating ? (
                  <img
                    src="/images/activeStar.png"
                    alt="별점 이미지"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src="/images/defaultStar.png"
                    alt="별점 이미지"
                    className="w-6 h-6"
                  />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <form className="flex flex-col items-end gap-2" onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-[#9356d6] rounded-lg p-4"
          name="review"
          cols={5}
          rows={3}
          onChange={handleChange}
        />
        <button className="w-[140px] h-[50px] bg-[#9356d6] text-white text-[18px] rounded-lg">
          <p>리뷰 등록</p>
        </button>
      </form>
      <div className="flex flex-col gap-4">
        {arr.map((item, i) => (
          <ReviewBox key={i} />
        ))}
      </div>
    </div>
  );
}
