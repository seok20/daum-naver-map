"use client";

import { useState } from "react";
import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const PostCode = () => {
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? `(${extraAddress})` : "";
    }

    console.log(fullAddress);
  };

  return <DaumPostcodeEmbed onComplete={handleComplete} />;
};

export default PostCode;
