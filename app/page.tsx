import Link from "next/link";
import { GrPlan } from "react-icons/gr";
import type { FC, ReactElement } from "react";
import { FaImagePortrait } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import SamuraiLogo from "../assets/samurai.png"
import { sedgwickAve } from "./ui/fonts";

interface Link {
  url: string;
  Icon: ReactElement;
  title: string;
}

const links: Link[] = [
  {
    url: "/dashboard/pipeline",
    Icon: <GrPlan size={`1rem`} />,
    title: "Pipeline",
  },
  {
    url: "https://arjun-p-jayakrishnan.github.io/",
    Icon: <FaImagePortrait size={`1rem`} />,
    title: "Portfolio",
  },
  {
    url: "/dashboard/library",
    Icon: <MdOutlineLibraryBooks size={`1rem`} />,
    title: "Library",
  },
];

const Navbar: FC<ReactElement> = () => {
  return (
    <div className="flex flex-row justify-between">
      <Image src={Logo} height={75} width={75} alt="" />
      <ul className="flex flex-row justify-between gap-1 m-1">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.url}
                className="
                flex flex-row align-middle gap-2 justify-center
                min-w-fit p-3 
                bg-white border border-gray-200 rounded-lg shadow 
                hover:bg-gray-100 dark:bg-gray-800 
                dark:border-gray-700 dark:hover:bg-gray-700"
              >
                {link.Icon}{link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div className="h-screen max-h-[65vh] w-screen max-w bg-purple-600-900 grid place-content-center justify-items-center">
      <Image
        src={SamuraiLogo}
        width={`400`}
        height={`400`}
        alt="Picture of the author"
        color="black"
      />
      <p className={`${sedgwickAve}`}>Welcome to Dev Tools</p>
      <p>Here you will find my personal <strong>Blog </strong>,<strong>Portfolio </strong>,<strong>Project Plans</strong> etc. </p>
    </div>
  );
};



export default function Page() {
  return (
    <main className="min-h-screen flex flex-col justify-start align-middle gap-1">
      <Navbar key={null} type={""} props={undefined} />
      <Body/>
    </main>
  );
}
