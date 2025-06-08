import { Rubik } from 'next/font/google'
import Image from 'next/image'

// export interface HeroProps {

// }

const inter = Rubik({ subsets: ['latin'], variable: '--font-rubik' })

export default function Hero() {
  return (
    <section
      className="max-container padding-container 
      flex flex-col md:flex-row gap-1 pt-28
      "
    >
      {/* Left */}
      <div className={` ${inter.variable} relative z-20 flex flex-1 flex-col justify-center w-1/2`}>
        <h1 className="text-black lg:bold-52 md:bold-32 sm:bold-25 w-full">Develop Faster</h1>
        <h3 className="pl-10 text-black bold-32"> with Dev Tools</h3>
        <blockquote className="text-xl italic text-gray-600 border-l-4 pl-4 border-gray-400 ">
          “Forged for purpose, Built with love ”
        </blockquote>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2"></div>
        </div>
      </div>

      {/* Right */}

      <div className="w-1/2">
        <Image height={50} width={50} src={'/pattern-bg.svg'} alt="side image" className="w-full" />
      </div>
    </section>
  )
}
