import Head from "next/head";
// import { useEffect, useState } from "react";
// import PanelContent from "../components/PanelContent";
// import { aTagClick, customCursor, dataImage, sticky } from "../utilits";
// import Cursor from "./Cursor";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import Nav from "./Nav";
// import Triggger from "./Triggger";

const Layout = ({ children }) => {
  // const [trigger, setTrigger] = useState(false);
  // useEffect(() => {
  //   dataImage();
  //   customCursor();
  //   aTagClick();
  //   window.addEventListener("scroll", sticky);
  // });
  // const triggerMenu = () => {
  //   setTrigger(!trigger);
  //   document.querySelector(".resumo_fn_wrapper").classList.toggle("nav-opened");
  // };
  return (
    <>
      <Head>
        <title>Deebo | Personal Portfolio React NextJS Template</title>
      </Head>

      <div class="deebo_fn_wrapper">

        {/* Deebo Page */}
        <div class="deebo_page">
          <Nav />
          <HeroHeader />
          <div className="main">
            {children}
          </div>
          <Footer />

        </div>
        {/* Totop Button */}
        <a href="#" class="deebo_fn_totop"></a>
        {/* /Totop Button */}
      </div>
    </>
  );
};

export default Layout;
