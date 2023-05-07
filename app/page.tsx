import Image from "next/image";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full flex justify-center bg-white p-1">

      <Image src={'/images/tomame-high-resolution-logo-color-on-transparent-background.png'} alt="logo" width={100} height={100} />
      </div>
        <Hero />
    </main>
    
  )
}
