"use client";
import { VscFolderLibrary } from "react-icons/vsc";
import { Content_Type} from "@/lib/mdx-utils";
import navigationMetaData from "@/library-database/navigationMetaData.json";
import { WrapperNode } from "./(context)/elementReactParser";

const Content = (props: { content: Content_Type; index: number }) => {
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



const Topics = () => {
  const metaData = JSON.parse(JSON.stringify(navigationMetaData));
  const keys = Object.keys(metaData);

  return keys.map((key, index) => {
    return <Content content={metaData[key]} index={index}  />;
  });
};

const SideNavbar = () => {
  return (
    <>
      <div
        className="min-h-full
         bg-white border border-gray-200 rounded-lg shadow 
                 dark:bg-gray-800 
                dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex flex-row justify-start items-center px-1 gap-1 mr-1 mb-10">
          <VscFolderLibrary size={50} />
          Library
        </div>
        <ul className="list-disc list-inside px-3 flex flex-col gap-3">
          <Topics />
        </ul>
      </div>
    </>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNavbar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
