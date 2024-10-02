import { ReactNode } from "react";
import BackIcon from "../assets/back_icon.svg";
import ConfigIcon from "../assets/config_icon.svg";
import { Button } from "./ui/button";
import clsx from "clsx";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="relative ml-auto flex-1">
      <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4" />
      <Input
        type="search"
        placeholder="Search"
        className="w-full rounded-2xl pl-14 bg-[#FFFFFF26] h-16 text-xl border-none"
      />
    </div>
  );
};

export const CustomButton = ({
  icon,
  children,
  type,
  onClick,
}: {
  icon?: string;
  children: ReactNode;
  type?: "primary" | "secondary";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={clsx(
        "rounded-full px-6 text-xl h-16",
        !type || type === "primary"
          ? "bg-[#2F2F2F] text-white hover:bg-[#1d1d1d]"
          : "bg-[#fff] text-black hover:bg-[#b9b9b9]"
      )}
    >
      {icon ? (
        <>
          <img src={icon} className="mr-1 font-bold" /> {children}
        </>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};

const Header = () => {
  return (
    <div className="px-4 py-4 flex items-center gap-x-4">
      <CustomButton icon={BackIcon}>Back to Orders</CustomButton>
      <SearchInput />
      <CustomButton icon={ConfigIcon}>Filter</CustomButton>
      <CustomButton>Rerun</CustomButton>
      <CustomButton type="secondary">Export Results</CustomButton>
    </div>
  );
};
export default Header;
