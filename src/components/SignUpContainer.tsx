"use client";
import React, { FormEvent, useState } from "react";
import Input from "./common/Input";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpContainer() {
  const [sighUpForm, setSighUpForm] = useState({
    id: "",
    pw: "",
    rePw: "",
    email: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSighUpForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    const reqUser = {
      id: sighUpForm.id,
      pw: sighUpForm.pw,
      email: sighUpForm.email,
    };
    axios.post(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/user`, reqUser).then((res) => {
      console.log(res.status);
      if (res.status === 200) router.push("/")
    });
  };

  return (
    <form className="w-[450px] h-[600px] flex flex-col gap-[22px] items-center px-10 py-8 absolute left-[5%] top-[40%] bg-[#2d1010] rounded-md">
      <h2 className="text-[#c2c2c2] text-[24px] font-[700]">
        Register With Us
      </h2>
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
          name="pw"
          value={sighUpForm.pw}
          placeHolder="비밀번호"
          onChange={handleChange}
          type='password'
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <label className="text-[24px] text-[#c2c2c2] font-[700]">
          비밀번호를 확인하세요
        </label>
        <Input
          name="rePw"
          value={sighUpForm.rePw}
          placeHolder="비밀번호 확인"
          onChange={handleChange}
          type='password'
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <label className="text-[24px] text-[#c2c2c2] font-[700]">
          이메일을 입력하세요
        </label>
        <Input
          name="email"
          value={sighUpForm.email}
          placeHolder="이메일"
          onChange={handleChange}
        />
      </div>
      <div className="w-4/5">
        <button className="move-button" onClick={handleSignUp}>
          회원가입
        </button>
      </div>
    </form>
  );
}
