'use client';
import React, { FormEvent, useState } from 'react';
import Input from './common/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userState } from '@/atom/userStore';

export default function LoginContainer() {
    const [loginForm, setLoginForm] = useState({
        id: '',
        pw: '',
    });

    const [isError, setIsError] = useState(false);

    const handleErrorMessage = () => {
        setIsError(true);

        setTimeout(() => {
            setIsError(false);
        }, 3000);
    };
    const setUser = useSetRecoilState(userState);

    const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({ ...prev, [name]: value }));
    };
    console.log(loginForm);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        // 로그인 처리
        axios.post(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/user/login`, loginForm).then((res) => {
            console.log(res.data);
            if (res.data.status === 200 && typeof window !== 'undefined') {
                localStorage.setItem('id', res.data.data.id);
                localStorage.setItem('userName', res.data.data.userId);
                localStorage.setItem('email', res.data.data.email);
                setUser({
                    userId: res.data.data.id,
                    userEmail: res.data.data.email,
                    userName: res.data.data.userId,
                });
                router.push('/movies');
            } else handleErrorMessage();
        });
    };

    return (
        <div className="w-[360px] h-[360px] flex flex-col gap-[22px] items-center p-4 absolute left-[5%] top-[50%] bg-[#2d1010] rounded-md">
            <form className="w-full flex flex-col items-center gap-2">
                <Input name="id" placeHolder="아이디" value={loginForm.id} onChange={handleChange} />
                <Input name="pw" placeHolder="비밀번호" value={loginForm.pw} onChange={handleChange} type="password" />
                {isError && <p className="text-[#ff0000]">아이디 또는 비밀번호가 일치하지 않습니다.</p>}
                <button
                    className="w-full h-[50px] flex items-center justify-center rounded-lg bg-[#5856d6] text-white cursor-pointer"
                    onClick={handleLogin}
                >
                    <p>로그인</p>
                </button>
            </form>
            <div className="w-4/5 flex flex-col items-center gap-2">
                <Link className="move-button" href={'/'}>
                    아이디 / 비밀번호 찾기
                </Link>
                <Link className="move-button" href={'/signUp'}>
                    회원가입
                </Link>
            </div>
        </div>
    );
}
