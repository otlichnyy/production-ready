import React from "react";

import { Header, Footer } from "@components";

const About: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div>About page</div>
      <Footer />
    </div>
  );
};

export default About;
