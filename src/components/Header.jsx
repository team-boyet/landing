import { Col, Row } from "react-bootstrap";
import "./Header.css";

export const Header = () => {
    let message1 = "BAGONG LIDERATO"
    let message2 = "SERBISYONG TOTOO"
    let message3 = "HINDI PAKITANG TAO"
    return(
        <>
            <section className="header-bg">
                <div className="container">
                    <Row>
                        <Col>
                            <div data-aos="fade-up" data-aos-duration="1000" className="header-slogan">
                                <a>{message1}</a>
                                <a>{message1}</a>
                                <a>{message1}</a>
                            </div>
                        </Col>
                        <Col>
                        hatdog
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};


export default Header;