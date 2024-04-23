import Apps from "@/components/Apps";
import Comparision from "@/components/Comparision";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import People from "@/components/People";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
        <Navbar/>
        <div className="max-w-screen-xl mx-auto overflow-hidden">
          <Hero/>
          <Apps/>
          <Comparision/>
          <Stats/>
          <People/>
        </div>
          <Footer/>
        <svg className='absolute top-0 left-0 bottom-0 right-0 opacity-20 ' width="100%" height="100%">
          <pattern id="smallGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#fff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
    </main>
  );
}
