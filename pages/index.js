import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import ContactOne from "@/components/Contact/ContactOne";
import Roadmap from "@/components/Roadmap/Roadmap";
import Sales from "@/components/Sales/Sales";
import TeamOne from "@/components/Team/TeamOne";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "@/layouts/LayoutOne";
import WhyChooseUsTwo from "@/components/WhyChooseUs/WhyChooseUsTwo";
import CounterArea from "@/components/CounterArea/CounterArea";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <>
      <Head>c
        <title>WealthVerse</title>
        <meta name="description" content="" />
      </Head>

      <LayoutOne>
        <main className="fix">
          <Banner />
          <WhoWeAre />

          <WhyChooseUsTwo />
          <CounterArea />

          <TopPartners />
          <Sales />

          <div className="area-bg">
            <Roadmap />
            {/* <WhitePaper /> */}
          </div>

          <TeamOne />
          <Faq />
          <ContactOne />
        </main>
      </LayoutOne>
    </>
  );
}
