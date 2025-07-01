'use client'
import React from 'react';
import NewsLettersComponents from "../Components/NewsLettersComponents"
// import Seo from "@/Components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const Page = () => {
    const pathname = usePathname()
    const title = " V.D. Satheesan - Official Newsletters | Insights and Updates from Kerala's Leader"
    const description =
      "Stay informed with the latest updates, insights, and reflections from V.D. Satheesan, Kerala's prominent leader. Dive into our newsletters for a closer look at policies, community engagements, and more."
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
            <NewsLettersComponents/>
        </>
    );
};

export default Page;