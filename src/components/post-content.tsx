'use client'
import React, { useState, ReactNode } from 'react';
import DOMPurify from 'dompurify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaCheck } from 'react-icons/fa';

// Define types for props and data
interface CodeBlockProps {
  children: string;
  className?: string;
}

interface PostContentProps {
  html: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const [copied, setCopied] = useState<boolean>(false);
  
  // Extract language from className (e.g., 'lang-javascript')
  const language = className 
    ? className.replace('lang-', '').replace('language-', '') 
    : 'text';

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <CopyToClipboard text={children} onCopy={handleCopy}>
        <button 
          className="absolute top-2 right-2 z-10 p-2 bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Copy code"
        >
          {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter 
        language={language}
        style={materialDark}
        customStyle={{
          margin: '1rem 0',
          borderRadius: '0.5rem',
          fontSize: '0.9rem',
        }}
        showLineNumbers={true}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

const PostContent: React.FC<PostContentProps> = ({ html }) => {
  // Custom HTML parsing and transformation
  const transformHTML = (htmlString: string): string => {

    if (typeof window === 'undefined') return htmlString;
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    // Transform code blocks
    const codeBlocks = tempDiv.querySelectorAll('pre code');
    codeBlocks.forEach(codeBlock => {
      // Wrap code blocks in a way that can be processed by React
      const wrapper = document.createElement('div');
      wrapper.setAttribute('data-code-block', 'true');
      wrapper.setAttribute('class', codeBlock.className);
      wrapper.textContent = codeBlock.textContent;
      (codeBlock.parentNode as HTMLElement)?.parentNode?.replaceChild(wrapper, codeBlock.parentNode);
    });

    return tempDiv.innerHTML;
  };

  // Sanitize and transform HTML
  const sanitizedContent = DOMPurify.sanitize(
    transformHTML(html),
    {
      ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
        'p', 'br', 'strong', 'em', 'u', 'a', 
        'ul', 'ol', 'li', 
        'code', 'pre', 
        'blockquote',
        'div' // Added to support our code block wrapper
      ],
      ALLOWED_ATTR: [
        'href', 'target', 'rel', 'class', 
        'data-code-block' // Allow our custom attribute
      ]
    }
  );

  // Custom renderer to handle code blocks
  const renderContent = (content: string): ReactNode[] => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    return Array.from(tempDiv.childNodes).map((node, index) => {
      // Handle code blocks
      if (
        node.nodeType === Node.ELEMENT_NODE && 
        (node as Element).getAttribute('data-code-block') === 'true'
      ) {
        return (
          <CodeBlock 
            key={index} 
            className={(node as Element).className}
          >
            {node.textContent || ''}
          </CodeBlock>
        );
      }

      // For other elements, use dangerouslySetInnerHTML
      return (
        <div 
            key={index} 
            dangerouslySetInnerHTML={{ 
              __html: node instanceof Element 
                ? node.outerHTML 
                : '' 
            }}
          />
      );
    });
  };

  return (
    <article className="prose lg:prose-xl">
      {renderContent(sanitizedContent)}
    </article>
  );
};

export default PostContent;
