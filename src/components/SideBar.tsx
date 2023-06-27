"use client";
import {usePathname} from "next/navigation";
import { useMemo } from "react";
import {HiHome,HiSearch} from "react-icons/hi";
import Box from "./Box";
import Library from "./Library";
import SidebarItem from "./SidebarItem";

interface SideBarProps {
    children: React.ReactNode;
}

const SideBar:React.FC<SideBarProps> = ({children}) => {
    const pathName= usePathname();

    const routes = useMemo(() => [
        {
            label: "Home",
            active: pathName !== "/search",
            href: "/",
            icon: HiHome,
        },
        {
            label: "Search",
            active: pathName === "/search",
            href: "/search",
            icon: HiSearch,
        },
        
    ], [pathName]);

    return ( 
       <div className="flex h-full">
        <div className="hidden md:flex  flex-col gap-y-2  h-full   w-[300px]  p-2 bg-black  ">
            <Box>
                <div className="flex flex-col gap-y-4 px-5 py-4">
                {routes.map((item) => (
                    <SidebarItem key={item.label} {...item} />
                ))}
                </div>
            </Box>

            <Box classname="overflow-y-auto h-full">
                <Library/>
            </Box>
        </div>
        <main className="h-full flex-1 overflow-y-auto py-2 ">
            {children}
        </main>
       </div>
     );
}
 
export default SideBar;