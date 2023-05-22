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
  const [showMarker, setShowMarker] = useState(false);

  let NEMarkerPositon = { lat: 37.3340511, lng: 127.0903572 };
  let SWMarkerPositon = { lat: 37.3545218, lng: 127.1194538 };

  const zoomHandleClick = () => {
    if (map) {
      map.setZoom(15, true);
      const bounds = map.getBounds();
      const northEast = bounds.getNE();
      const southWest = bounds.getSW();
      if (map && rect) {
        rect.setBounds(bounds);
      }
      console.log(southWest._lat, southWest._lng);
      console.log(northEast._lat, northEast._lng);
      NEMarkerPositon = {
        lat: parseInt(northEast._lat),
        lng: parseInt(northEast._lng),
      };
      SWMarkerPositon = {
        lat: parseInt(southWest._lat),
        lng: parseInt(southWest._lng),
      };
      setShowMarker(true);
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
          <Marker defaultPosition={NEMarkerPositon} />
          <Marker defaultPosition={SWMarkerPositon} />
        </NaverMap>
      </MapDiv>

      <button onClick={zoomHandleClick}>현재 위치 재검색</button>
    </div>
  );
};

export default MyMap;
