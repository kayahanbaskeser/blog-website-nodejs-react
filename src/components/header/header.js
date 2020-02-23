import React from "react";
import { Row, Col, Avatar } from "antd";

export const Header = () => {
  return (
    <>
      <Row type="flex" align="center" className="mainMenu" id="Home">
        <Col>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Enteries">Enteries</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Avatar size={145} icon="user" />
      </Row>
      <Row>
        <h1>Kayahan BASKESER</h1>
        <h2>Software Engineer</h2>
      </Row>
      <hr />
      <Row>Social Media</Row>
    </>
  );
};
