import NavBar from "./../components/navbar";
import { Divider, Row, Col } from "antd";
import Cards from "../components/cards";
export default function Home() {
  return (
    <>
      <NavBar />
      <section className="home-cover">
        <img src="/img/cover.png" alt="" />
        <div className="overlay"></div>
      </section>
      <div className="container">
        <div className="center">
          <div style={{ display: "inline-block", margin: 50, fontSize: 35 }}>
            Custom Built Adobe XD Template <br />
            <span className="center">Download for Free</span>
          </div>
        </div>
        <Divider />
        <section className="container">
          <Row>
            <Col>
              <Cards />
            </Col>
            <Col>
              <Cards />
            </Col>
            <Col>
              <Cards />
            </Col>
          </Row>
        </section>
        <Divider />
        <div className="center" style={{ margin: 50, fontSize: 35 }}>
          Instagram Instagram
        </div>
        <section className="container">
          <Row>
            <Col span={12}>
              <img
                src="/img/bedroom.png"
                style={{ width: 475, height: 470, margin: 5 }}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <img
                    src="/img/box.png"
                    style={{ width: 230, height: 230, margin: 5 }}
                  />
                </Col>
                <Col span={12}>
                  <img
                    src="/img/boulder.png"
                    style={{ width: 230, height: 230, margin: 5 }}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <img
                    src="/img/box.png"
                    style={{
                      width: 230,
                      height: 230,
                      margin: 5,
                    }}
                  />
                </Col>
                <Col span={12}>
                  <img
                    src="/img/boulder.png"
                    style={{ width: 230, height: 230, margin: 5 }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </div>
      <Divider />
      <section className="footer">
      Facebook Instagram Twitter
      </section>
    </>
  );
}
