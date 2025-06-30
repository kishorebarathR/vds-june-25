"use client"
import React from "react"
import MyConstituency from "../Components/my-constituencyComponents"
// import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = "Exploring North Paravur: V.D. Satheesan's Constituency Legacy"
  const description =
    "Discover North Paravur through the eyes of V.D. Satheesan. Explore its rich history, vibrant culture, and the impactful developments shaping this unique constituency."
  const path = `${pathname}`
  const metaImage = ""
  return (
    <>
      {/* <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      /> */}
      <MyConstituency />
    </>
  )
}

export default Page
