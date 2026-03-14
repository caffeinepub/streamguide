import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

interface TallyFormEmbedProps {
  formId: string;
  hideTitle?: boolean;
  dynamicHeight?: boolean;
  height?: number;
  className?: string;
  title?: string;
  alignLeft?: boolean;
}

export default function TallyFormEmbed({
  formId,
  hideTitle = true,
  dynamicHeight = true,
  height = 897,
  className = "",
  title = "Tally Form",
  alignLeft = false,
}: TallyFormEmbedProps) {
  const params = new URLSearchParams();
  if (alignLeft) params.set("alignLeft", "1");
  if (hideTitle) params.set("hideTitle", "1");
  if (dynamicHeight) params.set("dynamicHeight", "1");

  const tallySrc = `https://tally.so/embed/${formId}?${params.toString()}`;

  useEffect(() => {
    const TALLY_SCRIPT_URL = "https://tally.so/widgets/embed.js";

    const loadEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      } else {
        const iframes = document.querySelectorAll<HTMLIFrameElement>(
          "iframe[data-tally-src]:not([src])",
        );
        for (const el of iframes) {
          el.src = el.dataset.tallySrc ?? "";
        }
      }
    };

    if (typeof window.Tally !== "undefined") {
      loadEmbeds();
    } else if (!document.querySelector(`script[src="${TALLY_SCRIPT_URL}"]`)) {
      const script = document.createElement("script");
      script.src = TALLY_SCRIPT_URL;
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds;
      document.body.appendChild(script);
    } else {
      loadEmbeds();
    }
  }, []);

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
        style={{ width: "100%" }}
      />
    </div>
  );
}
