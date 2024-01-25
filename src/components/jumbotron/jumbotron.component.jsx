import Button from "../button/button.component";
import {
  ContentContainer,
  JumbotronContainer,
  TransparantContainer,
  Content,
  Paragraf1,
  Paragraf2,
  ArrowContainer,
  ArrowRight,
  ArrowLeft,
} from "./jumbotron.styles";

const Jumbotron = () => {
  return (
    <>
      <JumbotronContainer>
        <TransparantContainer>
          <ContentContainer>
            <Content>
              <Paragraf1>Natural Products With Various Advantages</Paragraf1>
            </Content>
            <Content>
              <Paragraf2>
                Lorem ipsum dolor sit amet consectetur. Blandit velit nulla sed
                faucibus libero in nam pharetra. Neque vulputate bibendum elit
                tristique interdum.
              </Paragraf2>
            </Content>
            <Content>
              <Button
                bgColor={"#FF8C32;"}
                borderColor={"#FF8C32;"}
                color={"white"}
                text="REQUEST NOW"
              />
            </Content>
            <ArrowContainer>
              <ArrowLeft />
              <ArrowRight />
            </ArrowContainer>
          </ContentContainer>
        </TransparantContainer>
      </JumbotronContainer>
    </>
  );
};

export default Jumbotron;
