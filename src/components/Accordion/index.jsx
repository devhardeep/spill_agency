/* eslint-disable react/prop-types */
import React from "react";
import "./_accordion.scss";

const Accordion = ({ data, isOpen, onClick }) => {
    return (
        <div className="accordion-container">
            <div className="accordion-inner-container" onClick={() => onClick()}>
                <div className="accordion-title">{data.title}</div>
                {isOpen ? <img className="accordion-up-arrow" src="/images/accord_arrow.png" /> : <img className="accordion-down-arrow" src="/images/accord_arrow.png" />}
            </div>
            <div className="accordion-splitter-line" />
            {isOpen ? <div className="accordion-content-title" dangerouslySetInnerHTML={{ __html: data.description.childContentfulRichText.html }} /> : <div style={{ marginBottom: "20px" }} />}
        </div>
    );
};
export default Accordion;