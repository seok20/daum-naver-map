"use client";

import useMap from "./useMap";

const NaverMap = () => {
  useMap();
  return <div id="map" style={{ width: 600, height: 600 }}></div>;
};

export default NaverMap;
