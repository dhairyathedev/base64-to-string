import Image from "next/image";
import React, { useState } from "react";

export default function BlurImage({ src, className, height, width }) {
  const [isLoading, setLoading] = useState(true);

  return (
        <Image
          alt=""
          src={src}
          width={width}
          height={height}
          className={`
              ${className}
              ${
                isLoading
                  ? "blur-2xl grayscale"
                  : "blur-0 grayscale-0"
              })`}
          onLoadingComplete={() => setLoading(false)}
        />
  );
}