import { Accordian } from "@/app/ui/library/accordian";
import type { ParsedData_Type } from "@/lib/elementParser";
import Link from "next/link";
import { ReactNode, useState } from "react";
import type { Content_Type} from "@/lib/mdx-utils";
import navigationMetaData from "@/library-database/navigationMetaData.json";



interface Topic_Data {
  name: string;
  icon: any;
  path: string;
  contents: Content_Data[];
}

interface Content_Data {
  title: string;
  url: string;
  subTopic?: Content_Data;
}

/**
 * @description gives a link for a file or accordian for a folder
 * @param props the data and children to be rendered 
 * @returns Link Element or Accordian Wrapper
 */
function WrapperNode(props: {
  data: ParsedData_Type;
  children: ReactNode;
}) {
 
  return props.data.type === "file" ? (
    <Link href={"/dashboard/library/" + props.data.url} className="flex flex-col py-2 hover:text-green-500">
      {props.data.name}
    </Link>
  ) : (
    <Accordian title={props.data.name} isActive={true}>
      {props.children}
    </Accordian>
  );
}

interface ContentProps{
  content:Content_Type
  index:number
}

/**
 * @description creates the list of contents 
 * @param props Content properties
 * @returns 
 */
const Content = (props: ContentProps) => {
  const keys = Object.keys(props.content.content);
  const content = props.content.content;

  return (
    <WrapperNode
      data={{
        name: props.content.name,
        url: props.content.path,
        type: props.content.type,
      }}
    >
      {keys.length > 0 ? (
        keys.map((key, index) => (
          <Content
            content={content[key]}
            key={props.index + key}
            index={index}
          ></Content>
        ))
      ) : (
        <WrapperNode
          data={{
            name: props.content.name,
            url: props.content.path,
            type: props.content.type,
          }}
          children={null}
        />
      )}
    </WrapperNode>
  );
};

/**
 * 
 * @returns Topic with contents
 */
export const Topics = () => {
  const metaData = JSON.parse(JSON.stringify(navigationMetaData));
  const keys = Object.keys(metaData);

  return keys.map((key, index) => {
    return <Content content={metaData[key]} index={index} key={index} />;
  });
};


