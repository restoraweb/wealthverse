import React from "react";
import styled from "styled-components";

const Affiliate = () => {
  const handleCopy = () => {
    const link = "https://giftalhub.com/register?ref=Hartitudeh";
    navigator.clipboard.writeText(link);
    alert("Link copied!");
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <h1>Hello, Hartitudeh</h1>
        <BalanceSection>
          <div>
            <span>Available balance</span>
            <h2>₦0.00</h2>
          </div>
          <div>
            <span>Total Withdrawn</span>
            <h2>₦11,000.00</h2>
          </div>
        </BalanceSection>
        <ButtonGroup>
          <button className="withdraw">Withdraw ↓</button>
          <button className="send">Send Money →</button>
        </ButtonGroup>
      </Header>

      {/* Earnings Section */}
      <EarningsSection>
        <Card color="dark">
          <span>Overall Earning</span>
          <h3>₦11,000.00</h3>
        </Card>
        <Card color="#00c4f4">
          <span>Direct Affiliate Earning</span>
          <h3>₦11,000.00</h3>
        </Card>
        <Card color="dark">
          <span>1st Indirect Earning</span>
          <h3>₦0.00</h3>
        </Card>
        <Card color="#00c4f4">
          <span>2nd Indirect Earning</span>
          <h3>₦0.00</h3>
        </Card>
        <Card color="dark">
          <span>Direct Sales</span>
          <h3>2</h3>
        </Card>
        <Card color="#00c4f4">
          <span>Spillover Up</span>
          <h3>₦0.00</h3>
        </Card>
        <Card color="dark">
          <span>Spillover Down</span>
          <h3>₦0.00</h3>
        </Card>
      </EarningsSection>

      {/* Copy Link Section */}
      <CopyLinkSection>
        <input
          type="text"
          value="https://wealthverse.com/register?ref=Hartitudeh"
          readOnly
        />
        <button onClick={handleCopy}>Copy</button>
      </CopyLinkSection>

      {/* Transactions Table */}
      <Table>
        <thead>
          <tr>
            <th>Transaction Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>19 November 2024, 05:10:42</td>
            <td>₦11,000.00</td>
            <td>Affiliate Withdrawal</td>
            <td className="status">Completed</td>
          </tr>
          <tr>
            <td>18 November 2024, 05:04:32</td>
            <td>₦5,500.00</td>
            <td>Direct Referral</td>
            <td className="status">Completed</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Affiliate;

// Styled Components
const Container = styled.div`
//   background: #000;
  color: #fff;
  padding: 20px;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    color: #00c4f4;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const BalanceSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  div {
    text-align: center;

    span {
      display: block;
      font-size: 0.9rem;
      margin-bottom: 8px;
      color: #aaa;
    }

    h2 {
      font-size: 1.8rem;
    }
  }
`;

const ButtonGroup = styled.div`
  margin-top: 20px;

  button {
    background: #00c4f4;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    margin: 0 10px;
    cursor: pointer;
    font-size: 1rem;
  }

  .withdraw {
    background: #444;
  }
`;

const EarningsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin: 40px 0;
`;

const Card = styled.div<{ color: "#00c4f4" | "dark" }>`
  background: ${({ color }) => (color === "#00c4f4" ? "#00c4f4" : "transparent")};
  color: ${({ color }) => (color === "#00c4f4" ? "#000" : "#fff")};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 2px dashed #00c4f4;

  span {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: ${({ color }) => (color === "#00c4f4" ? "#000" : "#aaa")};
  }

  h3 {
    font-size: 1.5rem;
  }
`;

const CopyLinkSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  input {
    flex: 1;
    max-width: 500px;
    padding: 10px;
    border: 1px solid #444;
    border-radius: 5px;
    background: #111;
    color: #fff;
    margin-right: 10px;
  }

  button {
    padding: 10px 15px;
    border: none;
    background: #00c4f4;
    color: #000;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 40px;
  border-collapse: collapse;
  color: #fff;

  th,
  td {
    text-align: left;
    padding: 10px;
  }

  th {
    background: #111;
  }

  tr:nth-child(even) {
    background: #222;
  }

  .status {
    color: #00c4f4;
  }
`;
