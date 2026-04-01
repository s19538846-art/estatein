import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import SelectDemo from "./SelectField";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

interface InputGridProps {
    fields: BookingField[];
    onValueChange?: (id: string, value: string) => void;
}
export default function InputGrid() {
    return (
        <FieldGroup className="grid max-w-sm grid-cols-2">
            <Field>
                <FieldLabel htmlFor="first-name">First Name</FieldLabel>
                <Input id="first-name" placeholder="Jordan" />
            </Field>
            <Field>
                <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
                <Input id="last-name" placeholder="Lee" />
            </Field>
            <Field>
                <FieldLabel htmlFor="form-country">
                    Preferred Location
                </FieldLabel>
                <Select defaultValue="us">
                    <SelectTrigger id="form-country">
                        <span>Select Location</span>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                </Select>
            </Field>
            <Field>
                <FieldLabel htmlFor="form-country">Property Type</FieldLabel>
                <Select defaultValue="us">
                    <SelectTrigger id="form-country">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                </Select>
            </Field>
            <Field>
                <FieldLabel htmlFor="form-country">Country</FieldLabel>
                <Select defaultValue="us">
                    <SelectTrigger id="form-country">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                </Select>
            </Field>
        </FieldGroup>
    );
}
