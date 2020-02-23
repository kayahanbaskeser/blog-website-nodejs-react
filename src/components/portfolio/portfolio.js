import React from "react";
import { Row, Col, Tabs } from "antd";
import { ContentOfTab } from "./contentOfTab";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const Portfolio = () => {
  return (
    <>
      <Row type="flex" align="center" id="Enteries">
        <Col span={12} className="portfolio_are">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="All" key="1">
              <ContentOfTab />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
