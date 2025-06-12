"use client";
import { JsonViewer } from "@/features/tools/json-viewer";

export default function JsonViewerPage() {
  return (
    <div className="text-primary w-full h-full">
      <div>
        <h1 className="px-3 text-xl pb-6 pt-2 font-bold">
          Enter Your Json Below
        </h1>
      </div>
      <JsonViewer />
    </div>
  );
}
