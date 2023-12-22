import React from "react";
import Image from "./Image";
import Content from "./Content";

function App() {
    return (
        <div id="main_container">
            <div className="bg_pattern_desktop"></div>
            <div className="component">
                <div className="title_container">
                    <Image
                        className="star_icon"
                        src="./images/icon-star.svg"
                        alt="icon-star" />
                    <p>FAQs</p>
                </div>
                <div className="content_container">
                    <Content />
                </div>
            </div>
            <div className="footer">
                <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                    Coded by <a href="https://www.frontendmentor.io/profile/timodn">@timodn</a>.
                </p>
            </div>
        </div>
    );
}

export default App;