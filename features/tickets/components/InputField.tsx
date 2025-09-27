import { Input } from "@/components/Atoms/Input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Molecules/Form";
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

const InputFormField = ({
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
            <Input placeholder={placeholder} {...field} className="input" />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <></>
  );
};

export { InputFormField };
export type { FormInputProps };
