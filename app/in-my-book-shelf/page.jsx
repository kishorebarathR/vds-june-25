"use client"
import React from "react"
import InmyBookShelfComponents from "../Components/InMyBookShelfComponents"
import Seo from "../Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname()
  const title = " V. D. Satheesan’s Favourite Reads – In My Book Shelf"
  const description =
    " Explore the influential bookshelf of V. D. Satheesan, featuring a diverse range of literature from historical to modern authors that have shaped his political and personal life. "
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
      <InmyBookShelfComponents />
    </>
  )
}

export default Page
