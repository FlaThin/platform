import { IoExitOutline } from "react-icons/io5";
import { PiHouseSimpleLight } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { NavItem } from "./nav-item";
import UserPhoto from "../../../../../public/user.png"
import Image from "next/image";

export function SideNav() {
   
    return (
        <div className="flex flex-col items-center w-32 h-full py-4">
            <div className="h-fit w-fit rounded-full overflow-hidden" >
                <Image src={UserPhoto} alt="gay" width={48} height={48} />
            </div>

            <div className="flex flex-col flex-1 items-center justify-center gap-3">
                <NavItem factorIcon={() => <PiHouseSimpleLight />} />
                <NavItem factorIcon={() => <GrAppsRounded />} />
                <NavItem factorIcon={() => <SlEnergy />} />
            </div>

            <div className="flex items-center justify-center h-24">
                <NavItem factorIcon={() => <IoExitOutline />} />
            </div>
        </div>
    )

}