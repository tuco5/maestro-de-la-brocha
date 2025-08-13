
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const paintCans = localFont({
  src: "./PaintCans.otf",
  variable: "--font-paint-cans",
});

const rapScript = localFont({
  src: "./RapScript.otf",
  variable: "--font-rap-script",
});

const wildBasic = localFont({
  src: "./WildBasic.otf",
  variable: "--font-wild-basic",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export {paintCans, geistSans, geistMono, rapScript, wildBasic };