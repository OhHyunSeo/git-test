'use client';
import { userState } from '@/atom/userStore';
import Divider from '@/components/common/Divider';
import React from 'react';
import { useRecoilValue } from 'recoil';

export default function page() {
    const userInfo = useRecoilValue(userState);
    const { userEmail, userId, userName } = userInfo;

    return (
        <div className="w-full min-w-[1920px] flex flex-col items-center">
            <Divider />
            <div className="w-[85%] flex p-[50px]">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="text-[#030303] text-[18px]">Profile</p>
                            <div className="flex items-center justify-center gap-2">
                                <img src="/images/profile.jpeg" alt="프로필 이미지" className="w-[57px] h-[72px]" />
                                <div className="flex flex-col">
                                    <p className="text-[#030303] text-[24px] font-[700]">닉네임: {userName}</p>
                                    <p className="text-[18px] text-[#030303]">email: {userEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#9356d6] px-3 py-1 rounded-full text-white">닉네임 변경</button>
                    </div>
                </div>
            </div>
            <div className="w-[90%] h-[300px] flex mx-[50px] border-t-2">
                <div className="w-[15%] h-full bg-[#f2f2f2] p-[30px]">
                    <p className="text-[#030303] text-[24px] font-[700]">여행관리</p>
                </div>
                <div className="w-[85%] h-full px-[24px] py-[60px] ">
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex gap-4">
                            <img
                                src="/images/locationArrowIcon.svg"
                                alt="MovieTrip 아이콘"
                                className="w-[25px] h-[25px]"
                            />
                            <p className="text-[#030303] text-[18px] font-[500]">My movietrip</p>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="/images/reviewIcon.svg"
                                alt="리뷰 아이콘"
                                className="w-[25px] h-[25px]"
                            />

                            <p className="text-[#030303] text-[18px] font-[500]">내가 쓴 리뷰</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] h-[300px] flex mx-[50px] border-b-2 border-t-2 ">
                <div className="w-[15%] h-full bg-[#f2f2f2] p-[30px]">
                    <p className="text-[#030303] text-[24px] font-[700]">회원관리</p>
                </div>
                <div className="w-[85%] h-full px-[24px] py-[60px]">
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex gap-4">
                            <img
                                src="/images/logoutIcon.svg"
                                alt="로그아웃 아이콘"
                                className="w-[25px] h-[25px]"
                            />

                            <p className="text-[#030303] text-[18px] font-[500]">로그아웃</p>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="/images/deleteIcon.svg"
                                alt="회원탈퇴 아이콘"
                                className="w-[25px] h-[25px]"
                            />

                            <p className="text-[#030303] text-[18px] font-[500]">회원탈퇴</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
