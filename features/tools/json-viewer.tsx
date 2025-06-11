"use client";

import { Textarea } from "@/modules/common/TextArea";
import { useState } from "react";
import ReactJson from "react-json-view";

interface TextFieldProps extends React.ComponentProps<"textarea"> {
  errorText: string;
}

const JsonTextField = ({ errorText, onChange }: TextFieldProps) => {
  return (
    <div className="h-5/6 w-1/2 border-r-2 ">
      <Textarea
        placeholder={"Paste the json here"}
        className="input h-full rounded-none"
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
      <ReactJson src={json} />
    </div>
  );
};

export { JsonViewer };
