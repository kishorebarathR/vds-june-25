"use client"
import React from "react"

import Image from "next/image"
import Link from "next/link"

const GetInTouchPage = () => {
  return (
    <div>
      <div>
        <div
          className="grid lg:grid-cols-3 p-5 shadow"
          style={{
            backgroundImage:
              "url('/footer_images/Get-in-touch-background.png')",
          }}
        >
          {/* Related Websites Section */}
          <div className="text-white ">
            <h3 className="text-3xl font-bold p-5">Related Websites</h3>
            <div className="text-xl">
              <Link href="https://www.inc.in/">
                <p className="p-5">Indian National Congress</p>
              </Link>
              <Link href="https://www.kpcc.org.in/">
                <p className="p-5">Kerala Pradesh Congress Committee</p>
              </Link>
              <Link href="https://iyc.in/">
                <p className="p-5">Indian Youth Congress</p>
              </Link>
              <Link href="https://niyamasabha.nic.in/">
                <p className="p-5">Kerala Legislative Assembly</p>
              </Link>
            </div>
          </div>

          {/* Be My Friend Form Section */}
          <div>
            <form className="p-8 bg-[#072D46] w-full  ">
              <div className="mb-5">
                <h3 className="text-center text-3xl font-medium p-5 text-white">
                  Be My Friend
                </h3>
              </div>
              <div className="mb-5 py-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-[#033B5F] py-3   px-3 text-[18px] rounded-lg block w-full border border-[#033B5F] dark:placeholder-gray-400 text-white focus:none"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-5 py-3">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="bg-[#033B5F] py-3  px-3 text-[18px] rounded-lg block w-full border border-[#033B5F] dark:placeholder-gray-400 text-white focus:outline-none"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div className="mb-5 py-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-[#033B5F] py-3  px-3 text-[18px] rounded-lg block w-full border border-[#033B5F] text-white focus:outline-none mb-5"
                  placeholder="Email ID"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white border font-medium rounded-md text-xl px-5 py-2.5 mb-5 w-32"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info and Profile Visitors Section */}
          <div className="justify-center items-center">
            <Link href="mailto:hello@vdsatheesan.com">
              <Image
                width={400}
                height={100}
                className="bounce-in mt-10 "
                src="/footer_images/ask-me-footer.png"
                alt="Ask Me Footer"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-full mb-0">
        <div className="flex flex-col md:flex-row gap-4">
          <iframe
            className="w-full md:w-1/2 h-80 filter grayscale"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=V%20D%20Satheesan%20MLA%20Office,%2046RM+4FR,%20North%20Paravur,%20Kerala%20683513+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
          <iframe
            className="w-full md:w-1/2 h-80 filter grayscale"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=V%20D%20Satheesan%20MLA%20Office,%2046RM+4FR,%20North%20Paravur,%20Kerala%20683513+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#035C96] to-[#022E4B] py-5 text-center text-white text-xl shadow-t ">
        Copyright © 2022 All rights reserved.
      </div>
    </div>
  )
}

export default GetInTouchPage
