import { BaseWindow } from "../../types";
import ApplicationIcon from "./components/application-icon";
import CloseButton from "./components/close-button";
import MaximizeButton from "./components/maximize-button";
import MinimizeButton from "./components/minimize-button";
import SectionContainer from "./components/section-container";

interface TitleBarProps extends BaseWindow {}

function TitleBar({
  appIcon,
  title,
  minimize,
  maximize,
  close,
}: TitleBarProps) {
  return (
    <div className="relative flex flex-row items-center justify-between bg-arsenic p-2">
      <div className="absolute top-0 left-0 w-full h-full handle cursor-move" />
      <SectionContainer>
        <ApplicationIcon icon={appIcon} />
        <span className="font-medium">{title}</span>
      </SectionContainer>
      <SectionContainer>
        {minimize && <MinimizeButton />}
        {maximize && <MaximizeButton />}
        {close && <CloseButton />}
      </SectionContainer>
    </div>
  );
}

export default TitleBar;
