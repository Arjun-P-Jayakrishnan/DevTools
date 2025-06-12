import { Rubik } from "next/font/google";
import Image from "next/image";

const inter = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export default function Hero() {
  return (
    <section className="w-full px-8 py-4 flex flex-col md:flex-row gap-1 pt-28">
      {/* Left */}
      <div
        className={` ${inter.variable} relative z-20 flex flex-1 flex-col justify-center w-1/2`}
      >
        <h1 className="text-primary text-6xl">Develop Faster</h1>
        <h3 className="text-primary text-2xl pl-1 pt-2 pb-5">with Dev Tools</h3>
        <blockquote className="text-4xl italic border-l-4 pl-4 border-gray-400  text-gray-600">
          “Forged for purpose, Built with love ”
        </blockquote>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2"></div>
        </div>
      </div>

      {/* Right */}

      <div className="w-1/2">
        <Image
          height={50}
          width={50}
          src={"/pattern-bg.svg"}
          alt="side image"
          className="w-full"
        />
      </div>
    </section>
  );
}
