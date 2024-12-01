import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Affiliate from "./components/affiliate";

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  // background-color: #f5f5f5;
  overflow-y: auto;
`;



const UserDashboard: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>("dashboard");

  const handleNavClick = (navItem: string) => {
    setActiveContent(navItem);
  };

  return (
    <PageWrapper>
    <Sidebar onNavClick={(page) => setActiveContent(page)} />
    <ContentWrapper>
      {activeContent === "dashboard" && <Dashboard />}
      {activeContent === "affiliate" && <Affiliate />}
      {/* Add more conditions for other pages */}
    </ContentWrapper>
  </PageWrapper>
  );
};

export default UserDashboard;
