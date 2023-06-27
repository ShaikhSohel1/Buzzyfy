import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  active: boolean;
  href: string;
  icon: IconType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  active,
  href,
  icon: Icon,
}) => {
  return (
    <Link
      href={href}
      className={twMerge("flex flex-row items-center w-full gap-x-4 text-lg cursor-pointer rounded-lg  h-auto  text-neutral-400  transition  hover:text-white py-1 ",
        active && "text-white"
      )}
    >
        <Icon size={26}/>
        <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
