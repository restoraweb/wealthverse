import Flex from "components/atoms/flex";
import Image from "components/atoms/image";
import Text from "components/atoms/text";
import React from "react";
import styled from "styled-components";
import User from "../../../../public/img/user/user.png";
import Activity from "./activity";
import { FaLink } from "react-icons/fa";
import { AiFillGift, AiFillSetting, AiOutlineTeam } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import Link from "components/atoms/link";
import { Banner } from "./carousel";


// Styled Components
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
  min-height: 100vh;
  border-radius: 12px;
`;



const NutritionCard = styled.div`
  grid-row: 1 / 3; // Spans two rows
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  height: fit-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;



const BannerCard = styled.div`
  background: linear-gradient(145deg, #00c4f4, #4e63d0);
  position: relative;
  overflow: hidden;
  padding: 2rem;
  border-radius: 16px;
  height: 575px;
`;


const PageWrapper = styled.div`
  padding: 1rem;
  min-height: 100vh;

`;

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

// Main Component
const Dashboard = () => {
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
    <DashboardContainer>
        
      {/* Nutrition Card */}
      <NutritionCard>
        <Text type="h3" weight={500} text="Quick Links" color="#19013b" />
        
        <Flex gap="1.5rem" justify="center" direction="column" align="center" >
        {cardLinks.map((card) => (
            <Link key={card.id} href={card.link} style={{
                width: "100%",
            }}>
              <CardLink key={card.id}>
                <CardIcon>{card.icon}</CardIcon>
                <Text text={card.text} type="h4" color="#fff"/>
              </CardLink>
            </Link>
          ))}
        </Flex>
      </NutritionCard>

      {/* Activity Card */}
      <Activity />

      {/* Banner Card */}
      <BannerCard>
      <Banner />
      </BannerCard>
    </DashboardContainer>
    </PageWrapper>
  );
};

export default Dashboard;

const CardLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #00c4f4, #19013b);
  
  padding: 0 1.5rem 1.5rem;
  border-radius: 8px;
  height: 110px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
    background: linear-gradient(135deg, #19013b, #00c4f4);
  }
`;

const CardIcon = styled.div`
  color: #fff;
  font-size: 2.5rem;
`;