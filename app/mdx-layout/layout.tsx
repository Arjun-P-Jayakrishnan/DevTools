import Head from "next/head"

interface LayoutProps {
  children: React.ReactNode;
  meta: { author: string; title: string; slug: string; topics: string[] };
}

export function MdxLayout({children, ...props}: LayoutProps) {
    // Create any shared layout or styles here
    return (
      // <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        <div className="prose w-[80%] mx-auto p-6">
        {/* Head */}



        <div className="flex flex-col mt-6 mb-10 items-center justify-center text-center">
          <h1 className="text-3xl font-bold">{props.meta.title}</h1>
          <p className="text-md text-gray-500">By {props.meta.author}</p>
          {/* topics */}
          <div className="flex flex-wrap gap-2 mt-4">
            {props.meta.topics.map((topic) => (
              <span
                key={topic}
                className="text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1"
              >
                {topic.slice(0, 1).toUpperCase() + topic.slice(1)}
              </span>
            ))}
          </div>
        </div>


        {children}
      </div>
      // </div>
    )
}