"use client"
import React from "react"
import Head from "next/head"
import config from "@/postcss.config.mjs"


function NextSeo({ title, description, path, metaImage }) {
  return (
    <head>
      <meta charSet="utf-8"/>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/images/cac_favicon-150x150.png" />
      <link rel="canonical" href={`${config.mainWebUrl}${path}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={path} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "thezurihotels",
            url: path,
            potentialAction: {
              "@type": "SearchAction",
              target: `${path}{search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </head>
  )
}

export default NextSeo
