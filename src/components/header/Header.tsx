"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <div className="w-full h-[106px] min-w-[1920px] px-[45px] flex items-center justify-between bg-white">
      <Link href={"/main"} className="flex items-center">
        <Image
          src="/logo/logo.png"
          alt="로고 이미지"
          width={120}
          height={120}
        />
        <h1 className="text-[48px] font-[500]">무비 트립</h1>
      </Link>
      <ul className="w-[30%] flex items-center justify-between gap-20 text-[32px]">
        <li>
          <Link href={"/main"}>메인화면</Link>
        </li>
        <li>
          <Link href={"/community"}>커뮤니티</Link>
        </li>
        <li>
          <Link href={"/leaderboard"}>리더보드</Link>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-10">
        <div className="bg-black border-2 border-purple-500 rounded-md px-2 flex items-center justify-center gap-1">
            <img src="/images/Logout.png" alt="" className="w-8 h-8" />
          <button
            className="text-[18px] font-[500] cursor-pointer text-white p-2"
            onClick={handleLogout}
          >
            로그아웃
          </button>
        </div>
        <Link href={"/mypage"}>
          <Image
            src={"/images/Mypage.png"}
            alt="마이 페이지"
            width={85}
            height={85}
          />
        </Link>
      </div>
    </div>
  );
}
