import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130" style={{background: "#fff"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/images/about_img01.png"} alt="" />
              <img
                src={"/img/images/about_img02.png"}
                alt=""
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title" style={{color: "#19013b"}}>Why choose us</span>
                <h2 className="title" style={{color: "#19013b"}}>
                  What is <span>WealthVerse</span>
                </h2>
              </div>
              <p style={{color: "#19013b"}}>
                WealthVerse is a Networking & Affiliate Company where you
                Explore Diverse Earning Opportunities
              </p>
              <p style={{color: "#19013b"}}>
                We help our user Uncover diverse earning Opportunities Our
                platform offers multiple ways to transform your time and efforts
                into valuable rewards
              </p>
              <p style={{color: "#19013b"}}>
                Sign up as an affiliate and start promoting any of our life
                transforming products and you can get as high as 70% commission
                for each sale you Made.
              </p>
              <p style={{color: "#19013b"}}>Join Thousands of user Experiencing Giftalhub Flexible Earning Opportunities</p>

              <Link href="/" className="btn">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
