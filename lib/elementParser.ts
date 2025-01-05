import { Content_Type } from "./mdx-utils";

export type ParsedData_Type = {
  name: string;
  url: string;
  type: "file" | "directory";
};

export function parseElementTree(startNode: Content_Type) {
  let contents: Content_Type = startNode;

  const processingQueue: Content_Type[] = [];
  const keys = Object.keys(contents.content);
  keys.forEach((key) => {
    processingQueue.push(contents.content[key]);
  });

  const processedData: ParsedData_Type[] = [];

  while (processingQueue.length !== 0) {
    let element = processingQueue.shift();

    if (element !== undefined) {
      contents = element;

      processedData.push({
        name: contents.name,
        url: contents.path,
        type: contents.type,
      });

      const keys = Object.keys(contents.content);

      keys.forEach((key) => {
        processingQueue.unshift(contents.content[key]);
      });
    }
  }
  return processedData;
}
