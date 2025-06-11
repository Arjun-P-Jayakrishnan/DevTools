import Image from "next/image";
export default function ToolsPage() {
  return (
    <div className="w-5/6 h-full bg-background rounded-md text-primary flex flex-row justify-center items-space px-10 py-1">
      <div className="w-1/2 flex flex-col justify-center gap-5">
        <h1 className="text-primary text-5xl">Faster Development</h1>
        <h3 className="text-primary text-2xl">from tools from Dev Tools</h3>
        <blockquote className="text-2xl italic border-l-4 pl-4 border-gray-400  text-gray-600">
          “A Simple program or script can make work thousand fold better!”
        </blockquote>
      </div>
      <Image
        src="/tools.svg"
        height={25}
        width={25}
        alt="Tools Page"
        className="h-full w-1/2"
      />
    </div>
  );
}
