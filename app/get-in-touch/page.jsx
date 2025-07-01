"use client"
import React from "react"
import GetInTouchComponents from "../Components/GetInTouchComponents"
// import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
    const pathname = usePathname()
    const title = "Get in Touch with V.D. Satheesan | Connect for Insights and Support"
    const description =
      "Reach out to V.D. Satheesan, a leader dedicated to development and social progress. Contact for discussions, collaborations, or to share your feedback. "
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
      <GetInTouchComponents />
    </>
  )
}

export default Page
