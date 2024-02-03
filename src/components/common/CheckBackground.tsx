import React from 'react';

export default function CheckBackground() {
    return (
        <div className='absolute left-0 top-0 w-full h-full bg-black opacity-70 flex items-center justify-center rounded-[inherit]'>
            <img src="/images/Check.svg" alt="체크 아이콘" className='w-20 h-20' />
        </div>
    );
}

