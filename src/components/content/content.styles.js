import styled from "styled-components";

export const Content1Container = styled.div`
  display: flex;
  width: 1300px;
  justify-content: center;
  align-items: center;
  gap: 120px;

  margin: 150px auto;
`;

export const ImgContainer = styled.div`
  width: 594px;
  height: 380px;
  position: relative;
`;

export const Img = styled.div`
  background-image: url("assets/img/foto1.png");
  width: 562.833px;
  height: 350.837px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Retangle = styled.div`
  width: 565.583px;
  height: 353.488px;
  border: 1px solid rgba(6, 17, 60, 0.56);
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const WhyUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const WhyUsTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  div {
    color: #202020;

    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 42px */
    text-transform: capitalize;
  }
`;

export const OurValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: #bababa;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: lowercase;
  }
`;

export const Paragraf3 = styled.span`
  width: 387px;

  color: #454545;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  margin-bottom: 32px;
  margin-top: 14px;
`;

export const Content2Container = styled.div`
  width: 1047px;
  margin: 0px auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
`;

export const OurProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  div {
    color: #000;

    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 64px */
  }
  span {
    color: #454545;
    text-align: center;
    width: 559px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: 1.12px;
    text-transform: capitalize;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 63px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

export const ImgProductContainer = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  border-radius: 160px;
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const DescProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  div {
    color: #000;

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: 1.6px;
    text-transform: capitalize;
  }

  span {
    color: #454545;
    text-align: center;
    width: 307px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: 1.12px;
    text-transform: capitalize;
  }
`;

export const Content3Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 150px;
`;

export const RempahWangiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  div {
    color: #000;

    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 64px */
  }

  span {
    width: 559px;
    color: #454545;
    text-align: center;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: 1.12px;
    text-transform: capitalize;
  }
`;

export const RempahImageContainer = styled.div`
  width: 900px;
  height: 450px;
  background: url("assets/img/rempah.png"), lightgray 50% / cover no-repeat;
  position: relative;

  svg {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 48%;
  }
`;

export const Content4Container = styled.div`
  display: flex;
  width: 1300px;
  justify-content: center;
  align-items: center;
  gap: 120px;
  margin: 150px auto;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  div {
    color: #202020;

    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 42px */
    text-transform: capitalize;
  }

  span {
    width: 387px;
    color: #454545;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
`;

export const AboutUsImgContainer = styled.div`
  width: 594px;
  height: 380px;
  position: relative;
`;

export const AboutUsImg = styled.div`
  width: 562.83px;
  height: 350.84px;
  background: url("assets/img/about-us.png"), lightgray 50% / cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Retangle2 = styled.div`
  width: 565.583px;
  height: 353.488px;
  border: 1px solid rgba(6, 17, 60, 0.56);
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Content5Container = styled.div`
  width: 1300px;
  height: 424px;
  margin: auto;
  background: #fafafa;
  position: relative;
  overflow: hidden;
  margin-bottom: 150px;
`;

export const Background1 = styled.div`
  width: 670.841px;
  height: 577.702px;
  transform: rotate(0deg);
  background-image: url("assets/img/background1.png");
  background-repeat: no-repeat;
`;

export const CircleContainer = styled.div`
  width: 825px;
  height: 825px;
  transform: rotate(-60deg);
  border-radius: 825px;

  background: rgba(122, 242, 195, 0.05);
  filter: blur(100px);
  position: absolute;
  top: -125%;
  right: -30%;
`;

export const Background2 = styled.div`
  width: 193px;
  height: 126px;
  background-image: url("assets/img/background2.png");

  position: absolute;
  top: 0;
  right: 0;
`;

export const Background3 = styled.div`
  width: 200px;
  height: 200px;

  background-image: url("assets/img/background3.png");
  background-repeat: no-repeat;

  position: absolute;
  top: 50px;
  right: -100px;
`;

export const TitleCertificate = styled.p`
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 64px */
`;

export const LogoSertifikatContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 80px;
  width: 1056px;
  height: 142px;

  position: absolute;
  top: 170px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Logo = styled.div`
  display: flex;
  width: 204px;
  height: 142px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Image = styled.div`
  width: 184px;
  height: 122px;
  background-image: url(${(props) => props.src});

  background-repeat: no-repeat;
`;
