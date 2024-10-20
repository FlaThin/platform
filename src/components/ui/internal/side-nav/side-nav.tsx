import { IoExitOutline } from "react-icons/io5";
import { PiHouseSimpleLight } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { NavItem } from "./nav-item";
import Image from "next/image";

export function SideNav() {
    var gostosao = "https://instagram.fcgh12-1.fna.fbcdn.net/v/t51.29350-15/269926250_207265954943055_4205314260636765726_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgh12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1Xq23PfNyXoQ7kNvgGiMZQQ&_nc_gid=44b4feddb6d8409e9399b86dfaa8d7a5&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MjczNjc4MDQzODkxMzAxMjY5MA%3D%3D.3-ccb7-5&oh=00_AYDPAD1W_m9pO2z9iC0WrdU-Tpid7gsExYKfhckYsNhO6A&oe=670E17FF&_nc_sid=22de04"

    return (
        <div className="flex flex-col items-center w-32 h-full py-4">
            <div className="h-fit w-fit rounded-full overflow-hidden" >
                <Image src={gostosao} alt="gay" width={48} height={48} />
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