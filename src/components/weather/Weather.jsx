import DayTicket from "./DayTicket";

function Weather({ weatherData }) {
  return (
    <div>
      <DayTicket weatherData={weatherData} isTicketOpenInitial={true} />
    </div>
  );
}

export default Weather;
