import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ClosedDayTicket({ weatherData, accordionClickHandler }) {
  return (
    <div className="closed-day-ticket">
      <div className="accordion-handler" onClick={accordionClickHandler}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div>closed</div>
    </div>
  );
}

export default ClosedDayTicket;
