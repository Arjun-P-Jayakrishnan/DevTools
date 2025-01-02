import { NavContext } from "./(context)/context";
import { VscExtensions } from "react-icons/vsc";
import { VscFolderLibrary } from "react-icons/vsc";
import Link from "next/link";

interface Topic {
  name: string;
  icon: any;
  path: string;
  contents: Content[];
}

interface Content {
  title: string;
  url: string;
  subTopic?: Content;
}

const list: Topic[] = [
  {
    name: "Dev Tools",
    path: "library/dev_tools",
    icon: null,
    contents: [],
  },
  {
    name: "Go Documneter",
    path: "library/go_documenetor",
    icon: null,
    contents: [],
  },
  {
    name: "Vs Code Extension",
    path: "library/extension",
    icon: <VscExtensions />,
    contents: [
      {
        title: "Grammar",
        url: "/grammar",
      },
    ],
  },
];

const Topic=(topic:Topic,key:number)=>{
  return (
    <li key={key} className="flex flex-row align-top ">
      <Link href={topic.path} className="flex flex-row justify-evenly items-center gap-1 ">
        {topic.icon}
        {topic.name}
      </Link>
    </li>
  );
}

const SideNavbar = () => {
  return (
    <>
      <NavContext>
        <div className="min-h-full
         bg-white border border-gray-200 rounded-lg shadow 
                hover:bg-gray-100 dark:bg-gray-800 
                dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-row justify-start items-center px-1 gap-1 mr-1 mb-10">
            <VscFolderLibrary size={50} />
            Library
          </div>
          <ul className="px-3 flex flex-col gap-3">
            {list.map((item, index) => {
              return Topic(item,index)
            })}
          </ul>
       </div>
      </NavContext>
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
