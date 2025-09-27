import { Card } from "@/components/Molecules/Card/Card";
import { GithubIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ContactPage() {
  return (
    <div className="w-full h-[92vh] flex flex-row justify-center items-center">
      <Card className="h-4/6 w-4/6 p-6 flex flex-col md:flex-row gap-8 ">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/agreement.svg"
            alt="Contact Illustration"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>

        <ul className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <li className="text-2xl font-bold">Contact Me Through</li>
          <li>
            <Link
              href="https://www.linkedin.com/in/arjun-p-jayakrishnan-5b971b244/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-600 hover:underline flex flex-row gap-2"
            >
              <Linkedin />
              Linked In
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Arjun-P-Jayakrishnan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-800 hover:underline flex flex-row gap-2"
            >
              <GithubIcon />
              Github
            </Link>
          </li>
        </ul>
      </Card>
    </div>
  );
}
