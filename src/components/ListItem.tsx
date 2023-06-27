"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import {FC} from "react";


interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem:FC<ListItemProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter();

    const onClick = () => {
     // add authentication in future
          router.push(href);
    }

    return ( 
        <button className=" relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
                <div className="relative min-h-[64px] min-w-[64px]">
                    <Image  
                    className="object-cover"
                    fill
                    src={image}
                    alt="image"/>

                </div>
                <p>{name}</p>
        </button>
     );
}
 
export default ListItem;