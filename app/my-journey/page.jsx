"use client"
import React from "react"
import Myjourney from "../Components/MyjourneyComponents/index"
import SeoComponent from "../Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = "V D Satheesan: A Journey Through Leadership and Advocacy"
  const description =
    "Discover the inspiring journey of V D Satheesan, from a passionate student leader to a significant political figure in Kerala."
  const path = `${pathname}`
  const metaImage = ""
  return (
    <div>
      {/* <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      /> */}
      <Myjourney />
    </div>
  )
}

export default Page
