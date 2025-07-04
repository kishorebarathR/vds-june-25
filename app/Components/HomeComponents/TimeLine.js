
"use client"
import React, { useState } from "react"
import Link from "next/link"

const Timeline = () => {
  const years = [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2022]

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
    <div className="w-full bg-[#035C96] p-3 relative">
      <div className="relative flex justify-between items-center ">
        {years.map((year) => (
          <div
            key={year}
            className="relative flex flex-col items-center"
            onMouseOver={() => setHoveredYear(year)}
           
          >
            <Link href={`/my-journey?year=${year}`}>
              <div className="flex flex-col items-center cursor-pointer">
                {hoveredYear === year && (
                  <img
                    src={yearImagePaths[year]}
                    
                    alt={`Image for ${year}`}
                    className="absolute top-[-100px] w-[120px] rounded h-[88px]"
                  />
                )}
                <span className="text-white text-xl font-semibold flex justify-center items-center w-[120px]">
                  {year}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className=" top-0 left-0 w-full flex justify-between h-1  relative">
        {Array.from({ length: years.length * 10 }).map((_, index) => (
          <div
            key={index}
            className={`w-px ${
              index % 10 === 0 ? "h-12 bg-white -mt-4" : "h-4 mt-4 -ms-1 bg-white"
            }`}
          ></div>
        ))}
      </div>
      {/* Timeline Line */}
      <div className="w-full mt-4 relative">
        {/* Ticks (mm and cm scale) */}
      </div>
    </div>
  )
}

export default Timeline
