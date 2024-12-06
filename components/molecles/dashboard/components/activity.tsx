// import Flex from "components/atoms/flex";
// import Link from "components/atoms/link";
// import Text from "components/atoms/text";
// import React from "react";
// import { FaEye, FaEyeSlash, FaStar } from "react-icons/fa";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import styled from "styled-components";

// const ActivityCard = styled.div`
//   background: #fff;
//   border-radius: 16px;
//   padding: 1.5rem;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;


// const ActivityStats = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 2rem;
// `;

// const EarningsCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 20px;
//   border-radius: 12px;
//   background: linear-gradient(135deg, #19013b, #00c4f4);
//   color: white;
//   width: 300px; /* Adjust as needed */
//   height: 150px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 12px;
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.02);
//   background: linear-gradient(135deg, #00c4f4, #19013b);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const TitleWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;

//   h3 {
//     font-size: 1rem;
//     font-weight: 600;
//     margin: 0;
//   }
// `;

// const Box = styled.div`
//   background: white;
//   width: 32px;
//   height: 32px;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   svg {
//     color: #19013b; 
//     font-size: 1.5rem;
//   }
// `;



// const Activity = () => {
//   return (
//     <ActivityCard>
//       <Flex gap="1rem" justify="center" align="center" >
//         <Text type="h4" text="Your Earnings" color="#19013b" styles={{textWrap: "nowrap"}} />
//         <Flex justify="flex-start">
//             <Link href="">
//         <FaEyeSlash />
//             </Link>
//             <Link href="">
//         <FaEye />
//             </Link>
//         </Flex>
//       </Flex>

//       <ActivityStats>
//       <EarningsCard>
//       <Flex justify="flex-start" gap="1rem" align="center">
//         <Box>
//           <FaStar />
//         </Box>
//         <TitleWrapper>
//           <Text text="Sales Commission" type="h5" margin={0} weight={600} />
//         </TitleWrapper>
//       </Flex>

//       <Flex align="center" justify="space-between" margin="15px 0 0 0">
//         <Text type="h4" text="1,193.83" color="#fff" />
//         <MdOutlineArrowRightAlt size={30} />
//       </Flex>
//     </EarningsCard>

//     <EarningsCard>
//       <Flex justify="flex-start" gap="1rem" align="center">
//         <Box>
//           <FaStar />
//         </Box>
//         <TitleWrapper>
//           <Text text="Wealthverse Wallet" type="h5" margin={0} weight={600} />
//         </TitleWrapper>
//       </Flex>

//       <Flex align="center" justify="space-between" margin="15px 0 0 0">
//         <Text type="h4" text="1,193.83" color="#fff" />
//         <MdOutlineArrowRightAlt size={30} />
//       </Flex>
//     </EarningsCard>

//     <EarningsCard>
//       <Flex justify="flex-start" gap="1rem" align="center">
//         <Box>
//           <FaStar />
//         </Box>
//         <TitleWrapper>
//           <Text text="Game Earnings" type="h5" margin={0} weight={600} />
//         </TitleWrapper>
//       </Flex>

//       <Flex align="center" justify="space-between" margin="15px 0 0 0">
//         <Text type="h4" text="1,193.83" color="#fff" />
//         <MdOutlineArrowRightAlt size={30} />
//       </Flex>
//     </EarningsCard>
//       </ActivityStats>

//     </ActivityCard>
//   );
// };

// export default Activity;

import React, { useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash, FaStar } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Flex from "components/atoms/flex";
import Link from "components/atoms/link";
import Text from "components/atoms/text";

// Styled Components
const ActivityCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const EarningsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #19013b, #00c4f4);
  color: white;
  width: 300px;
  height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
    background: linear-gradient(135deg, #00c4f4, #19013b);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }
`;

const Box = styled.div`
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #19013b;
    font-size: 1.5rem;
  }
`;

const earningsData = [
    {
      id: 1,
      title: "Sales Commission",
      amount: "1,193.83",
    },
    {
      id: 2,
      title: "Wealthverse Wallet",
      amount: "1,193.83",
    },
    {
      id: 3,
      title: "Game Earnings",
      amount: "1,193.83",
    },
  ];

const Activity = () => {
  // State for visibility toggle
  const [isVisible, setIsVisible] = useState(true);

  // Toggle visibility function
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <ActivityCard>
      {/* Header Section */}
      <Flex gap="1rem" justify="center" align="center">
        <Text type="h4" text="Your Earnings" color="#19013b" styles={{ textWrap: "nowrap" }} />
        <Flex justify="flex-start">
          {/* Eye Icon for Toggling */}
          <Link href="#" onClick={toggleVisibility}>
            {isVisible ? <FaEye /> : <FaEyeSlash />}
          </Link>
        </Flex>
      </Flex>

      {/* Earnings Section */}
      <ActivityStats>
        
        {earningsData.map((earning) => (
    <EarningsCard key={earning.id}>
      <Flex justify="flex-start" gap="1rem" align="center">
        <Box>
          <FaStar />
        </Box>
        <TitleWrapper>
          <Text text={earning.title} type="h5" margin={0} weight={600} />
        </TitleWrapper>
      </Flex>

      <Flex align="center" justify="space-between" margin="15px 0 0 0">
        <Text
          type="h4"
          text={isVisible ? earning.amount : "****"} // Show balance or ****
          color="#fff"
        />
        <MdOutlineArrowRightAlt size={30} />
      </Flex>
    </EarningsCard>
  ))}
      </ActivityStats>
    </ActivityCard>
  );
};

export default Activity;
