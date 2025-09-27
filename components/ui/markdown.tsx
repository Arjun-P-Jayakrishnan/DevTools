import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "../../app/globals.css";
import Button from "../_Atoms/Button";

export interface MarkdownProps {
  title?: string;
  tags?: string[];
  content?: string;
  className?: string;
}

const MarkdownViewer = ({
  title,
  content,
  tags = [],
  className = "",
}: MarkdownProps) => {
  return (
    <div
      className={`${className} h-full text-black prose dark:prose-invert overflow-y-scroll pb-12`}
    >
      <div className="text-5xl flex flex-row justify-center pt-6">{title}</div>
      {tags.length > 0 ? (
        <ul className="flex flex-row gap-2 justify-center">
          {tags.map((tag, index) => {
            return (
              <Button key={index} className="bg-gray-600">
                {tag}
              </Button>
            );
          })}
        </ul>
      ) : (
        ""
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
