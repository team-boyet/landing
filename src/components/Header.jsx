import "./Header.css";

export const Header = () => {
    let message1 = "BAGONG LIDERATO,SERBISYONG TOTOO, HINDI PAKITANG TAO"
    let message2 = "IBOTO!"
    let message3 = "BOYET"
    let message4 = "CERVANTES"
    let message5 = "para"
    let message6 = "PUNONG BARANGAY"

    return(
        <>
            <section className="header-bg">
                <div className="text-header container">
                    <p>{message1}</p>
                    <p>{message2}</p>
                    <p>{message3}</p>
                    <p>{message4}</p>
                    <p>{message5}</p>
                    <p>{message6}</p>
                </div>
            </section>
        </>
    );
};


export default Header;