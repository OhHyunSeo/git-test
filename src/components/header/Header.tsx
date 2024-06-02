"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>("");
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("id");
      localStorage.removeItem("email");
    }
    router.push("/");
  };

  const path = usePathname();
  const headerValidate = path === "/" || path === "/signUp";

  const HEADER_CATEGORY_LIST = [
    {
      name: "메인화면",
      path: "/movies",
    },
    {
      name: "리더보드",
      path: "/leaderboard",
    },
  ];

  useEffect(() => {
    setUserId(localStorage.getItem("id"));
  }, []);

  return !headerValidate ? (
    <div className="w-full h-[106px] min-w-[1920px] px-[45px] flex items-center justify-between bg-white">
      <Link href={"/movies"} className="flex items-center">
        <Image
          src="/logo/logo.png"
          alt="로고 이미지"
          width={120}
          height={120}
        />
        <h1 className="text-[48px] font-[500]">무비 트립</h1>
      </Link>
      <ul className="w-[20%] flex items-center justify-between gap-10 text-[32px]">
        {HEADER_CATEGORY_LIST.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`${
                path.includes(item.path) && "text-[#9356d6] font-[600]"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-10">
        <div
          className="bg-black border-2 border-purple-500 rounded-md px-2 flex items-center justify-center gap-1 cursor-pointer"
          onClick={handleLogout}
        >
          <img src="/images/Logout.png" alt="" className="w-8 h-8" />
          <button className="text-[18px] font-[500]  text-white p-2">
            로그아웃
          </button>
        </div>
        <Link href={"/mypage"} className="flex flex-col items-center">
          <Image
            src={"/images/Mypage.png"}
            alt="마이 페이지"
            width={60}
            height={60}
          />
          <p className="font-[700]">{userId}</p>
        </Link>
      </div>
    </div>
  ) : null;
}
