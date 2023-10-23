import AboutImage from "../assets/About-Image.jpg";
import "./About.css";

function About() {
    return <>
        <div className="about-container">
            <img  data-aos="fade-right" data-aos-duration="2000" src={AboutImage} className="about-image" />
            <div  data-aos="fade-left" data-aos-duration="2000" className="text-container">
                <h2>ABOUT US</h2>
                <p>Team Boyet is a dedicated group of community members who wholeheartedly support Boyet's vision for our barangay. With a shared commitment to progress, unity, and positive change, we aim to work hand in hand with Boyet to build a brighter future for our community. Together, we strive to bring transparency, inclusivity, and effective leadership to our barangay, making it a better place for all residents.</p>
            </div>
        </div>
    </>;
}

export default About