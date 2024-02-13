'use client';
import { selectPlaceState } from '@/atom/selectPlaceStore';
import axios from 'axios';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

declare global {
    interface Window {
        kakao: any;
    }
}

type WaypointType = {
    name: string;
    x: number;
    y: number;
};

type Props = {
    handleSetMap: (map: any) => void;
};

// 경로 위도, 경도 상태 저장
// 초기 위치는 출발 지점
// 선택한 장소 상태 관리는 ??
export default function KakaoMap() {
    const API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const [wayPoints, setWayPoints] = useState<WaypointType[]>([]);
    // const [linePaths, setLinePaths] = useState<any[]>([]);
    const selectedPlace = useRecoilValue(selectPlaceState);
    const DEFAULT_LAT = selectedPlace[0].lat;
    const DEFAULT_LNG = selectedPlace[1].lng;
    let linePaths: any[] = [];

    useEffect(() => {
        const filterWayPoints = selectedPlace.map((item) => {
            return {
                name: item.placeName,
                x: item.lng,
                y: item.lat,
            };
        });
        setWayPoints(filterWayPoints);
    }, [selectedPlace]);

    const loadKakaoMap = () => {
        window.kakao.maps.load(() => {
            axios
                .post(`https://apis-navi.kakaomobility.com/v1/waypoints/directions`, postData, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `KakaoAK ${REST_API_KEY}`,
                    },
                })
                .then((res) => {
                    console.log(res);
                    linePaths.push(new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG));
                    // setLinePaths((prev) => [...prev, new window.kakao.maps.LatLng(DEFAULT_LNG, DEFAULT_LAT)]);
                    res.data.routes[0].sections.forEach((section: any) => {
                        section.roads.map((road: any) => {
                            // setLinePaths((prev) => [
                            //     ...prev,
                            //     new window.kakao.maps.LatLng(road.vertexes[0], road.vertexes[1]),
                            // ]);
                            linePaths.push(new window.kakao.maps.LatLng(road.vertexes[1], road.vertexes[0]))
                            linePaths.push(new window.kakao.maps.LatLng(road.vertexes[3], road.vertexes[2]))
                        });
                    });
                })
                .then(() => {
                    const mapContainer = document.getElementById('map');
                    const mapOption = {
                        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
                        level: 3,
                    };
                    const map = new window.kakao.maps.Map(mapContainer, mapOption);

                    console.log(linePaths);

                    // 지도에 표시할 선을 생성합니다
                    const polyline = new window.kakao.maps.Polyline({
                        path: linePaths, // 선을 구성하는 좌표배열 입니다
                        strokeWeight: 10, // 선의 두께 입니다
                        strokeColor: 'blue', // 선의 색깔입니다
                        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                        strokeStyle: 'solid', // 선의 스타일입니다
                    });

                    // 지도에 선을 표시합니다
                    polyline.setMap(map);
                });
            // setLinePaths((prev) => [
            //     ...prev,
            //     new window.kakao.maps.LatLng(
            //         Number(selectedPlace[selectedPlace.length - 1].lat),
            //         Number(selectedPlace[selectedPlace.length - 1].lng),
            //     ),
            // ]);
        });
    };

    const postData = {
        // 출발지
        origin: {
            x: DEFAULT_LNG,
            y: DEFAULT_LAT,
        },

        // 도착지
        destination: {
            x: Number(selectedPlace[selectedPlace.length - 1].lng),
            y: Number(selectedPlace[selectedPlace.length - 1].lat),
        },

        // 경유지
        waypoints: selectedPlace.map((item) => {
            return {
                name: item.placeName,
                x: item.lng,
                y: item.lat,
            };
        }),
        priority: 'RECOMMEND',
        car_fuel: 'GASOLINE',
        car_hipass: false,
        alternatives: false,
        road_details: true,
    };

    return (
        selectedPlace &&
        linePaths && (
            <div className="w-full h-full flex items-center justify-center">
                <Script
                    strategy="afterInteractive"
                    type="text/javascript"
                    src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`}
                    onReady={loadKakaoMap}
                    onError={console.error}
                />
                <div id={'map'} className="w-4/5 h-[800px]" />
            </div>
        )
    );
}
