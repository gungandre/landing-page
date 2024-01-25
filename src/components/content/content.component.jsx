import Button from "../button/button.component";
import {
  Content1Container,
  ImgContainer,
  Img,
  Retangle,
  WhyUsContainer,
  WhyUsTitleContainer,
  OurValueContainer,
  Paragraf3,
  Content2Container,
  OurProductContainer,
  ProductContainer,
  Product,
  ImgProductContainer,
  DescProductContainer,
  Content3Container,
  RempahWangiContainer,
  RempahImageContainer,
  Content4Container,
  AboutUsContainer,
  AboutUs,
  AboutUsImgContainer,
  AboutUsImg,
  Retangle2,
  Content5Container,
  Background1,
  CircleContainer,
  Background2,
  Background3,
  TitleCertificate,
  LogoSertifikatContainer,
  Logo,
  Image,
} from "./content.styles";

const Content = () => {
  return (
    <>
      <Content1Container>
        {/* content 1 */}
        <ImgContainer>
          <Retangle />
          <Img />
        </ImgContainer>
        <WhyUsContainer>
          <WhyUsTitleContainer>
            <OurValueContainer>
              <span>our value</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="8"
                viewBox="0 0 25 8"
                fill="none"
              >
                <path
                  d="M24.8536 4.35355C25.0488 4.15829 25.0488 3.84171 24.8536 3.64645L21.6716 0.464466C21.4763 0.269204 21.1597 0.269204 20.9645 0.464466C20.7692 0.659728 20.7692 0.976311 20.9645 1.17157L23.7929 4L20.9645 6.82843C20.7692 7.02369 20.7692 7.34027 20.9645 7.53553C21.1597 7.7308 21.4763 7.7308 21.6716 7.53553L24.8536 4.35355ZM0.5 4.5H24.5V3.5H0.5V4.5Z"
                  fill="#BABABA"
                />
              </svg>
            </OurValueContainer>
            <div>Why Us ?</div>
            <Paragraf3>
              Use this pragraph to explain the purpose of the contest, the
              impact that the winning entries will have, and the overall
              benefits for participants, beyond just the prizes. But mention the
              wonderful prize too!
            </Paragraf3>
            <Button
              borderColor={"#06113C"}
              text={"READ MORE"}
              color={"#06113C"}
              bgColor={"white"}
            />
          </WhyUsTitleContainer>
        </WhyUsContainer>
      </Content1Container>

      <Content2Container>
        <OurProductContainer>
          <div>Our Product</div>
          <span>
            Lorem ipsum dolor sit amet consectetur. Blandit velit nulla sed
            faucibus libero in nam pharetra.
          </span>
        </OurProductContainer>
        <ProductContainer>
          <Product>
            <ImgProductContainer url="assets/img/product1.png" />
            <DescProductContainer>
              <div>Essential Oil</div>
              <span>Provide some details about this category.</span>
            </DescProductContainer>
          </Product>
          <Product>
            <ImgProductContainer url="assets/img/product2.png" />
            <DescProductContainer>
              <div>Clove Leaf Oil Derivates</div>
              <span>Provide some details about this category.</span>
            </DescProductContainer>
          </Product>
          <Product>
            <ImgProductContainer url="assets/img/product3.png" />
            <DescProductContainer>
              <div>Vanilla</div>
              <span>Provide some details about this category.</span>
            </DescProductContainer>
          </Product>
        </ProductContainer>
      </Content2Container>
      <Content3Container>
        <RempahWangiContainer>
          <div>Rempah Wangi</div>
          <span>
            Lorem ipsum dolor sit amet consectetur. Blandit velit nulla sed
            faucibus libero in nam pharetra.
          </span>
        </RempahWangiContainer>
        <RempahImageContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M29.925 5C16.125 5 4.925 16.2 4.925 30C4.925 43.8 16.125 55 29.925 55C43.725 55 54.925 43.8 54.925 30C54.925 16.2 43.75 5 29.925 5ZM37.425 35.575L30.175 39.75C29.275 40.275 28.275 40.525 27.3 40.525C26.3 40.525 25.325 40.275 24.425 39.75C22.625 38.7 21.55 36.85 21.55 34.75V26.375C21.55 24.3 22.625 22.425 24.425 21.375C26.225 20.325 28.375 20.325 30.2 21.375L37.45 25.55C39.25 26.6 40.325 28.45 40.325 30.55C40.325 32.65 39.25 34.525 37.425 35.575Z"
              fill="white"
            />
          </svg>
        </RempahImageContainer>
      </Content3Container>
      <Content4Container>
        <AboutUsContainer>
          <AboutUs>
            <div>About Us ?</div>
            <span>
              Use this pragraph to explain the purpose of the contest, the
              impact that the winning entries will have, and the overall
              benefits for participants, beyond just the prizes. But mention the
              wonderful prize too!
            </span>
          </AboutUs>

          <Button
            borderColor={"#06113C"}
            text={"READ MORE"}
            color={"#06113C"}
            bgColor={"white"}
          />
        </AboutUsContainer>
        <AboutUsImgContainer>
          <Retangle2 />
          <AboutUsImg />
        </AboutUsImgContainer>
      </Content4Container>
      <Content5Container>
        <Background1 />
        <CircleContainer />
        <Background2 />
        <Background3 />
        <TitleCertificate>Our Certificate</TitleCertificate>
        <LogoSertifikatContainer>
          <Logo>
            <Image src="assets/img/logo1.png" />
          </Logo>
          <Logo>
            <Image src="assets/img/logo2.png" />
          </Logo>
          <Logo>
            <Image src="assets/img/logo3.png" />
          </Logo>
          <Logo>
            <Image src="assets/img/logo4.png" />
          </Logo>
        </LogoSertifikatContainer>
      </Content5Container>
    </>
  );
};

export default Content;
