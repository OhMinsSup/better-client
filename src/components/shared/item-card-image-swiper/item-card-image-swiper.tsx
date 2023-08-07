import React from "react";
import Image from "next/image";

export default function ItemCardImageSwiper() {
  return (
    <Image
      src={
        "https://velog.velcdn.com/images/jmjgirl/post/1983b3a3-324b-43c4-93e0-9a1721301fe6/image.jpg"
      }
      alt={"test"}
      width={768}
      height={(768 / 16) * 9}
      className="object-cover rounded-md transition-all hover:scale-105"
    />
  );
}
