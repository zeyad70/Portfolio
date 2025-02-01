import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs } from "react-icons/di";
import { SiHtml5, SiCss3, SiDart, SiPhp, SiMysql } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa"; // أيقونة تمثل الشبكات

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired /> {/* أيقونة صيانة الشبكات */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp /> {/* أيقونة PHP */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* أيقونة SQL */}
      </Col>
    </Row>
  );
}

export default Techstack;
