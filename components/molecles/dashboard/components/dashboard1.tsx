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
import { useScreenResolution } from "components/atoms/useScreenResolution";
import { Grid } from "components/atoms/grid";
import Link from "components/atoms/link";


const PageWrapper = styled.div`
  padding: 1rem;
  min-height: 100vh;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: .5rem;
  background: #00c4f4;

  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;



const CardLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #00c4f4;
  padding: 0 1.5rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardIcon = styled.div`
  color: #19013b;
  font-size: 3.5rem;
`;



const Frame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border: 2px dashed #fff;
`;

const cardData = [
  {
    id: 1,
    icon: <FaMoneyBillWave size={30} color="#19013b" />,
    title: "Sale Commission",
    balance: "₦0.00",
    link: "/sale-commission",
  },
  {
    id: 2,
    icon: <FaWallet size={30} color="#19013b" />,
    title: "Wealthverse Wallet",
    balance: "₦0.00",
    link: "/wealthverse-wallet",
  },
  {
    id: 3,
    icon: <FaGamepad size={30} color="#19013b" />,
    title: "Game Wallet",
    balance: "₦0.00",
    link: "/game-wallet",
  },
];

const cardLinks = [
  { id: 1, icon: <FaLink />, text: "Affiliate", link: "/affiliate" },
  { id: 2, icon: <AiOutlineTeam />, text: "My Team", link: "/my-team" },
  { id: 3, icon: <MdSecurity />, text: "Security", link: "/security" },
  { id: 4, icon: <AiFillGift />, text: "Rewards", link: "/rewards" },
  {
    id: 5,
    icon: <BiLinkExternal />,
    text: "External Links",
    link: "/external-links",
  },
  { id: 6, icon: <AiFillSetting />, text: "Settings", link: "/settings" },
];

const Dashboard: React.FC = () => {
  const { isMobile } = useScreenResolution();

  return (
    <PageWrapper>
      <Flex justify="space-between" align="center" margin="0 0 2rem 0">
        <Text text="Dashboard" type="h1" color="#fff" />
        <Image
          src={User}
          alt="User Profile"
          height={50}
          width={50}
          styles={{ filter: "invert(1)" }}
        />
      </Flex>

      <hr
        style={{
          border: "2px solid #fff",
          height: "1px",
        }}
      />

      <Grid
        columns="repeat(auto-fit, minmax(300px, 1fr))"
        margin={isMobile ? "0px" : "2rem 0 8rem"}
        padding={isMobile ? "1.5rem 2.5rem" : "unset"}
        gap="1rem"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {cardData.map((card) => (
          <Link key={card.id} href={card.link} style={{height: "150px"}}>
            <Card as="a">
              {/* Make the Card clickable */}
              <Flex gap="1rem" justify="flex-start" align="center">
                {card.icon}
                <Text
                  text={card.title}
                  type="h2"
                  weight="600"
                  color="#19013b"
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
                <Text type="p" margin={0} text="Balance" color="#19013b" />
                <Text type="h3" text={card.balance} color="#19013b" />
              </Flex>
            </Card>
          </Link>
        ))}
      </Grid>

      {/* Quick Links */}
      <Text text="QUICK LINKS" type="h4" color="#fff" />
      <Flex gap="2rem" direction={isMobile ? "column" : "row"}>
        <Grid
          columns={isMobile ? "1fr" : "repeat(3, 1fr)"}
          margin={isMobile ? "0px" : "0"}
          padding={isMobile ? "1.5rem 2.5rem" : "unset"}
          gap="1rem"
          width="50%"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {cardLinks.map((card) => (
            <Link key={card.id} href={card.link}>
              <CardLink key={card.id}>
                <CardIcon>{card.icon}</CardIcon>
                <Text text={card.text} type="h4" color="#19013b"/>
              </CardLink>
            </Link>
          ))}
        </Grid>

        {/* Frame */}
        <Frame>
          <Text text="Place Your Ads Here" type="h2" weight={600} />
          <Text text="This is section is for your content." type="p" />

        </Frame>
      </Flex>
    </PageWrapper>
  );
};

export default Dashboard;
