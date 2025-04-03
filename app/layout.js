import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
