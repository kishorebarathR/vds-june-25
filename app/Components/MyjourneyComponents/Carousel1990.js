"use client"
import React from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaXTwitter } from "react-icons/fa6"
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const imagePaths = [
    "/my-journey/carousel-img-8.png",
    "/my-journey/carousel-img-9.png",
    "/my-journey/carousel-img-7.png",
    "/my-journey/carousel-img-8.png",
    "/my-journey/carousel-img-9.png",
    "/my-journey/carousel-img-7.png",
  ]

  return (
    <div className="bg-[#F2EBCD] carosel-body merriweather-regular">
      <div className="container mx-auto p-5">
        <h2 className="text-3xl font-semibold p-2 bg-[#398AF5] w-52 text-center text-white">
          1990-95
        </h2>
        <div className="bg-white rounded-3xl p-3 mt-5">
          <Slider {...settings}>
            {imagePaths.map((path, index) => (
              <div key={index} className="w-full rounded-2xl h-80">
                <Image
                  width={500}
                  height={550}
                  src={path}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-full rounded-3xl img-s"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>

          <p className="text-black text-[18px] text-left p-5 mt-5">
            Building on his educational foundation, VD Satheeshan pursued a
            Master of Laws (LLM) course at Govt. Law College,
            Thiruvananthapuram. His leadership skills extended to a national
            level when he was selected as the All India Secretary of the
            National Students Union of India (NSUI). Concurrently, he started
            his career as a lawyer at the Kerala High Court.
          </p>

          <div className="flex flex-row px-4 pb-5">
            <div className="flex-col">
              <a
                href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fvdsatheesan.com%2Fmy-journey%2F&app_id=966242223397117&source_surface=external_reshare&display&hashtag"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-10 fill-current text-[#36528C] hover:text-black transition-colors duration-300"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 44.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
            </div>
            <div className="flex-col px-2">
              <a
                href="https://x.com/intent/post?text=+https%3A%2F%2Fvdsatheesan.com%2Fmy-journey%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-10 h-10 text-white hover:bg-black transition-colors duration-300 bg-[#36528C] rounded-full p-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
