import React from "react";
import "../style/Card.css"
import DropDownOnHover from "./DropDownOnHover";
import Vecihale from "../assets/Wehicale.png";

const Card = () => {
    const buttonClick = () => {

    }
    return (
        <>
            <div className="Card-main-div">
                <div className="card-second-div">
                    <div className="card-second-div-heder">
                        <p>HEADER</p>
                    </div>
                    <div className="card-second-div-body">
                        <img src={Vecihale} />
                    </div>
                    <div className="card-second-div-fotter">
                        <div className="card-footer-button" onClick={buttonClick}>SUBMIT</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card