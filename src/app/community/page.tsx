import Divider from '@/components/common/Divider';
import React from 'react';

export default function CommunityPage() {
    return (
        <div className="w-full h-full min-w-[1920px] flex flex-col items-center">
        <Divider />
        <div className="w-full max-w-[1920px] flex flex-col items-center px-40 py-8">
          <div className="w-full flex items-center justify-between py-4">
            <h2 className="font-[600] text-[24px]">사용자의 업적 상태 표시 창, 리더보드 표시</h2>
  
          </div>
          
        </div>
      </div>
    );
}

