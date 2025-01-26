// import { getPostBySlug } from "@/app/mdx-layout/utils";
import metaData from "@/library-database/slugMetaData.json";

/**
 * @description Finds the markdown file from the given list
 * @param param0 the parameters from url
 * @returns creates teh mdx from it
 */
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const { default: Post } = await import(
    `@/library-database/${slug.split("_").join("/")}.mdx`
  );

  return <Post />;
}

/**
 * @description shows allowed slugs
 * @returns {
 *  params:{
 *     slug:string
 *  }
 * }
 */

export async function generateStaticParams(): Promise<any> {
  return JSON.parse(JSON.stringify(metaData));
}

export const dynamicParams = false;
