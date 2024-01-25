import Button from "../button/button.component";
import {
  FooterContainer,
  FooterCard,
  FooterInformation,
  Information,
  AlamatContainer,
  Alamat,
  EmailContainer,
  Email,
  TelpContainer,
  Telp,
  ContactUsContainer,
  ContactUsCard,
  ContactUs,
  InputContainer,
  InputGroup,
} from "./footer.styles";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterCard>
        <FooterInformation>
          <div>Head Office</div>
          <Information>
            <AlamatContainer>
              <Alamat>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 13.9299C13.7231 13.9299 15.12 12.5331 15.12 10.8099C15.12 9.08681 13.7231 7.68994 12 7.68994C10.2769 7.68994 8.88 9.08681 8.88 10.8099C8.88 12.5331 10.2769 13.9299 12 13.9299Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M3.62001 8.99C5.59001 0.330002 18.42 0.340003 20.38 9C21.53 14.08 18.37 18.38 15.6 21.04C13.59 22.98 10.41 22.98 8.39001 21.04C5.63001 18.38 2.47001 14.07 3.62001 8.99Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
                <span>Semarang</span>
              </Alamat>
            </AlamatContainer>
            <EmailContainer>
              <Email>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>info.rempahwangi@gmail.com</span>
              </Email>
            </EmailContainer>
            <TelpContainer>
              <Telp>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
                <span>021-928376263</span>
              </Telp>
            </TelpContainer>
          </Information>
        </FooterInformation>
        <ContactUsContainer>
          <ContactUsCard>
            <ContactUs>
              <div>Contact Us</div>
              <InputContainer>
                <InputGroup>
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" />
                </InputGroup>
                <InputGroup>
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email address" />
                </InputGroup>
                <InputGroup>
                  <label>Description</label>
                  <textarea
                    type="email"
                    placeholder="Enter your email address"
                  />
                </InputGroup>
              </InputContainer>
            </ContactUs>
            <Button
              color={"white"}
              bgColor={"#06113C"}
              borderColor={"#06113C;"}
              text={"REQUEST NOW"}
            />
          </ContactUsCard>
        </ContactUsContainer>
      </FooterCard>
    </FooterContainer>
  );
};

export default Footer;
