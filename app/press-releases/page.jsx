'use client'
import React from "react"
import PressreleasesComponents from "../Components/PressReleasesComponents"
// import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const Page = () => {
  const pathname = usePathname()
  const title = "V D Satheesan Press Releases - Latest Updates and Announcements"
  const description =
    "Stay informed with the latest press releases from V D Satheesan. Discover updates and announcements about ongoing efforts and initiatives to impact positive change in the community. "
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
      <PressreleasesComponents />
    </>
  )
}

export default Page
