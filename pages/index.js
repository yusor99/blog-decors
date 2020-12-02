import { Divider, Row, Col } from "antd";
import Cards from "../components/cards";
import NavBar from "../components/navbar";
import PureCard from "../components/pureCard";
export default function Home() {
  return (
    <>
      <NavBar />
      <section className="home-cover">
        <img src="/img/cover.png" />
        <div className="overlay"></div>
      </section>
      <section className="flex">
        <div className="container">
          <div className="center">
            <h7>Custom Built Adobe XD Template</h7>

            <h7>Download for Free</h7>
          </div>

          <Divider />
          <section className="center">
            <Row style={{ alignItems: "center", justifyContent: "center" }}>
              <Col>
                <PureCard />
              </Col>
              <Col>
                <PureCard />
              </Col>
              <Col>
                <PureCard />
              </Col>
            </Row>
          </section>
          <Divider />
          <div className="center">Instagram Instagram</div>
          <section className="center">
            <Row
              gutter={[8, 16]}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Col>
                <img src="/img/bedroom.png" className="big-img" />
              </Col>
              <Col>
                <Row
                  gutter={[8, 8]}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Col>
                    <img
                      src="/img/box.png"
                      style={{ width: 230, height: 230 }}
                    />
                  </Col>
                  <Col>
                    <img
                      src="/img/boulder.png"
                      style={{ width: 230, height: 230 }}
                    />
                  </Col>
                </Row>
                <Row
                  gutter={[8, 8]}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Col>
                    <img
                      src="/img/box.png"
                      style={{
                        width: 230,
                        height: 230,
                      }}
                    />
                  </Col>
                  <Col>
                    <img
                      src="/img/boulder.png"
                      style={{ width: 230, height: 230 }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
          <Divider />
          <section className="footer">Facebook Instagram Twitter</section>
        </div>
      </section>
    </>
  );
}
