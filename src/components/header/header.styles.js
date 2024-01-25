import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 20px 70px;
  align-items: center;
  gap: 177px;
  background: var(--white, #fff);
`;

export const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;
`;

export const ImgContainer = styled.div`
  width: 47px;
  height: 44px;
  background: url("assets/img/logo.png"),
    0px -0.048px / 222.34% 100.217% no-repeat;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
`;

export const Menu = styled.div`
  display: flex;
  height: 26px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const MenuTitle = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: flex-start;
  gap: 10px;
  color: #06113c;

  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props.active ? "700" : "normal")};

  line-height: 140%; /* 19.6px */
  letter-spacing: 0.56px;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 20px;
  height: 2px;
  background: #06113c;
`;

export const IconNavbarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconNavbar = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.src});
  position: relative;
  img {
    right: 1px;
    position: absolute;
    top: 0;
  }
`;
