import React from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "components/atoms/image";
import { Autocomplete, TextField } from "@mui/material"; // Import MUI components
import Logo from "../../public/img/logo/logo.png";
import Link from "components/atoms/link";
import Text from "components/atoms/text";
import Flex from "components/atoms/flex";

const LoginContainer = styled.div`
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

  input {
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

    &:hover {
      border-color: #666;
    }
  }

  label {
    display: block;
    font-size: 16px;
    color: #fff;
    margin-bottom: 5px;
  }
`;

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
`;

// List of countries
const countries = ["Benin", "Cameroon", "Ghana", "Nigeria", "Togo", "Uganda"];

const LoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <LoginContainer>
      <LogoWrapper>
        <Image src={Logo} alt="Wealthverse Logo" />
      </LogoWrapper>
      <Form>
        <InputWrapper>
          <label htmlFor="referrer">Email or Username:</label>
          <input type="text" id="username" placeholder="Email/Username" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="referrer">Password:</label>
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

        <Flex justify="space-between" align="center">
          <Flex justify="flex-start" gap=".7rem" align="center">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </Flex>

          {/* Forgot Password Link */}

          <Link href="/forgot-password" style={{textWrap: 'nowrap'}}>
            Forgot Password?
          </Link>
        </Flex>

        <Button type="submit">Sign In</Button>
      </Form>
      <Footer>
        Don't have an account? &nbsp;
        <Link href="\signUp">
          <Text type="p" text=" Sign in" size={14} color="#00c4f4" />
        </Link>
      </Footer>
    </LoginContainer>
  );
};

export default LoginPage;
