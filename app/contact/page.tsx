import { Card } from "@/modules/common/Card";
import Image from "next/image";
import Link from "next/link";
export default function ContactPage() {
  return (
    <div className="w-full h-[92vh] flex flex-row justify-center items-center">
      <Card className="h-4/6 w-4/6 p-6 flex flex-row ">
        <Image
          src="/agreement.svg"
          alt=""
          height={25}
          width={25}
          className="w-1/2 "
        />
        <ul className="flex flex-col justify-start gap-6">
          <li className="text-xl font-bold">Contact Me Through</li>
          <li>
            <Link href={""} className="">
              Linked In
            </Link>
          </li>
          <li>
            <Link href={""} className="">
              Github
            </Link>
          </li>
        </ul>
      </Card>
    </div>
  );
}
