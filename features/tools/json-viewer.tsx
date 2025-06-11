"use client";

import { Textarea } from "@/modules/common/TextArea";
import dynamic from "next/dynamic";
import { useState } from "react";

interface TextFieldProps extends React.ComponentProps<"textarea"> {
  errorText: string;
}
const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

const JsonTextField = ({ errorText, onChange }: TextFieldProps) => {
  return (
    <div className="h-full w-3/4 border-r-2 ">
      <Textarea
        placeholder={"Paste the json here"}
        className="input h-5/6 rounded-none"
        onChange={(e) => {
          onChange?.(e);
        }}
        onKeyDown={(e) => {
          if (e.key === "Tab") e.preventDefault();
        }}
      />
      {errorText}
    </div>
  );
};

const JsonViewer = () => {
  const [json, setJson] = useState<object>({});
  const [error, setError] = useState<string>("");

  function updateJson(newValue: string) {
    try {
      const json = JSON.parse(newValue);
      setError("");
      setJson(json);
    } catch (err) {
      console.log(err);
      setError("Incorrect Json");
    }
    //setJson();
  }

  return (
    <div className="text-primary h-full flex flex-row justify-start">
      <JsonTextField
        onChange={(e) => updateJson(e.target.value)}
        errorText={error}
      />
      <div className="w-full">
        <ReactJson src={json} />
      </div>
    </div>
  );
};

export { JsonViewer };
