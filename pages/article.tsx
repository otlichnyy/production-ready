import React from "react";

import { Header, Footer } from "@components";
import { FetchExample } from "@components/examples/fetch";

const Article: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div>
        <h1>Article page</h1>
        <FetchExample />
      </div>
      <Footer />
    </div>
  );
};

export default Article;
