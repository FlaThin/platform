import { Header } from "../../header";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { GrAppsRounded } from "react-icons/gr";
import { Profile } from "./profile";
import { SlideInput } from "./slide-input";

export function HeaderSimple() {

	return (
		<header className="flex justify-between py-4 items-center w-full h-fit relative">
			<Header.left>
				logo
			</Header.left>
			<Header.center className="absolute top-4 left-1/2 -translate-x-1/2">
				<Popover>
					<PopoverTrigger>
						<div className="bg-zinc-100/70 p-2 rounded-full" >
							<div className="bg-zinc-50 p-3 rounded-full">
								<GrAppsRounded />
							</div>
						</div>
					</PopoverTrigger>
					<PopoverContent className="rounded-xl grid grid-cols-3 gap-2">
						<h3 className="flex flex-col items-center bg-zinc-200/40 py-3 rounded-2xl">
							<span className="text-sm">Manager</span>
						</h3>
						<h3 className="flex flex-col items-center bg-zinc-200/40 py-3 rounded-2xl">
							<span className="text-sm">Sync</span>
						</h3>
						<h3 className="flex flex-col items-center bg-zinc-200/40 py-3 rounded-2xl">
							<span className="text-sm">Analytics</span>
						</h3>
						<h3 className="flex flex-col items-center bg-zinc-200/40 py-3 rounded-2xl col-start-2">
							<span className="text-sm">Monitor</span>
						</h3>
					</PopoverContent>
				</Popover>
			</Header.center>
			<Header.right>
				<div className="flex gap-4 items-center">
					<SlideInput/>

					<Profile/>
					
				</div>
			</Header.right>
		</header>
	)

}