import {
  Marker,
  NaverMap,
  Container as MapDiv,
  useNavermaps,
  Rectangle,
} from "react-naver-maps";
import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

const MyMap = () => {
  const navermaps = useNavermaps();

  const mapRef = useRef<any | null>(null);
  const [map, setMap] = useState(null);
  const [rect, setRect] = useState(null);

  const locationHandleClick = () => {
    if (map) {
      //   const bounds = mapRef.current.instance.bounds();
      //   const northEast = bounds.getNE();
      //   const southWest = bounds.getSW();

      //   console.log("북동쪽 좌표: ", northEast);
      //   console.log("남서쪽 좌표 : ", southWest);

      const bounds = map.getBounds();
      const northEast = bounds.getNE();
      const southWest = bounds.getSW();

      console.log(bounds);
      console.log(northEast);
      console.log(southWest);
    } else {
      console.log("지도가 아직 로드되지 않았습니다.");
    }
  };

  const zoomHandleClick = () => {
    if (map) {
      map.setZoom(15, true);
      const bounds = map.getBounds();
      const northEast = bounds.getNE();
      const southWest = bounds.getSW();
      if (map && rect) {
        rect.setBounds(bounds);
      }
    }
  };
  return (
    <div>
      <MapDiv
        style={{
          width: `100%`,
          height: `600px`,
        }}
      >
        <NaverMap
          ref={setMap}
          defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
          defaultZoom={15}
        >
          <Rectangle
            ref={setRect}
            strokeOpacity={0}
            strokeWeight={0}
            fillOpacity={0.2}
            fillColor={"#f00"}
          ></Rectangle>
          <Marker
            defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
          />
        </NaverMap>
      </MapDiv>
      <button onClick={locationHandleClick}>현재 위치 재검색</button>
      <button onClick={zoomHandleClick}>줌 핸들러</button>
    </div>
  );
};

export default MyMap;
