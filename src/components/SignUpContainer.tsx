'use client'
import React, { useState } from 'react';
import Input from './common/Input';

export default function SignUpContainer() {

    const [sighUpForm, setsighUpForm] = useState({
        id: '',
        pw: '',
        rePw: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setsighUpForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="w-[380px] h-[500px] flex flex-col gap-[22px] items-center p-4 absolute left-[5%] top-[40%] bg-[#2d1010] rounded-md">
            <div className='w-full flex flex-col items-center justify-start'>
                <label className='text-[24px] text-[#c2c2c2] font-[700]'>아이디</label>
                <Input name='id' value={sighUpForm.id} placeHolder='아이디' onChange={handleChange} width='w-[80%]' />
            </div>
        </div>
    );
}
