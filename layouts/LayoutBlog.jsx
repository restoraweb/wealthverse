import React from "react";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";
import BlogBreadcrumb from "../components/BlogBreadcrumb/BlogBreadcrumb";
import BlogAside from "../components/BlogAside/BlogAside";
import HeaderOne from "@/components/Header/HeaderOne";
import FooterOne from "@/components/Footer/FooterOne";

const LayoutBlog = (props) => {
  return (
    <div className={cn("dark-background")}>
      <PageLoader />

      <HeaderOne />

      <main>
        <BlogBreadcrumb title={props.pageTitle} item={props.item} />

        <section className="blog-area pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">{props.children}</div>

              <div className="col-lg-4">
                <BlogAside />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterOne />
    </div>
  );
};

export default LayoutBlog;
