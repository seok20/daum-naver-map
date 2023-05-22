"use client";

import PostCode from "./daum-post";
import PostcodePopup from "./daum-post-popup";

const DaumLocation = () => {
  return (
    <div>
      DAUM LOCATION API #1 EMBED
      <PostCode></PostCode>
      DAUM LOCATION API #2 POPUP
      <PostcodePopup></PostcodePopup>
    </div>
  );
};

export default DaumLocation;
