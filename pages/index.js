import { Divider, Row, Col } from "antd";
import Cards from "../components/cards";
import NavBar from "../components/navbar";
export default function Home() {
  return (
    <>
      <NavBar />
      <section className="home-cover">
        <img src="/img/cover.png" />
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
        <section className="container ">
          <Row gutter={[24, 16]}>
            <Col>
              <img src="/img/bedroom.png" style={{ width: 523, height: 515 }} />
            </Col>
            <Col>
              <Row gutter={[16, 16]}>
                <Col>
                  <img src="/img/box.png" style={{ width: 250, height: 250 }} />
                </Col>
                <Col>
                  <img
                    src="/img/boulder.png"
                    style={{ width: 250, height: 250 }}
                  />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col>
                  <img
                    src="/img/box.png"
                    style={{
                      width: 250,
                      height: 250,
                    }}
                  />
                </Col>
                <Col>
                  <img
                    src="/img/boulder.png"
                    style={{ width: 250, height: 250 }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </div>
      <Divider />
      <section className="footer">Facebook Instagram Twitter</section>
    </>
  );
}
