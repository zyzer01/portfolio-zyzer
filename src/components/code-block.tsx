import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaCopy, FaCheck } from "react-icons/fa6";
import ReactMarkdownProps from "react-markdown";

const CodeBlock: React.FC<{
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
} & typeof ReactMarkdownProps> = ({ node, inline, className, children, ...props }) => {
  const [copiedCodeBlocks, setCopiedCodeBlocks] = useState<
    Record<string, boolean>
  >({});

  const handleCodeCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    const blockId = code.slice(0, 10).replace(/\W/g, "");
    setCopiedCodeBlocks((prev) => ({
      ...prev,
      [blockId]: true,
    }));

    setTimeout(() => {
      setCopiedCodeBlocks((prev) => ({
        ...prev,
        [blockId]: false,
      }));
    }, 2000);
  };

  const match = /language-(\w+)/.exec(className || "");
  const code = String(children).replace(/\n$/, "");
  const blockId = code.slice(0, 10).replace(/\W/g, "");

  return !inline && match ? (
    <div className="relative group">
      <SyntaxHighlighter
        className="rounded-xl"
        style={atomDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={() => handleCodeCopy(code)}
        className="absolute top-2 right-2 p-1 bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity ease"
      >
        {copiedCodeBlocks[blockId] ? (
          <FaCheck size={16} className="text-green-400" />
        ) : (
          <FaCopy size={16} />
        )}
      </button>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default CodeBlock;
