import React, { CSSProperties } from "react";
import { Space } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import { PankodIcon } from "@components/icons";

export const Footer: React.FC = () => {
  const iconStyle: CSSProperties = {
    fontSize: 22,
    color: "#fff",
  };
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
      <Space direction="vertical" size="large">
        <PankodIcon data-test="icon" color="white" width="140" height="28" />
        <Space align="center" size="middle" data-testid="icons-container">
          <a
            href="https://github.com/pankod"
            target="_blank"
            rel="noreferrer"
            data-testid="pankod-logo"
            style={iconStyle}
          >
            <GithubOutlined data-test="icon" />
          </a>
          <a
            href="https://twitter.com/PankodDev"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <TwitterOutlined data-test="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <YoutubeOutlined data-test="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
            target="_blank"
            rel="noreferrer"
            style={iconStyle}
          >
            <LinkedinOutlined data-test="icon" />
          </a>
        </Space>
      </Space>
    </div>
  );
};
