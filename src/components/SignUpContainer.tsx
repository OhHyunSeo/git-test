"use client";
import React, { useState } from "react";
import Input from "./common/Input";
import { useRouter } from "next/navigation";

export default function SignUpContainer() {
  const [sighUpForm, setsighUpForm] = useState({
    id: "",
    pw: "",
    rePw: "",
    email: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setsighUpForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = () => {
    router.push("/")
  }

  return (
    <div className="w-[450px] h-[600px] flex flex-col gap-[22px] items-center px-10 py-8 absolute left-[5%] top-[40%] bg-[#2d1010] rounded-md">
      <h2 className="text-[#c2c2c2] text-[24px] font-[700]">Register With Us</h2>
      {}
      <div className="w-full flex flex-col items-start justify-start">
        <label className="text-[24px] text-[#c2c2c2] font-[700]">아이디</label>
        <Input
          name="id"
          value={sighUpForm.id}
          placeHolder="아이디"
          onChange={handleChange}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <label className="text-[24px] text-[#c2c2c2] font-[700]">
          비밀번호
        </label>
        <Input
          name="id"
          value={sighUpForm.id}
          placeHolder="비밀번호"
          onChange={handleChange}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <label className="text-[24px] text-[#c2c2c2] font-[700]">
          비밀번호를 확인하세요
        </label>
        <Input
          name="id"
          value={sighUpForm.id}
          placeHolder="비밀번호 확인"
          onChange={handleChange}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <label className="text-[24px] text-[#c2c2c2] font-[700]">
          이메일을 입력하세요
        </label>
        <Input
          name="id"
          value={sighUpForm.id}
          placeHolder="이메일"
          onChange={handleChange}
        />
      </div>
      <div className="w-4/5">
        <button className="move-button" onClick={handleSignUp}>회원가입</button>
      </div>
    </div>
  );
}
