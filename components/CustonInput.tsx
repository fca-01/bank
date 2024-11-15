
import { Control, FieldPath } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";

const formSchama = authFormSchema('sign-up');

interface Props {
  control: Control<z.infer<typeof formSchama>>;
  name: FieldPath<z.infer<typeof formSchama>>;
  placeholder: string;
  label: string;
}

export default function CustonInput({control, name, placeholder, label} : Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input placeholder={placeholder} className="input-class" {...field} type={name} />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}