import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Affiliate from "./components/affiliate";
import Dashboard from "./components/dashboard";
import Flex from "components/atoms/flex";


const ContentWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  // background-color: #f5f5f5;
  overflow-y: auto;
  margin-left: 15%;
`;

const UserDashboard: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>("dashboard");

  return (
    <Flex gap="2rem" justify="center" styles={{height: "100vh"}}>
      <Sidebar onNavClick={(page) => setActiveContent(page)} />
      <ContentWrapper>
        {activeContent === "dashboard" && <Dashboard />}
        {activeContent === "affiliate" && <Affiliate />}
        {/* Add more conditions for other pages */}
      </ContentWrapper>
    </Flex>
  );
};

export default UserDashboard;




