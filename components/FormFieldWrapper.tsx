import * as React from "react"
import { ChevronDown, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormFieldWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  label: string;
  value?: string;
  isSelect?: boolean;
}

const FormFieldWrapper = React.forwardRef<HTMLDivElement, FormFieldWrapperProps>(
  ({ icon: Icon, label, value, isSelect = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center w-full h-[72px] px-6 rounded-2xl bg-[#121212] border border-white/5",
          "text-white cursor-pointer hover:bg-[#1a1a1a] transition-all group outline-none",
          className
        )}
        {...props}
      >
        <div className="flex-shrink-0 mr-4">
          <Icon className="w-6 h-6 text-white" fill="white" />
        </div>

        <div className="h-8 w-[1px] bg-white/10 mr-4" />

        <div className="flex flex-col flex-1 overflow-hidden text-left">
          <span className="text-[10px] text-white/40 uppercase tracking-[0.1em] font-bold">
            {label}
          </span>
          <span className="text-lg font-medium truncate">
            {value || "Select..."}
          </span>
        </div>

        {/* Иконка стрелочки теперь часть варппера */}
        {isSelect && (
          <div className="ml-2 p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
            <ChevronDown className="w-4 h-4 text-white/50" />
          </div>
        )}
      </div>
    )
  }
)
export default FormFieldWrapper;