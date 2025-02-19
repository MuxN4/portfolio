"use client"

import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
    </>
  );
}
