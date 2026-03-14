import { CheckCircle, Loader2, XCircle } from "lucide-react";

interface SubmissionStatePanelProps {
  type: "loading" | "success" | "error";
  title?: string;
  message?: string;
  onReset?: () => void;
}

export default function SubmissionStatePanel({
  type,
  title,
  message,
  onReset,
}: SubmissionStatePanelProps) {
  if (type === "loading") {
    return (
      <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg">
        <Loader2 className="w-6 h-6 text-amber-600 animate-spin mr-3" />
        <span className="text-foreground">{message || "Submitting..."}</span>
      </div>
    );
  }

  if (type === "success") {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          {title || "Success!"}
        </h3>
        <p className="text-muted-foreground mb-6">
          {message || "Your submission was successful."}
        </p>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-amber-700 bg-white dark:bg-gray-800 dark:text-amber-400 border-2 border-amber-600 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-all"
          >
            Submit Another
          </button>
        )}
      </div>
    );
  }

  if (type === "error") {
    return (
      <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
        <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-destructive mb-1">
            {title || "Error"}
          </h4>
          <p className="text-sm text-destructive/90">
            {message || "Something went wrong. Please try again."}
          </p>
        </div>
      </div>
    );
  }

  return null;
}
