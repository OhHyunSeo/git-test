'ues client'
import { NaverMap } from '@/type/map';
import axios from 'axios';
import Script from 'next/script';
import React, { useEffect, useRef } from 'react';

export default function Map() {
    const mapRef = useRef<NaverMap | null>(null);

    const start = '126.9769,37.5656'
        const goal = '126.987749,37.576111'

        useEffect(() => {
                axios.get(`https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start=${start}&goal=${goal}`, {
                    headers: {
                        "X-NCP-APIGW-API-KEY-ID": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
                        "X-NCP-APIGW-API-KEY": process.env.NEXT_PUBLIC_NAVER_SECRET_KEY
                    }
                }).then((res) => {
                    console.log(res)
                })
        }, [])

    const initializeMap = () => {
        const mapOptions = {
            center: new window.naver.maps.LatLng(37.5656, 126.9769),
            zoom: 17,
            minZoom: 9,
            scaleControl: false,
            mapDataControl: false,
            logoControlOptions: {
                position: naver.maps.Position.BOTTOM_LEFT,
            },
        };

        
        //새로운 네이버 맵 인스턴스 생성 
        const map = new window.naver.maps.Map('map', mapOptions);
        mapRef.current = map;


    };
    
    //맵이 unmount되었을 때 맵 인스턴스 destory하기 
    useEffect(() => {
        return () => {
            mapRef.current?.destroy();
        };
    }, []);

    return (
        <>
            <Script
                strategy="afterInteractive"
                type = "text/javascript"
                src = {`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
                onReady = {initializeMap}
                onError={console.error}
            />
            <div id = {'map'} style = {{width : '100%', height: '100%'}}/>
        </>
    )

}

