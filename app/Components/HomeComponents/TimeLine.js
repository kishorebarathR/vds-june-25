"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Timeline = () => {
  const years = [
    1980, 1985, 1990, 1995, 2000,
    2005, 2010, 2015, 2020, 2022,
  ]

  const yearImagePaths = {
    1980: "/my-journey/carousel-img-2.png",
    1985: "/my-journey/carousel-img-6.png",
    1990: "/my-journey/carousel-img-8.png",
    1995: "/my-journey/carousel-img-10.png",
    2000: "/my-journey/carousel-img-14.png",
    2005: "/my-journey/carousel-img-16.png",
    2010: "/my-journey/carousel-img-20.png",
    2015: "/my-journey/carousel-img-24.png",
    2020: "/my-journey/carousel-img-26.png",
    2022: "/my-journey/carousel-img-27.png",
  }

  const [hoveredYear, setHoveredYear] = useState(null)

  return (
    <div className="w-full bg-[#035C96] py-6 relative overflow-x-auto">
      <div className="relative flex justify-between items-center min-w-[800px] sm:min-w-full px-4">
        {years.map((year) => (
          <div
            key={year}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredYear(year)}
            onMouseLeave={() => setHoveredYear(null)}
          >
            <Link href={`/my-journey?year=${year}`}>
              <div className="flex flex-col items-center cursor-pointer relative">
                {/* Image on hover (desktop only) */}
                {hoveredYear === year && (
                  <Image
                    src={yearImagePaths[year]}
                    alt={`Image for ${year}`}
                    width={100}
                    height={80}
                    className="rounded shadow-lg z-10 hidden sm:block absolute -top-24"
                  />
                )}

                <span className="text-white text-sm sm:text-xl font-semibold flex justify-center items-center w-[60px] sm:w-[120px] text-center">
                  {year}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Tick Marks */}
      <div className="top-0 left-0 w-full flex justify-between h-1 relative min-w-[800px] sm:min-w-full px-4">
        {Array.from({ length: years.length * 10 }).map((_, index) => (
          <div
            key={index}
            className={`w-px ${
              index % 10 === 0
                ? "h-10 sm:h-12 bg-white -mt-3"
                : "h-3 sm:h-4 mt-3 -ml-px bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
