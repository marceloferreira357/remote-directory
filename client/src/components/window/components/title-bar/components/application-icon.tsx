import { IconType } from "react-icons";

interface ApplicationIconProps {
  icon?: IconType;
}

function ApplicationIcon({ icon: Icon }: ApplicationIconProps) {
  return (
    <div className="flex items-center justify-center bg-black-coral p-1 rounded-md">
      {Icon ? (
        <Icon className="text-sm" />
      ) : (
        <div className="w-[14px] h-[14px]" />
      )}
    </div>
  );
}

export default ApplicationIcon;
