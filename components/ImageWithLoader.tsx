"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { BrickWall } from "lucide-react";

interface CustomImageProps extends ImageProps {
  loaderVariant?: "default" | "small";
}

export function ImageWithLoader({ loaderVariant = "default", alt = "", ...props }: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Image
        alt={alt}
        {...props}
        className={`${props.className || ""} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-[#FAF8F5] flex flex-col items-center justify-center z-10 border border-[#E8E2D9] rounded-[inherit] overflow-hidden">
          {loaderVariant === "small" ? (
            <div className="animate-pulse flex items-center justify-center text-[#C85A32] w-full h-full">
              <BrickWall className="w-1/2 h-1/2 max-w-[24px] max-h-[24px]" />
            </div>
          ) : (
            <div className="animate-pulse flex flex-col items-center text-[#C85A32]">
              <BrickWall className="w-8 h-8 mb-3" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1C1917]">
                Loading...
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
