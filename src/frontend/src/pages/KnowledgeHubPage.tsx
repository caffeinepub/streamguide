import { useState } from "react";

const NOTION_URL =
  "https://thesmartchoice.notion.site/ebd//d5e0532d3d6541e4b66ad90bd9f40b25";

export default function KnowledgeHubPage() {
  const [loadFailed, setLoadFailed] = useState(false);

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
      {!loadFailed && (
        <iframe
          src={NOTION_URL}
          width="100%"
          style={{ flex: 1, border: "none" }}
          title="TSC Knowledge Hub"
          loading="lazy"
          allowFullScreen
          onError={() => setLoadFailed(true)}
        />
      )}

      {loadFailed && (
        <div
          className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center"
          data-ocid="knowledge_hub.error_state"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="img"
            aria-label="Warning"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-800">
            Knowledge Hub couldn't load
          </h2>
          <p className="max-w-md text-gray-500">
            The embedded content is temporarily unavailable. You can access the
            full Knowledge Hub directly on Notion.
          </p>
          <a
            href={NOTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 transition-colors"
            data-ocid="knowledge_hub.primary_button"
          >
            Open Knowledge Hub
          </a>
        </div>
      )}

      {/* Always show fallback link below the iframe as a safety net */}
      {!loadFailed && (
        <div className="border-t bg-gray-50 py-3 text-center text-sm text-gray-500">
          Having trouble viewing?{" "}
          <a
            href={NOTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:underline"
            data-ocid="knowledge_hub.link"
          >
            Open Knowledge Hub in a new tab
          </a>
        </div>
      )}
    </div>
  );
}
