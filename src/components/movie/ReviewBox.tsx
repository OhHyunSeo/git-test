import React from 'react';

export default function ReviewBox() {
    return (
        <div className='w-full h-[62px] flex gap-3 border-b border-[#c1c1c1]'>
            <div className='w-[40px] h-[45px] rounded-md'>
                <img src="/images/profile.jpeg" alt="프로필 이미지" className='w-full h-full rounded-[inherit]' />
            </div>
            <div className='flex flex-col'>
                <div className='flex gap-2 items-center text-[14px]'>
                    <p>name</p>
                    <div>별점</div>
                </div>
                <div>
                    <p>리뷰입니다...........</p>
                </div>
            </div>
            
        </div>
    );
}

