import { useEffect, useRef } from 'react';

interface TallyFormEmbedProps {
  /**
   * The Tally form URL (e.g., https://tally.so/r/yourFormId)
   * or the full embed code from Tally
   */
  formUrlOrEmbedCode: string;
  /**
   * Height of the iframe (default: 600px)
   */
  height?: string;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
}

export default function TallyFormEmbed({
  formUrlOrEmbedCode,
  height = '600px',
  className = '',
}: TallyFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEmbedCode = formUrlOrEmbedCode.includes('<iframe') || formUrlOrEmbedCode.includes('<script');

  useEffect(() => {
    // If it's embed code with script tags, inject it
    if (isEmbedCode && containerRef.current) {
      containerRef.current.innerHTML = formUrlOrEmbedCode;

      // Execute any scripts in the embed code
      const scripts = containerRef.current.getElementsByTagName('script');
      Array.from(scripts).forEach((oldScript) => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      });
    }
  }, [formUrlOrEmbedCode, isEmbedCode]);

  // If it's just a URL, render an iframe
  if (!isEmbedCode) {
    return (
      <div className={`w-full ${className}`}>
        <iframe
          src={formUrlOrEmbedCode}
          width="100%"
          height={height}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact Form"
          className="rounded-lg border border-border"
          style={{ minHeight: height }}
        />
      </div>
    );
  }

  // If it's embed code, render the container for injection
  return <div ref={containerRef} className={`w-full ${className}`} />;
}
