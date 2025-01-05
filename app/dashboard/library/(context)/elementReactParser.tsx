import { ParsedData_Type } from "@/lib/elementParser";
import Link from "next/link";
import { JSX, ReactNode, useState } from "react";

const elementsQueue: string[] = [];
let index = 0;

/**
 *
 * @param nodeStart start node
 * @param nodeEnd end node
 * @param isWrapper if true then index is within start and end tags else complets the element
 * and moves outside the end tag
 */
function addElementToQueue(nodeType: "accordion" | "link", isWrapper: boolean) {
  elementsQueue.splice(index, 0, nodeType + "-start");
  elementsQueue.splice(index + 1, 0, nodeType + "-end");
  index += 1;

  if (isWrapper === true) {
    index += 1;
  }
}

export const Accordian = (props: {
  title: string;
  isActive: boolean;
  children: ReactNode;
}) => {
  const [active, setActive] = useState(props.isActive);
  function toggle() {
    setActive(!active);
  }

  return (
    <div className="min-w-full transition-all duration-20 borde cursor-pointer">
      <button
        type="button"
        className="flex items-center justify-between w-full gap-0.3"
        onClick={toggle}
      >
        <span
          className={"text-start font-semibol text-black hover:text-blue-500"}
        >
          {props.title}
        </span>
        <svg
          id="arrow1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-3 h-3 text-gray-400"
          style={
            active
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(90deg)" }
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        style={active ? { display: "none" } : { display: "block" }}
        className="px-4 pb-5 sm:px-6 sm:pb-6"
      >
        {props.children}
      </div>
    </div>
  );
};

export function WrapperNode(props: {
  data: ParsedData_Type;
  children: ReactNode;
}) {
  console.log(props)
  return props.data.type === "file" ? (
    <Link href={"/dashboard/library/" + props.data.url}>{props.data.name}</Link>
  ) : (
    <Accordian title={props.data.name} isActive={true}>
      {props.children}
    </Accordian>
  );
}

export function convertToReactElementTree(data: ParsedData_Type[]) {}
