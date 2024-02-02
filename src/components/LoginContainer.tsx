'use client';
import React, { useState } from 'react';
import Input from './common/Input';
import Link from 'next/link';

export default function LoginContainer() {
    const [loginForm, setLoginForm] = useState({
        id: '',
        pw: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({ ...prev, [name]: value }));
    };
    console.log(loginForm)

    return (
        <div className="w-[360px] h-[340px] flex flex-col gap-[22px] items-center p-4 absolute left-[5%] top-[50%] bg-[#2d1010] rounded-md">
            <div className='w-full flex flex-col items-center gap-2'>
                <Input name="id" placeHolder="아이디" value={loginForm.id} onChange={handleChange} />
                <Input name="pw" placeHolder="비밀번호" value={loginForm.pw} onChange={handleChange} />
                <div className='w-full h-[50px] flex items-center justify-center rounded-lg bg-[#5856d6] text-white'>
                    <p >로그인</p>
                </div>
            </div>
            <div className='w-4/5 flex flex-col items-center gap-2'>
                <Link className='move-button' href={'/'}>아이디 / 비밀번호 찾기</Link>
                <Link className='move-button' href={'/signUp'}>회원가입</Link>
            </div>
        </div>
    );
}
