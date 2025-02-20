"use client"

import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Work />
    </>
  );
}
