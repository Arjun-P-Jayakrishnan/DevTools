import {FaTools} from "react-icons/fa";
import { lusitana } from '@/app/ui/fonts';

export default function DevToolsLogo() {
  return (
    <div
      className={`${lusitana.className} flex gap-8 flex-row items-center leading-none text-white`}
    >
      <FaTools className='h-12 w-12' />
      <p className="text-xl">Dev Tools</p>
    </div>
  );
}
