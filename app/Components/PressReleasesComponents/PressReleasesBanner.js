import React from "react"
import Image from "next/image"

const PressReleasesBanner = () => {
  return (
    <>
      <div className="relative">
        <Image
          className="w-full h-[84vh]"
          width={1050}
          height={850}
          src="/press_release/press.jpeg"
          alt="press"
          loading="lazy"
        />
        <h1 className="absolute top-1/2 lg:left-28 transform -translate-y-1/2 text-center text-6xl  text-[#033B5F] merriweather-regular">
          Press Releases
        </h1>
      </div>
    </>
  )
}

export default PressReleasesBanner
