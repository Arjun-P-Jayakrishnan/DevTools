import { Textarea } from "@/components/_Atoms/TextArea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/_Molecules/Form";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { formSchema } from "../schema";

interface FormInputProps {
  label: string;
  placeholder: string;
  description: string;
  field: keyof z.infer<typeof formSchema>;
  form: UseFormReturn<z.infer<typeof formSchema>> | null;
}

const TextAreaFormField = ({
  label,
  placeholder,
  field,
  description,
  form,
}: FormInputProps) => {
  return form != null ? (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="input h-90"
            ></Textarea>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <></>
  );
};

export { TextAreaFormField };
export type { FormInputProps };
