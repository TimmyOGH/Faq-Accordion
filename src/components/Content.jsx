import React, { useState } from "react";
import Image from "./Image";
import faqs from "../faqs";

function Content() {
    const [toggleBtns, setToggleBtns] = useState(Array(faqs.length).fill(false));
    const newToggleBtns = [...toggleBtns];

    function handleBtnClick(id) {
        newToggleBtns[id] = !newToggleBtns[id];
        setToggleBtns(newToggleBtns);
    }

    function handleTitleClick(id) {
        if (toggleBtns[id] !== true) {
            newToggleBtns[id] = !newToggleBtns[id];
            setToggleBtns(newToggleBtns);
        }
    }

    return (
        faqs.map((faq, id) => (
            <div style={{ borderBottom: id === faqs.length - 1 ? "none" : "1px solid hsl(275, 100%, 97%)" }} className="content">
                <div className="title_btn_container">
                    <p style={{ cursor: toggleBtns[id] && "auto", color: toggleBtns[id] && "hsl(292, 42%, 14%)" }} onClick={() => handleTitleClick(id)} className="question">{faq.question}</p>
                    <button onClick={() => handleBtnClick(id)} className="plus_minus_btns">
                        {toggleBtns[id] ? (
                            <Image
                                className="minus_icon"
                                src="./images/icon-minus.svg"
                                alt="icon-minus"
                            />
                        ) : (
                            <Image
                                className="plus_icon"
                                src="./images/icon-plus.svg"
                                alt="icon-plus"
                            />
                        )}
                    </button>
                </div>
                {toggleBtns[id] && <p style={{ marginBottom: "20px" }} className="answer">{faq.answer}</p>}
            </div>
        ))
    );
}

export default Content;