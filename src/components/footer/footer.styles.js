import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  padding: 40px 70px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #010622;
  height: 526px;
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 227px;
  align-self: stretch;
  width: 1300px;
  height: 446px;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
`;

export const FooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  flex: 1 0 0;

  div {
    color: #fff;

    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 39.2px */
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const AlamatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Alamat = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    color: #fff;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    color: #fff;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
  }
`;

export const TelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Telp = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    color: #fff;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
  }
`;

export const ContactUsContainer = styled.div`
  display: flex;
  width: 627px;
  padding: 20px;
  align-items: flex-start;
  gap: 10px;
  background: #fff;
  width: 627px;
  height: 446px;
`;

export const ContactUsCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 32px;
  flex: 1 0 0;
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  div {
    color: #000;

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  label {
    color: #000;

    font-size: 12px;
    font-style: normal;
    font-weight: bold;
    line-height: 140%; /* 16.8px */
    letter-spacing: 0.48px;
  }

  input {
    display: flex;
    height: 48px;
    padding: 10px 12px 10px 14px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--Neutral-grey-40, #f2f2f2);
    background: var(--white, #fff);
  }

  textarea {
    font-family: "Open Sans", sans-serif;
    display: flex;
    height: 65px;
    padding: 12px 0px 0px 12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--Neutral-grey-40, #f2f2f2);
  }
`;
