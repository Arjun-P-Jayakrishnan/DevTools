import fs from "fs";
import path from "path";

/**
 * @description for creating slugs for the static props
 */
export interface Urls {
  params: {
    slug: string;
  };
}

export function WalkingTheTree(
  startDirectoryPath: string,
  startDir: string,
  nonInclusiveFiles:string[]
): Urls[] {
  const urls: Urls[] = [];

  const queue: string[] = [];
  const paths: string[] = [];
  const absPath = path.join(startDirectoryPath, startDir);
  const subFiles = fs.readdirSync(absPath);

  subFiles.forEach((fileName) => {
    if(!nonInclusiveFiles.includes(fileName)){
      queue.push(fileName);
    }
  });

  while (queue.length !== 0) {
    const file = queue.shift() as string;

    if (file === undefined) {
      break;
    }
    const stat = fs.lstatSync(path.join(absPath, file));
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
    }

    if (stat.isDirectory()) {
      const subFiles = fs.readdirSync(path.join(absPath, file));
      subFiles.forEach((fileName) => {
        queue.push(path.join(file, fileName));
      });
    }
  }

  return urls.map((url) => {
    const _url = url;
    _url.params.slug = url.params.slug.split("\\").join("_");
    return _url;
  });
}


/**
 * @description for creating data for navigation side bar
 */
export type Content_Type = {
  name: string;
  path: string;
  type: "file" | "directory";
  content: { [key: string]: Content_Type };
};

export type Topic_Type = {
  [key: string]: Content_Type;
};

export function NavigationMetaData(
  initialPath: string,
  nonInclusiveFiles:string[]
) {
  const metaData: Topic_Type = {};

  const queue: string[] = [];

  const paths: string[] = [];
  const absPath = initialPath;
  const subFiles = fs.readdirSync(absPath);

  subFiles.forEach((fileName) => {
    if(!nonInclusiveFiles.includes(fileName)){
      queue.push(fileName);
    }
  });

  while (queue.length !== 0) {
    const file = queue.shift() as string;

    if (file === undefined) {
      break;
    }
    const stat = fs.lstatSync(path.join(absPath, file));
    /**
     * if the name indicates a file type then we have a path
     * and hence we can remoive fro list and add it to paths
     */
    if (stat.isFile()) {
      // paths.push(file.split(".").slice(0, -1).join("."));
      paths.push(file);
    }

    if (stat.isDirectory()) {
      const subFiles = fs.readdirSync(path.join(absPath, file));
      subFiles.forEach((fileName) => {
        queue.push(path.join(file, fileName));
      });
    }
  }
  paths.forEach((pathName) => {
    let index = 1;

    const _path = pathName.split("\\");
    let topic: Content_Type = metaData[_path[0].split(".").slice(0, 1).join(".")];

    if (topic === undefined) {
      const stat = fs.lstatSync(path.join(absPath, _path[0]));

      let key=_path[0].split(".").slice(0, 1).join(".")
      if (stat.isFile()) {
        metaData[key] = {
          name: key,
          path: key,
          type: "file",
          content: {},
        };
      }

      if (stat.isDirectory()) {
        metaData[key] = {
          name: key,
          path: key,
          type: "directory",
          content: {},
        };
      }

      topic = metaData[key];
    }

    while (index < _path.length) {
      const key=_path[index].split(".").slice(0, 1).join(".");
      if (topic.content[key] === undefined) {
        let _url = "";
        _path.map((_pathName, _index) => {
          if(_index<=index){
          _url = _url + _pathName + "_";
          }
        });
        const stat = fs.lstatSync(path.join(absPath, ..._url.split("_")));
        if (stat.isFile()) {
          
          topic.content[key] = {
            path: _url.split(".").slice(0, 1).join("."),
            name:key,
            type: "file",
            content: {},
          };
        }

        if (stat.isDirectory()) {
          
          topic.content[key] = {
            path: _url,
            name: key,
            type: "directory",
            content: {},
          };

        }
      }
      topic = topic.content[key];
      index++;
    }

    topic.content[_path[index]];
  });

  return metaData;
}

