import { Space, Typography, Switch, Divider } from "antd";
import React, { useState } from "react";

const Antd = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div>
      <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      />
      <Space direction="vertical">
        <Typography>
          <Title>ANT DESIGN PRACTICE</Title>
          <Title level={2} ellipsis="true">
            {" "}
            ANT DESIGN PRACTICE
          </Title>
          <Title level={3}>ANT DESIGN PRACTICE</Title>
          <Title level={4}>ANT DESIGN PRACTICE</Title>
          <Divider dashed="true" />
          <Paragraph
            style={ellipsis ? { width: 100 } : undefined}
            editable
            copyable
            type="success"
            ellipsis={
              ellipsis
                ? {
                    tooltip:
                      "This is Ant Design documents that is read by Dhivya G.A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.",
                  }
                : false
            }
          >
            This is Ant Design documents that is read by Dhivya G.A paragraph is
            a series of sentences that are organized and coherent, and are all
            related to a single topic. Almost every piece of writing you do that
            is longer than a few sentences should be organized into paragraphs.
          </Paragraph>
        </Typography>
      </Space>
    </div>
  );
};

export default Antd;
