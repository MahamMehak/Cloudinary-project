"use client";

import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
       onUpload={(result:  UploadResult) => {
        setImageId(result.info.public_id);
      }}
      uploadPreset="giomsr4s" />
       {imageId && (
      <CldImage
  width="360"
  height="300"
  src={imageId}
 
  blurFaces
  
  sizes="50vw"
  
  alt="Description of my image"
/>

)}
    </main>
  )
}

