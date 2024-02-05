import { userState } from "@/atom/userStore";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useRecoilValue } from "recoil";

export default function ReviewPostArea({
  movieTitle,
  starRating,
  handleStarInitial,
  getMovieReview
}: {
  movieTitle: string;
  starRating: number;
  handleStarInitial: () => void;
  getMovieReview: () => void;
}) {
  const [reviewText, setReviewText] = useState("");
  const user = useRecoilValue(userState);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setReviewText(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const reqReview = {
      authorId: Number(user.userId),
      authorName: user.userName,
      content: reviewText,
      rating: starRating,
      movieTitle: movieTitle,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/review`, reqReview)
      .then((res) => {
        handleStarInitial();
        setReviewText("");
        console.log(res);
        getMovieReview();
      });
  };

  return (
    <form className="flex flex-col items-end gap-2" onSubmit={handleSubmit}>
      <textarea
        className="w-full border border-[#9356d6] rounded-lg p-4"
        name="review"
        cols={5}
        rows={3}
        value={reviewText}
        onChange={handleChange}
      />
      <button className="w-[140px] h-[50px] bg-[#9356d6] text-white text-[18px] rounded-lg">
        <p>리뷰 등록</p>
      </button>
    </form>
  );
}
