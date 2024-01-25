import styled from "styled-components";

export const JumbotronContainer = styled.div`
  width: 100%;
  height: 700px;
  flex-shrink: 0;
  background-image: url("assets/img/jumbotron.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TransparantContainer = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  background-color: #03092085;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Paragraf1 = styled.p`
  color: #fff;
  text-align: center;
  width: 681px;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 140%; /* 56px */
  letter-spacing: 3.2px;
  text-transform: capitalize;
`;

export const Paragraf2 = styled.p`
  width: 718px;
  color: #fff;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: 1.28px;
  text-transform: capitalize;
`;

export const ArrowContainer = styled.div`
  display: flex;
  width: 1300px;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: 50%;
`;

export const ArrowLeft = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-image: url("assets/img/arrow-left.png");
`;

export const ArrowRight = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-image: url("assets/img/arrow-right.png");
`;
