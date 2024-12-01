// pages/dashboard.tsx
"use client";

import React from "react";
import styled from "styled-components";
import { FaWallet, FaGamepad, FaMoneyBillWave, FaLink } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGift, AiFillSetting, AiOutlineTeam } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import Text from "components/atoms/text";
import Image from "components/atoms/image";
import User from "../../../../public/img/user/user.png";
import Flex from "components/atoms/flex";

const PageWrapper = styled.div`
  padding: 1rem;
//   background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const HR = styled.hr`
  border: 1px solid #030b15;
  margin: 2rem 0;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  background: #00c4f4;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

// cons = styled.div`
//   background-color: #154c79;
//   color: #fff;
//   padding: 1rem;
//   border-radius: 50%;
//   font-size: 1.5rem;
// `;

const CardText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const QuickLinksTitle = styled.h2`
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const QuickLinksWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const QuickLinksCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const QuickLinkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const QuickLinkIcon = styled.div`
  background-color: #f39c12;
  color: #fff;
  padding: 1.5rem;
  border-radius: 50%;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const QuickLinkText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const Frame = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const Dashboard: React.FC = () => {
  return (
    <PageWrapper>
      {/* Header */}
      <Header>
        <Text text="Dashboard" type="h1" color="#fff" />
        <Image src={User} alt="User Profile" height={50} width={50} styles={{filter: "invert(1)"}} />
        {/* <ProfilePicture src="/profile-pic.jpg" alt="User Profile" /> */}
      </Header>

      {/* Horizontal Rule */}
      {/* <HR /> */}
      <hr
        style={{
          border: "2px solid #fff",
          height: "1px",
        }}
      />

      {/* Main Cards */}
      <CardsWrapper>
        <Card>
          <Flex gap="1rem" justify="flex-start" align="center">
            <FaMoneyBillWave size={30} color="#030b15" />
            <Text
              text="Sale Commission"
              type="h2"
              weight="600"
              color="#030b15"
              size={16}
            />
          </Flex>
          <br />
          <Flex
            gap=".1rem"
            justify="flex-start"
            direction="column"
            align="flex-start"
          >
            <Text type="p" margin={0} text="Balance" color="#030b15" />
            <Text type="h3" text="₦0.00" color="#030b15" />
          </Flex>
        </Card>
        <Card>
          <Flex gap="1rem" justify="flex-start" align="center">
            <FaWallet size={30} color="#030b15" />
            <Text
              text="Wealthverse Wallet"
              type="h2"
              weight="600"
              size={16}
              color="#030b15"
            />
          </Flex>
          <br />
          <Flex
            gap=".1rem"
            justify="flex-start"
            direction="column"
            align="flex-start"
          >
            <Text type="p" margin={0} text="Balance" color="#030b15" />
            <Text type="h3" text="₦0.00" color="#030b15" />
          </Flex>
        </Card>
        <Card>
          <Flex gap="1rem" justify="flex-start" align="center">
            <FaGamepad size={30} color="030b15" />
            <Text
              text="Game Wallet"
              type="h2"
              weight="600"
              size={16}
              color="#030b15"
            />
          </Flex>
          <br />
          <Flex
            gap=".1rem"
            justify="flex-start"
            direction="column"
            align="flex-start"
          >
            <Text type="p" margin={0} text="Balance" color="#030b15" />
            <Text type="h3" text="₦0.00" color="#030b15" />
          </Flex>
        </Card>
      </CardsWrapper>

      {/* Quick Links */}
      <Text text="QUICK LINKS" type="h4" color="#fff" />
      <QuickLinksWrapper>
        {/* Quick Link Cards */}
        <QuickLinksCards>

          <QuickLinkCard>
            <QuickLinkIcon>
              <FaLink />
            </QuickLinkIcon>
            <QuickLinkText>Affiliate</QuickLinkText>
          </QuickLinkCard>




          <QuickLinkCard>
            <QuickLinkIcon>
              <AiOutlineTeam />
            </QuickLinkIcon>
            <QuickLinkText>My Team</QuickLinkText>
          </QuickLinkCard>
          <QuickLinkCard>
            <QuickLinkIcon>
              <MdSecurity />
            </QuickLinkIcon>
            <QuickLinkText>Security</QuickLinkText>
          </QuickLinkCard>
          <QuickLinkCard>
            <QuickLinkIcon>
              <AiFillGift />
            </QuickLinkIcon>
            <QuickLinkText>Rewards</QuickLinkText>
          </QuickLinkCard>
          <QuickLinkCard>
            <QuickLinkIcon>
              <BiLinkExternal />
            </QuickLinkIcon>
            <QuickLinkText>External Links</QuickLinkText>
          </QuickLinkCard>
          <QuickLinkCard>
            <QuickLinkIcon>
              <AiFillSetting />
            </QuickLinkIcon>
            <QuickLinkText>Settings</QuickLinkText>
          </QuickLinkCard>
        </QuickLinksCards>

        {/* Frame */}
        <Frame>
          <h2>Embedded Content</h2>
          <p>This is where you can embed a frame or other content.</p>
        </Frame>
      </QuickLinksWrapper>
    </PageWrapper>
  );
};

export default Dashboard;
