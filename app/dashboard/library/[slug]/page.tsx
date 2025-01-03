import { WalkingTheTree } from "@/lib/mdx-utils";
import fs from "fs"
import path from "path"


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const urls=WalkingTheTree(process.cwd(),'/library-database');


  //const { default: Post } = await import(`@/library-database/${slug}.mdx`)
  console.log({slug})
  const { default: Post } = await import(`@/library-database/${slug}.mdx`)
 
  return <Post />
}
 
export async function  generateStaticParams() {

  const files = fs.readdirSync('library-database');

  // return  files.map((file) => {
  //   return {
  //   params: {
  //     slug: file,
  //   }
  // }});
    
  return WalkingTheTree(process.cwd(),'/library-database')
}
 
export const dynamicParams = false