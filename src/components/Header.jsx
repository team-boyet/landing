import { Col, Row } from "react-bootstrap";
import "./Header.css";
import HeaderPicture from "../assets/Banner-Photo-NoBG.png";
import HeaderSlogan from "../assets/header-slogan.png"

export const Header = () => {
    let message1 = "“BAGONG LIDERATO,";
    let message2 = "SERBISYONG TOTOO,";
    let message3 = "HINDI PAKITANG TAO”";

    return(
        <>
            <section className="header-bg">
                <div className="container">
                    <Row>
                        <Col className="col-8">
                            <Row>
                                <div  className="header-text">
                                    <p data-aos="fade-up" data-aos-duration="2000" >{message1}</p>
                                    <p data-aos="fade-up" data-aos-duration="2500">{message2}</p>
                                    <p data-aos="fade-up" data-aos-duration="3000">{message3}</p>
                                </div>
                            </Row>
                            <Row> 
                                <img data-aos="fade-up-right" data-aos-duration="2000" className="header-logo" src={HeaderSlogan} alt="/"></img>
                            </Row>
                        </Col>
                        <Col className="header-logo overflow-hidden col-4">
                                <img data-aos="flip-left" data-aos-duration="2000" className="logo" src={HeaderPicture} alt="/"></img>
                             
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};


export default Header;