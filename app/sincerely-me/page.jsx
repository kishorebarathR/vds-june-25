"use client"
import React from "react"
import SincerelyMe from "../Components/SincerelyMeComponents"
 import Seo from "../Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = "Sincerely, Me - Insights from V D Satheesan, Leader of Opposition, Kerala"
  const description =
    "Explore 'Sincerely, Me' by V D Satheesan, where he shares personal stories and his journey in politics. "
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
      <SincerelyMe />
    </>
  )
}

export default Page
