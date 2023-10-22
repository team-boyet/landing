import AboutImage from "../assets/About-Image.jpg";
import "./About.css";

function About() {
    return <>
        <div className="about-container">
            <img src={AboutImage} className="about-image" />
            <div className="text-container">
                <h2>ABOUT US</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non auctor quam, ac pretium ipsum. Fusce a semper justo. Quisque nisi leo, tempor et ex at, feugiat malesuada felis. Vestibulum condimentum leo non metus condimentum, eu imperdiet</p>
            </div>
        </div>
    </>;
}

export default About