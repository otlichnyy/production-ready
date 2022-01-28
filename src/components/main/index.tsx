import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        color: "#fff",
        textAlign: "center",
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <h1 data-test="main-heading" style={{ color: "#fff", fontSize: 46 }}>
        superplate-revived
      </h1>
      <p style={{ fontSize: 18 }}>The frontend boilerplate with superpowers!</p>
      <Button type="primary" size="large">
        <a
          data-test="docs-btn-anchor"
          href="https://pankod.github.io/superplate/"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      </Button>
    </div>
  );
};
