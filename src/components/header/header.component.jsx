import {
  HeaderContainer,
  HeaderContentContainer,
  ImgContainer,
  Menu,
  MenuContainer,
  MenuTitle,
  Line,
  IconNavbarContainer,
  IconNavbar,
} from "./header.styles";
import { useState } from "react";

const menuTitle = ["Home", "About Us", "Product", "News & Event", "Beranda"];
const iconPath = [
  "assets/img/search-normal.png",
  "assets/img/bag.png",
  "assets/img/notification.png",
];

const Header = () => {
  const [menuActive, setMeuActive] = useState(0);
  const clickHandler = (index) => {
    setMeuActive(index);
  };

  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <ImgContainer />
        <MenuContainer>
          {menuTitle.map((data, index) => (
            <Menu key={data} onClick={() => clickHandler(index)}>
              <MenuTitle active={menuActive === index}>{data}</MenuTitle>
              {menuActive === index && <Line />}
            </Menu>
          ))}
        </MenuContainer>
        <IconNavbarContainer>
          {iconPath.map((data, index) => (
            <IconNavbar key={data} src={data}>
              {index === 2 && (
                <img src="assets/img/ellipse.png" alt="ellipse" />
              )}
            </IconNavbar>
          ))}
        </IconNavbarContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

export default Header;
