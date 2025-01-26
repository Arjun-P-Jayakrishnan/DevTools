// import metaData from "@/library-database/slugMetaData.json";
// import fs from "fs";
// import path from "path";
// import { serialize } from 'next-mdx-remote/serialize';
// import matter from 'gray-matter';



// interface PostMetaData {
//   title?:string,
//   slug: string;
// }

// interface Post_Type {
//   meta: PostMetaData;
//   compiledSource: string;
// }

// /**
//  *
//  * @param slug the filename of the mdx with prefix of file location e.g folder1_folder2_file1.mdx
//  * @returns
//  */
// export const getPostBySlug = async (slug: string): Promise<Post_Type> => {
//   const filePath = path.join(
//     process.cwd(),
//     `/library-database/${slug.split("_").join("/")}.mdx`
//   );
//   const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

//   const { data, content } = matter(fileContent);

//   const source = await serialize(content, {
//     parseFrontmatter: false,
//     mdxOptions: {
//       remarkPlugins: [],
//       rehypePlugins: []
//     }
//   });

//   const {compiledSource} =source;

//   return { meta: { ...data, slug: slug }, compiledSource: compiledSource };
// };

// /**
//  * @returns meta data in the required format
//  */
// export const getPostsMetaData = async (): Promise<PostMetaData[]> => {
//   const files = JSON.parse(JSON.stringify(metaData));
//   let posts: PostMetaData[] = [];
//   for (const fileName of files) {
//     const { meta } = await getPostBySlug(fileName);
//     posts.push(meta);
//   }
//   return posts;
// };
