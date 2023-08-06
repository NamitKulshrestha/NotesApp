import React from "react";

function Footer() {
    const currentDate = new Date();
    const currYear = currentDate.getFullYear();

    return (
        <footer>
            <p>Copyright ©️ {currYear}</p>
        </footer>
    );
}

export default Footer;