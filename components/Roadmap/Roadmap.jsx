import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import React from "react";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "End of Q4 2024",
      title: "Concept",
      info: [
        "EVM support for parthians",
        "SubQuery Academy",
        "Proof of indexing",
      ],
    },
    {
      roadmapTitle: "End of Q4 2024",
      title: "Research",
      info: [
        "SubQuery Builders/Grants Program",
        "SQT Network contract internal MVP",
        "Coordinator and client SDK",
      ],
    },

    {
      roadmapTitle: "End of Q4 2024",
      title: "App beta test",
      info: [
        "Public testnet launch",
        "SubQuery Network Explorer and dApp",
        "Point-in-time indexing",
      ],
    },

    {
      roadmapTitle: "End of Q4 2024",
      title: "Token Test",
      info: [
        "SQT token generation event",
        "Public incentivize testnet launch",
        "Data traffic insights and reporting",
      ],
    },
    {
      roadmapTitle: "End of Q4 2024",
      title: "Alpha Test",
      info: [
        "Launch of the SubQuery Foundation",
        "Finalise research for other Layer-1 chains",
        "Liquidity mining program",
      ],
    },
    {
      roadmapTitle: "End of Q4 2024",
      title: "Benefits",
      info: [
        "Mainnet launch",
        "Centralized exchange launch",
        "Public incentivize testnet",
      ],
    },
    {
      roadmapTitle: "End of Q4 2024",
      title: "Operational",
      info: [
        <>
          SubQuery launches its <br /> own parthian
        </>,
        "SubQuery Foundation",
      ],
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title" style={{color: "#19013b"}}>OUr Roadmap</span>
              <h2 className="title" style={{color: "#19013b"}}>
                WealthVerse Strategy and <br /> Project <span>Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
