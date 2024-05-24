import Button from "../common/Button";
import TabMenu from "./TabMenu";

import LogoImage from "./LogoImage";
import LogoText from "./LogoText";
import { useState } from "react";

const flexColumnStyle = {
  display: "flex",
  displayDirction: "column",
  alignItems: "center",
  gap: "32px",
};

function Header() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowSize < 768 ? true : false);

  window.onresize = () => {
    setWindowSize(window.innerWidth);
    setIsMobile(windowSize < 768 ? true : false);
  };
  return (
    <header>
      <div style={flexColumnStyle}>
        {!isMobile ? (
          <LogoImage id="header-logo" />
        ) : (
          <LogoText id="header-logo" />
        )}
        <TabMenu class="header__tab" />
      </div>
      <Button className="btn btn-small">로그인</Button>
    </header>
  );
}

export default Header;
