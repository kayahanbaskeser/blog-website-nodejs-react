import React from "react";
import { Card, Icon, Avatar } from "antd";
import { List, Button } from "antd";

const { Meta } = Card;

export const ContentOfTab = () => {
  const data = [
    {
      title: "Title 1"
    },
    {
      title: "Title 2"
    },
    {
      title: "Title 3"
    },
    {
      title: "Title 4"
    }
  ];
  return (
    <>
      <List
        className="listItem"
        grid={{ gutter: 3, column: 3 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {/* <Card title={item.title}>Card content</Card> */}
            <Card
              style={{ width: "90%" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta title="Card title" description="This is the description" />
            </Card>
          </List.Item>
        )}
      />
        <Button>Load More</Button>
    </>
  );
};
