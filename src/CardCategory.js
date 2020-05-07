import React from "react";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CardCategory = ({Category}) => {
    return (
        <div id="Cards">
      <span>
        <FontAwesomeIcon
            icon={faHome}
        />
      </span>
            <p>{Category}</p>
        </div>
    );
};

export default CardCategory;