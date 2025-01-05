"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { VscExtensions } from "react-icons/vsc";



export interface Topic_Data {
  name: string;
  icon: any;
  path: string;
  contents: Content_Data[];
}

export interface Content_Data {
  title: string;
  url: string;
  subTopic?: Content_Data;
}



export interface NavigationContext {
  metaData:[],
  path: string;
  push: (relativePath: string) => void;
  pop: () => string;
  reload: (path: string) => void;
}

const list: Topic_Data[] = [
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

export const navigationMetaData:Topic_Data[]=[];

interface Props {
  children: ReactNode;
}

const NavigationContext = createContext({} as NavigationContext);

export const NavContext = ({ children }: Props) => {
  const [path, setPath] = useState("/dashboard/library/");

  const push = (path: string) => {};

  const pop = () => {
    return "";
  };

  const reload = (path: string) => {};

  let sharedNavigationContext: NavigationContext = {
    metaData:[],
    path: "/dashboard/library/",
    push: push,
    pop: pop,
    reload: reload,
  };

  return (
    <NavigationContext.Provider value={sharedNavigationContext}>
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigationContext() {
  return useContext(NavigationContext);
}
