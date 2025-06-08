import { Heading, Paragraph } from '../ui/Typography'
import Link from 'next/link'
import Image from 'next/image'

export interface HeroProps {}

export default function Hero() {
  return (
    <section
      className="max-container padding-container 
      flex flex-col  gap-20 py-2  pb-32 
      md:gap-28 lg:py-20 xl:flex-row
      "
    >
      <div className="hero-map" />

      {/* Left */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-black bold-25 lg:bold-75 ">
          Make Your Development faster With Dev Tools
        </h1>
        <p className="text-black regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Forged for purpose,These tools will help you do your work faster than ever before
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </section>
  )
}
