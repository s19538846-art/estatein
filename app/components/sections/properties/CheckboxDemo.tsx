import { Checkbox } from "@/app/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/app/components/ui/field"

export function CheckboxBasic() {
  return (
    <FieldGroup className="mx-auto text-zinc-500">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic w-full" >
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
