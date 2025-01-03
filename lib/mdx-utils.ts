import fs from "fs";
import path from "path";

export interface Urls {
  params: {
    slug: string;
  };
}

export function WalkingTheTree(startDirectoryPath: string,startDir:string): Urls[] {
  const urls: Urls[] = [];

  const directories: string[] = [];
  const files: string[] = [];

  const queue:string[]=[startDir];
  const paths:string[]=[];

  while (queue.length!==0) {
    const file = queue.shift() as string;

    if (file === undefined) {
      break;
    }
    const stat = fs.lstatSync(path.join(startDirectoryPath,file));
    //console.log(stat.isFile())
    /**
     * if the name indicates a file type then we have a path
     * and hence we can remoive fro list and add it to paths
     */
    if (stat.isFile()) {
      urls.push({
        params: {
          slug: file.split(".").slice(0, -1).join("."),
        },
      });
      paths.push(file);
     // console.log({file})
    }

    if (stat.isDirectory()) {
      const subFiles=fs.readdirSync(path.join(startDirectoryPath,file));
      subFiles.forEach((fileName)=>{
        queue.push(path.join(file,fileName))
      })

    }
    
  }

  console.log(paths,urls)
  // return [
  //   {
  //     params: {
  //       slug: "intro",
  //     },
  //   },
  // ];

  return urls;
}
