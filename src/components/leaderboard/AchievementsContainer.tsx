import React from 'react';
import CheckBox from '../common/CheckBox';
import Achievements from './Achievements';

export default function AchievementsContainer() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-[26px] items-center">
                <CheckBox name="여행 첫걸음" value={true} />
              <Achievements
                name="여행 첫걸음"
                desc="첫 여행 계획을 완성하세요"
                point={10}
                iconIndex={1}
              />
            </div>
            <div className="flex gap-[26px] items-center">
                <CheckBox name="영화광" value={true} />
              <Achievements
                name="영화광"
                desc="5개 이상의 영화로 계획을 완성하세요"
                point={50}
                iconIndex={2}
              />
            </div>
            <div className="flex gap-[26px] items-center">
                <CheckBox name="첫 발자취" value={true} />
              <Achievements
                name="첫 발자취"
                desc="첫 여행 계획을 완성하세요"
                point={10}
                iconIndex={3}
              />
            </div>
            <div className="flex gap-[26px] items-center">
                <CheckBox name="인증하기!" value={true} />
              <Achievements
                name="인증하기!"
                desc="계획한 장소를 직접 갔다면 사진으로 인증하세요"
                point={50}
                iconIndex={4}
              />
            </div>
          </div>
    );
}

