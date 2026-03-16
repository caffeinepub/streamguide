export default function KnowledgeHubPage() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 4rem)" }}>
      <iframe
        src="https://thesmartchoice.notion.site/ebd//d5e0532d3d6541e4b66ad90bd9f40b25"
        width="100%"
        height="600"
        style={{ flex: 1, border: "none" }}
        title="TSC Knowledge Hub"
        loading="lazy"
        allowFullScreen
      >
        <p className="p-8 text-center text-muted-foreground">
          Your browser does not support iframes. Please visit the{" "}
          <a
            href="https://thesmartchoice.notion.site/ebd//d5e0532d3d6541e4b66ad90bd9f40b25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:underline"
          >
            Knowledge Hub directly
          </a>
          .
        </p>
      </iframe>
    </div>
  );
}
