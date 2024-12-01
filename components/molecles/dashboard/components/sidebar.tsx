// import React, { useState } from "react";
// import styled from "styled-components";
// import Image from "next/image"; 
// import Logo from "../../../../public/img/logo/logo.png";
// import {
//   FaHome,
//   FaUserFriends,
//   FaGamepad,
//   FaExchangeAlt,
//   FaSignal,
//   FaUsers,
//   FaAd,
//   FaHistory,
//   FaLock,
// } from "react-icons/fa";

// interface SidebarProps {
//   onNavClick: (navItem: string) => void;
// }

// const SidebarWrapper = styled.div`
//   width: 250px;
//   height: 100vh;
//   background-color: #030b15;
//   color: white;
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const LogoWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const NavItem = styled.div<{ isActive: boolean }>`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   padding: 1rem;
//   font-size: 1.2rem;
//   background-color: ${({ isActive }) => (isActive ? "#1e6aad" : "transparent")};
//   color: ${({ isActive }) => (isActive ? "#fff" : "#cfcfcf")};
//   cursor: pointer;
//   border-radius: 5px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1e6aad;
//     color: #fff;
//   }
// `;

// const Divider = styled.hr`
//   border: 0;
//   height: 1px;
//   background-color: #4f4f4f;
//   margin: 1rem 0;
// `;

// const Sidebar: React.FC<SidebarProps> = ({ onNavClick }) => {
//   const [activePage, setActivePage] = useState<string>("dashboard");

//   const handleNavigation = (page: string) => {
//     setActivePage(page);
//     onNavClick(page); 
//   };

//   const navItems = [
//     { id: 1, name: "Dashboard", icon: <FaHome />, page: "dashboard" },
//     { id: 2, name: "Affiliate", icon: <FaUserFriends />, page: "affiliate" },
//     { id: 3, name: "Games", icon: <FaGamepad />, page: "games" },
//     { id: 4, name: "Trade", icon: <FaExchangeAlt />, page: "trade" },
//     { id: 5, name: "Signals", icon: <FaSignal />, page: "signals" },
//     { id: 6, name: "My Team", icon: <FaUsers />, page: "my-team" },
//     { id: 7, name: "Advert", icon: <FaAd />, page: "advert" },
//     { id: 8, name: "Affiliate History", icon: <FaHistory />, page: "affiliate-history" },
//     { id: 9, name: "Change Password", icon: <FaLock />, page: "change-password" },
//   ];

//   return (
//     <SidebarWrapper>
//       <LogoWrapper>
//         <Image src={Logo} alt="Logo" width={100} height={50} />
//       </LogoWrapper>
//       <Divider />
//       {navItems.map((item) => (
//         <NavItem
//           key={item.id}
//           isActive={activePage === item.page}
//           onClick={() => handleNavigation(item.page)}
//         >
//           {item.icon}
//           {item.name}
//         </NavItem>
//       ))}
//     </SidebarWrapper>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image"; // Use next/image for optimized images
import Logo from "../../../../public/img/logo/logo.png";

import {
  FaHome,
  FaUserFriends,
  FaGamepad,
  FaExchangeAlt,
  FaSignal,
  FaUsers,
  FaAd,
  FaHistory,
  FaLock,
} from "react-icons/fa";

// Props for the Sidebar component
interface SidebarProps {
  onNavClick: (navItem: string) => void;
}

// Styled-components for Sidebar
const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #030b15;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 5px solid #00c4f4;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${({ isActive }) => (isActive ? "#00c4f4" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#cfcfcf")};
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c4f4;
    color: #fff;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #4f4f4f;
  margin: 1rem 0;
`;

const Sidebar: React.FC<SidebarProps> = ({ onNavClick }) => {
  const [activePage, setActivePage] = useState<string>("dashboard");

  // Handle navigation and pass the selected page to the parent component
  const handleNavigation = (page: string) => {
    setActivePage(page);
    onNavClick(page); // Notify the parent about the selected page
  };

  // Navigation items
  const navItems = [
    { id: 1, name: "Dashboard", icon: <FaHome />, page: "dashboard" },
    { id: 2, name: "Affiliate", icon: <FaUserFriends />, page: "affiliate" },
    { id: 3, name: "Games", icon: <FaGamepad />, page: "games" },
    { id: 4, name: "Trade", icon: <FaExchangeAlt />, page: "trade" },
    { id: 5, name: "Signals", icon: <FaSignal />, page: "signals" },
    { id: 6, name: "My Team", icon: <FaUsers />, page: "my-team" },
    { id: 7, name: "Advert", icon: <FaAd />, page: "advert" },
    { id: 8, name: "Affiliate History", icon: <FaHistory />, page: "affiliate-history" },
    { id: 9, name: "Change Password", icon: <FaLock />, page: "change-password" },
  ];

  return (
    <SidebarWrapper>
      <LogoWrapper>
        <Image src={Logo} alt="Logo" width={200} height={50} />
      </LogoWrapper>
      <hr style={{
        border: "2px solid #030b15", height: "1px", margin: "5px 0",
      }} />
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          isActive={activePage === item.page}
          onClick={() => handleNavigation(item.page)}
        >
          {item.icon}
          {item.name}
        </NavItem>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
