import React from "react";
import { Card as AntdCard } from "antd";
import { CardProps } from "antd/lib/card";

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <AntdCard title={title} bordered={false}>
      {children}
    </AntdCard>
  );
};
