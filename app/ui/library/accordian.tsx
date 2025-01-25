import { ReactElement, ReactNode, useState } from "react";
import { RiArrowDropDownFill, RiArrowDropLeftFill } from "react-icons/ri";

interface AccordianProps {
  /**
   * @description the prefic element
   */
  prefix?: ReactElement;
  /**
   * @description display text to be show on the selcection
   */
  title: string;
  /**
   * @description suffix element
   */
  suffic?: ReactElement;
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
        <div className="flex flex-row items-center justify-start gap-1">
        {props.prefix ?? null}
        <span
          className={"text-start font-semibol text-black hover:text-blue-500"}
        >
          {props.title}
        </span>
        </div>
        {active ? <RiArrowDropDownFill /> : <RiArrowDropLeftFill />}
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
