import { contentProps } from "./types/content-types";

export function Content({ children }: contentProps) {
  return (
    <div className="h-full flex-1 overflow-y-auto py-2">
        {children}
    </div>
  )
}