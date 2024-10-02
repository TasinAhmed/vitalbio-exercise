import clsx from "clsx";
import HomeIcon from "../assets/home.png";
import LabProfileIcon from "../assets/lab_profile.png";
import LabsIcon from "../assets/labs.png";
import SettingsIcon from "../assets/settings.png";

const Block = ({ color, icon }: { color: string; icon: string }) => {
  return (
    <div
      className={clsx(
        color,
        "w-20 h-20 rounded-3xl flex items-center justify-center cursor-pointer"
      )}
    >
      <img src={icon} alt="Sidebar icon" />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="border-r-[1px] border-[rgba(255,255,255,0.1)] w-36 flex flex-col justify-between items-center p-4">
      <div className="grid gap-y-4">
        <Block color="bg-[#C9E6E3]" icon={LabProfileIcon} />
        <Block color="bg-[#FFB598]" icon={LabsIcon} />
        <Block color="bg-[#FFB0CD]" icon={SettingsIcon} />
      </div>
      <div>
        <Block color="bg-[#C7C6C5]" icon={HomeIcon} />
      </div>
    </div>
  );
};
export default Sidebar;
