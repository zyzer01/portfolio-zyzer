'use client'
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './code-block';

interface MarkdownFormatterProps {
  markdown: string;
}

const MarkdownFormatter: React.FC<MarkdownFormatterProps> = ({ markdown }) => {
  return (
    <article className="prose lg:prose-xl w-full max-w-7xl text-slate-400 text-lg md:text-xl leading-loose">
      <Markdown
        components={{
          // @ts-ignore
          code: CodeBlock,
          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-semibold mb-2" {...props} />,
          a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic" {...props} />
          ),
          mark: ({node, ...props}) => (
            <mark className="bg-yellow-200 text-black px-1 py-0.5 rounded" {...props} />
          )
        }}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </Markdown>
    </article>
  );
};

export default MarkdownFormatter;
