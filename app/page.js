"use client"
import React from "react"
import HomeComponents from "./Components/HomeComponents"
import Seo from "./Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"
const Page = () => {
  const pathname = usePathname()
  const title =
    "V. D. Satheesan: Dedicated Public Servant and Leader for Change"
  const description =
    "Explore the journey and achievements of V. D. Satheesan, a committed leader dedicated to social justice and community welfare."
  const path = `${pathname}`
  const metaImage = ""
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />

      <HomeComponents />
    </>
  )
}

export default Page
