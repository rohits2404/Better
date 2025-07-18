import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Simple, Online, AI-Powered Mortgage | Better Mortgage",
    description:
    "Get approved in minutes, not weeks. Better mortgage experience with digital tools, expert support, and rates you can trust.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link href="https://media.better.com/better-com/1627660194327/meta/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
            </head>
            <body className={inter.className}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}