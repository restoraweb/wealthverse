import React from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "components/atoms/image";
import { Autocomplete, TextField } from "@mui/material"; // Import MUI components
import Logo from "../../public/img/logo/logo.png";
import Link from "components/atoms/link";
import Text from "components/atoms/text";

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LogoWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;

  img {
    width: 100px;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
  position: relative;

  input,
  select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #333;
    border-radius: 8px;
    background: transparent;
    color: #fff;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: #666;
    }
    
    &:hover{
    border-color: #666;
    }
  }

// `;


const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
`;


const PasswordWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #666;
  }
`;

const CouponText = styled.p`
  font-size: 14px;
  color: #fff;
  text-align: left;

  a {
    color: #00c4f4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 15px;
  background: linear-gradient(135deg, #19013b, #00c4f4);
  border: 2px solid #00c4f4;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(to right, #00c4f4, #19013b);
  }
`;

const Footer = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;
  display: flex;

  a {
    color: #00c4f4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// List of countries
const countries = ["Benin", "Cameroon", "Ghana", "Nigeria", "Togo", "Uganda"];

const RegistrationPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <RegistrationContainer>
      <LogoWrapper>
        <Image src={Logo} alt="Wealthverse Logo" />
      </LogoWrapper>
      <Form>
        <InputWrapper>
          <input type="text" id="name" placeholder="Name" />
        </InputWrapper>
        <InputWrapper>
          <input type="text" id="username" placeholder="Username" />
        </InputWrapper>
        <InputWrapper>
          <input type="email" id="email" placeholder="Email Address" />
        </InputWrapper>
        <InputWrapper>
          <input type="tel" id="phone" placeholder="Phone Number" />
        </InputWrapper>
        <InputWrapper>
          {/* MUI Autocomplete for country selection */}
          <Autocomplete
            options={countries}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="Country"
                variant="outlined"
                placeholder="Select Country"
                InputProps={{
                  ...params.InputProps,
                  style: {
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #333",
                    borderRadius: "8px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />
            )}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#333",
                },
                "&:hover fieldset": {
                  borderColor: "#666",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#666",
                },
              },
              "& .MuiInputBase-input": {
                color: "#fff",
              },
              "& .MuiAutocomplete-popupIndicator": {
                color: "#fff",
              },
              "& .MuiAutocomplete-clearIndicator": {
                color: "#666",
              },
              "& .MuiAutocomplete-input": {
                border: "none",
              },
              "& .MuiAutocomplete-listbox": {
                backgroundColor: "red", 
                color: "red", 
              },
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <PasswordWrapper>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
            />
            {passwordVisible ? (
              <FaEyeSlash onClick={togglePasswordVisibility} />
            ) : (
              <FaEye onClick={togglePasswordVisibility} />
            )}
          </PasswordWrapper>
        </InputWrapper>
        <InputWrapper>
          <input type="text" id="coupon" placeholder="Coupon Code" />
          <CouponText>
            Need coupon code? <a href="#">Get it here</a>
          </CouponText>
        </InputWrapper>
        <InputWrapper>
          <input type="text" id="referrer" placeholder="Referrer Code (Optional)" />
        </InputWrapper>
        <Button type="submit">Sign Up</Button>
      </Form>
      <Footer>
        Already have an account? &nbsp;
        <Link href="\signIn">
        <Text type="p" text=" Sign in" size={14} color="#00c4f4" />
         </Link>
      </Footer>
    </RegistrationContainer>
  );
};

export default RegistrationPage;
