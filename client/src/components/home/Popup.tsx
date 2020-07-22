import React from "react";
import Warper from "./Warper";
import Popup from "reactjs-popup";
//

const contentStyle = {
    maxWidth: "600px",
    width: "90%"
};

const CustomModal = () => (
    <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        closeOnDocumentClick
    >
        <span></span>
    </Popup>
);
export default Warper(CustomModal);
