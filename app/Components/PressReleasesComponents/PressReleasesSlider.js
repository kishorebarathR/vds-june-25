"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  FaArrowCircleLeft,
  FaArrowRight,
  FaArrowCircleRight,
} from "react-icons/fa"

// Desktop Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,

        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  )
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 1,

        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <FaArrowCircleLeft />
    </div>
  )
}

// Mobile Arrow Components
const MobileNextArrow = (props) => {
  const { onClick } = props
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        right: "12px",
        bottom: "50%",
        transform: "translateY(50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowCircleRight size={18} color="black" />
    </div>
  )
}

const MobilePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        left: "12px",
        bottom: "50%",
        transform: "translateY(50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowCircleLeft size={18} color="black" />
    </div>
  )
}

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: <MobileNextArrow />,
          prevArrow: <MobilePrevArrow />,
        },
      },
    ],
  }

  return (
    <>
      <style>
        {`
        .slick-prev:before, .slick-next:before {
          color: black;
          font-size: 20px; 
        }`}
      </style>
      <div>
        <div className="text-2xl font-medium text-left px-10 pt-5 container mx-auto ">
          <h2 className="lg:text-3xl merriweather-regular ">
            Stay updated with the latest announcements and updates on my efforts
            to create positive change in the country.
          </h2>
        </div>
        <Slider
          {...settings}
          className="mx-auto container lg:mb-10 merriweather-regular"
        >
          <div className="lg:p-4 p-7">
            <div className="block max-w-sm p-5 bg-white rounded-2xl h-52 shadow-lg">
              <h5>17/04/2023</h5>
              <h5 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                തിരുവനന്തപുരം
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                ധര്‍മ്മടത്തേത് ഒറ്റപ്പെട്ട സംഭവമല്ല: പോലീസ് ക്രിമിനലുകൾക്ക്
                അഴിഞ്ഞാടാൻ അവസരമൊരുക്കുന്നത്...
              </p>
            </div>
          </div>

          <div className="lg:p-4 p-7">
            <div className="block max-w-sm p-5 bg-white rounded-2xl h-52 shadow-lg">
              <h5>16/04/2023</h5>
              <h5 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                തിരുവനന്തപുരം
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                വന്ദേഭാരത് മംഗലുരു വരെ നീട്ടണം; കേന്ദ്ര റെയിൽവെ മന്ത്രിക്ക്
                പ്രതിപക്ഷ നേതാവ് കത്തയച്ചു
              </p>
            </div>
          </div>

          <div className="lg:p-4 p-7">
            <div className="block max-w-sm p-5 bg-white rounded-2xl h-52 shadow-lg">
              <h5>14/04/2023</h5>
              <h3 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                തിരുവനന്തപുരം
              </h3>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                മാധ്യമങ്ങളെ ഭീഷണിപ്പെടുത്തി വരുത്തിയിലാക്കാൻ ശ്രമിക്കുന്നു;
                പിണറായി സർക്കാർ നരേന്ദ്ര മോദിയുടെ കാർബൺ...
              </p>
            </div>
          </div>

          <div className="lg:p-4 p-7">
            <div className="block max-w-sm p-5 bg-white rounded-2xl h-52 shadow-lg">
              <h5>13/04/2023</h5>
              <h3 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                തിരുവനന്തപുരം
              </h3>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                ഹൈക്കോടതി പരാമർശം പ്രതിപക്ഷ ആരോപണം അടിവരയിടുന്നത്
              </p>
            </div>
          </div>

          <div className="lg:p-4 p-7">
            <div className="block max-w-sm p-5 bg-white rounded-2xl h-52 shadow-lg">
              <h5>12/04/2023</h5>
              <h3 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                തിരുവനന്തപുരം
              </h3>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                ആർ.എസ് ശശികുമാറിനെതിരായ പരാമർശം പിന്‍വലിച്ച് ലോകായുക്ത മാപ്പ്
                പറയണം; ഹിന്ദുവിന്റെ മൊത്തം അട്ടിപ്പേറവകാശം...
              </p>
            </div>
          </div>

          <div className="lg:p-4 p-7">
            <div className="block max-w-sm p-5 bg-white rounded-2xl h-52 shadow-lg">
              <h5>09/04/2023</h5>
              <h3 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ഫേസ്ബുക്ക് പോസ്റ്റ്
              </h3>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                ബിഷപ്പ് ഹൗസുകൾ കയറിയിറങ്ങി ബി.ജെ.പി നേതാക്കൾ ഈസ്റ്റർ ആശംസകൾ
                നേരുന്നതിൽ പ്രതിപക്ഷ നേതാവിന്റെ...
              </p>
            </div>
          </div>

          <div className="lg:p-4 p-7">
            <div className="block max-w-sm p-5 bg-white rounded-2xl h-52 shadow-lg">
              <h5>09/04/2023</h5>
              <h3 className="pb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                കോഴിക്കോട്
              </h3>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                ക്രൈസ്തവരെ ഓടിച്ചിട്ട് തല്ലണമെന്ന് പറഞ്ഞ ബി.ജെ.പിയുടെ ക്രൈസ്തവ
                സ്‌നേഹം ഇരട്ടത്താപ്പ്; കേരളത്തിലെ 90 ശതമാനം...
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}
