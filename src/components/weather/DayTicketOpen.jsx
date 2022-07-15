import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faWind,
  faSun,
  faMoon,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const capitalize = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

function OpenDayTicket({ weatherData, accordionClickHandler }) {
  return (
    <div className="open-day-ticket">
      <div className="accordion-handler" onClick={accordionClickHandler}>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <div className="open-day-ticket__day-summary">
        <div className="degrees">
          {`${Math.round(weatherData.main.temp)}°C`}
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="description">
        {capitalize(
          `Feels like ${Math.round(weatherData.main.feels_like)}°C. `
        )}
        {capitalize(weatherData.weather[0].description)}.
      </div>
      <div className="open-day-ticket__details-table">
        <div className="cell">
          <div className="cell-icon">
            <FontAwesomeIcon icon={faDroplet} />
          </div>
          <div className="cell-info">
            <div className="cell-info__title">Humidity</div>
            <div className="cell-info__details">
              {weatherData.main.humidity}%
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="cell-icon">
            <FontAwesomeIcon icon={faWind} />
          </div>
          <div className="cell-info">
            <div className="cell-info__title">Wind</div>
            <div className="cell-info__details">
              {weatherData.wind.speed} m/s
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="cell-icon">
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className="cell-info">
            <div className="cell-info__title">Sunrise</div>
            <div className="cell-info__details">
              {new Date(weatherData.sys.sunrise * 1000).toLocaleString(
                "en-US",
                {
                  hour12: true,
                  hour: "numeric",
                  minute: "numeric",
                }
              )}
            </div>
          </div>
        </div>
        <div className="cell">
          <div className="cell-icon">
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className="cell-info">
            <div className="cell-info__title">Sunset</div>
            <div className="cell-info__details">
              {new Date(weatherData.sys.sunset * 1000).toLocaleString("en-US", {
                hour12: true,
                hour: "numeric",
                minute: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenDayTicket;
