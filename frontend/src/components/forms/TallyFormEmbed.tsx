import { useEffect } from 'react';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

interface TallyFormEmbedProps {
  /**
   * The Tally form ID (e.g., 'EkX2OB')
   */
  formId: string;
  /**
   * Whether to hide the form title (default: true)
   */
  hideTitle?: boolean;
  /**
   * Whether to use dynamic height (default: true)
   */
  dynamicHeight?: boolean;
  /**
   * Fallback height in pixels when dynamicHeight is false (default: 897)
   */
  height?: number;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Title attribute for the iframe (for accessibility)
   */
  title?: string;
}

export default function TallyFormEmbed({
  formId,
  hideTitle = true,
  dynamicHeight = true,
  height = 897,
  className = '',
  title = 'Tally Form',
}: TallyFormEmbedProps) {
  const params = new URLSearchParams();
  if (hideTitle) params.set('hideTitle', '1');
  if (dynamicHeight) params.set('dynamicHeight', '1');

  const tallySrc = `https://tally.so/embed/${formId}?${params.toString()}`;

  useEffect(() => {
    const TALLY_SCRIPT_URL = 'https://tally.so/widgets/embed.js';

    const loadEmbeds = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      } else {
        // Fallback: manually set src on iframes with data-tally-src
        document.querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])').forEach((el) => {
          el.src = el.dataset.tallySrc ?? '';
        });
      }
    };

    if (typeof window.Tally !== 'undefined') {
      // Tally already loaded
      loadEmbeds();
    } else if (!document.querySelector(`script[src="${TALLY_SCRIPT_URL}"]`)) {
      // Inject the Tally embed script
      const script = document.createElement('script');
      script.src = TALLY_SCRIPT_URL;
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds;
      document.body.appendChild(script);
    } else {
      // Script tag exists but Tally not yet defined — wait for it
      loadEmbeds();
    }
  }, [formId]);

  return (
    <div className={`w-full ${className}`}>
      <iframe
        data-tally-src={tallySrc}
        loading="lazy"
        width="100%"
        height={height}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title={title}
        style={{ width: '100%' }}
      />
    </div>
  );
}
