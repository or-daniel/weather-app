import DayTicketOpen from "./DayTicketOpen";
import DayTicketClosed from "./DayTicketClosed";
import "./DayTicket.css";
import { useState } from "react";

function DayTicket({ weatherData, isTicketOpenInitial }) {
  const [isTicketOpen, setIsTicketOpen] = useState(
    isTicketOpenInitial || false
  );

  const accordionClickHandler = () => {
    console.log("isTicketOpen");
    console.log(isTicketOpen);
    setIsTicketOpen(!isTicketOpen);
  };

  return (
    <div>
      {weatherData.main && isTicketOpen ? (
        <DayTicketOpen
          weatherData={weatherData}
          accordionClickHandler={accordionClickHandler}
        />
      ) : (
        <DayTicketClosed accordionClickHandler={accordionClickHandler} />
      )}
    </div>
  );
}

export default DayTicket;
