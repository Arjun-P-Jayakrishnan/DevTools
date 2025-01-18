import { type } from "os";
import { ReactNode, useState } from "react";
import style from "styled-jsx/style";

interface AccordianProps {
  /**
   * @description display text to be show on the selcection
   */
  title: string;
  /**
   * @description Expanded state is true or false
   */
  isActive: boolean;
  /**
   * @description child components to be rendered inside
   */
  children: ReactNode;
}

/**
 * @description Accordians are the small expandable list of elements that you
 * can click on which expands the list.
 * @param props accordian props
 */
export const Accordian = (props: AccordianProps) => {
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
        className="flex flex-col px-4 pb-5 sm:px-6 sm:pb-6"
      >
        {props.children}
      </div>
    </div>
  );
};
