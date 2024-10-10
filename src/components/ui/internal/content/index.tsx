import { contentProps } from "./types/content-types";

export function Content({ children }: contentProps) {
  return (
    <div className="h-full flex-1">{ children }</div>
  )
}