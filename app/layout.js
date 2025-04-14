import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="monetag" content="c84e1c3e9f3ab77c08b451ef6a75328c">
        <title>
          Weather APP
        </title>
      </head>
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
