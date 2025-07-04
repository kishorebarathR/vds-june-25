// app/layout.js or app/layout.tsx
import "./globals.css"
import { Merriweather } from "next/font/google"
import Script from "next/script"
import Header from "./Components/SharedComponents/Header"
import Footer from "./Components/SharedComponents/Footer"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], 
  variable: "--font-merriweather",
  display: "swap",
})

export const metadata = {
  title: "Your Site Title",
  description: "Your description here",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className={`${merriweather.className} font-sans`}>
        <Header />
        {children}
        <Footer /> 
        <Script async src="third-party.js" />
      </body>
    </html>
  )
}
