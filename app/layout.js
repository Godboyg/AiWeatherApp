import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Weather APP
        </title>
        <script 
         async 
         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2915175777820694"
         crossorigin="anonymous">
        </script>
           <meta name="monetag" content="c84e1c3e9f3ab77c08b451ef6a75328c">
      </head>
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
