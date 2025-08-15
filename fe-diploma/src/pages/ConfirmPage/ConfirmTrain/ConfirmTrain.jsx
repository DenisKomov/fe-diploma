import React, { useContext } from "react";
import PropTypes from "prop-types"; // Импортируем PropTypes
import RouteContext from "#context/routeContext";
import SVGicon from "#components/SVGicon/SVGicon";
import "./ConfirmTrain.css";

// Компонент для отображения информации о поезде
const TrainInfo = ({ train }) => (
    <>
        <p className="train__name-number">{train.train_name}</p>
        <div className="train__name-place">
            <p className="train__name-city">{train.from_city}</p>
            <p className="train__name-city">{train.to_city}</p>
        </div>
    </>
);

TrainInfo.propTypes = {
    train: PropTypes.shape({
        train_name: PropTypes.string.isRequired,
        from_city: PropTypes.string.isRequired,
        to_city: PropTypes.string.isRequired,
    }).isRequired,
};

// Компонент для отображения времени
const TimeInfo = ({ time, city }) => (
    <div>
        <time dateTime={time.dateTime}>{time.datetime}</time>
        <p>{city.name}</p>
        <p>{city.station}</p>
    </div>
);

TimeInfo.propTypes = {
    time: PropTypes.shape({
        dateTime: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
    }).isRequired,
    city: PropTypes.shape({
        name: PropTypes.string.isRequired,
        station: PropTypes.string.isRequired,
    }).isRequired,
};

// Компонент для отображения информации о поездке
const TripInfo = ({ route }) => (
    <div className="train__time-wrapper" style={{ height: route.arrival_id ? "360px" : "350px" }}>
        <div className="train__time-to" id={route.departure_id}>
            <TimeInfo time={{ datetime: route.departure_from_datetime }} city={{ name: route.departure_from_city_name, station: route.departure_from_railway_station_name }} />
            <div>
                <p>{route.departure_duration}</p>
                <div className="train__time-arrow arrow-right"></div>
            </div>
            <TimeInfo time={{ datetime: route.departure_to_datetime }} city={{ name: route.departure_to_city_name, station: route.departure_to_railway_station_name }} />
        </div>

        {route.arrival_id &&
            <div className="train__time-from" id={route.arrival_id}>
                <TimeInfo time={{ datetime: route.arrival_from_datetime }} city={{ name: route.arrival_from_city_name, station: route.arrival_from_railway_station_name }} />
                <div>
                    <p>{route.arrival_duration}</p>
                    <div className="train__time-arrow arrow-left"></div>
                </div>
                <TimeInfo time={{ datetime: route.arrival_to_datetime }} city={{ name: route.arrival_to_city_name, station: route.arrival_to_railway_station_name }} />
            </div>
        }
    </div>
);

TripInfo.propTypes = {
    route: PropTypes.shape({
        departure_id: PropTypes.string.isRequired,
        departure_from_datetime: PropTypes.string.isRequired,
        departure_from_city_name: PropTypes.string.isRequired,
        departure_from_railway_station_name: PropTypes.string.isRequired,
        departure_to_datetime: PropTypes.string.isRequired,
        departure_to_city_name: PropTypes.string.isRequired,
        departure_to_railway_station_name: PropTypes.string.isRequired,
        arrival_id: PropTypes.string,
        arrival_from_datetime: PropTypes.string,
        arrival_from_city_name: PropTypes.string,
        arrival_from_railway_station_name: PropTypes.string,
        arrival_to_datetime: PropTypes.string,
        arrival_to_city_name: PropTypes.string,
        arrival_to_railway_station_name: PropTypes.string,
        departure_duration: PropTypes.string.isRequired,
        arrival_duration: PropTypes.string,
    }).isRequired,
};

// Компонент для отображения цены
const PriceInfo = () => (
    <div className="train__price-seats">
        {[
            { type: "Сидячий", count: 88, price: 1920 },
            { type: "Плацкарт", count: 52, price: 2530 },
            { type: "Купе", count: 24, price: 3820 },
            { type: "Люкс", count: 15, price: 4950 },
        ].map(seat => (
            <div className="train__price-seat" key={seat.type}>
                <p className="train__price-seat-type">{seat.type}</p>
                <p className="train__price-seat-count">{seat.count}</p>
                <p>от
                    <span className="train__price-seat-sum">{seat.price}</span>
                    <span className="train__price-seat-currency">&#8381;</span>
                </p>
            </div>
        ))}
    </div>
);

function ConfirmTrain() {
    const { routeState } = useContext(RouteContext);

    const departureTrain = {
        train_name: routeState?.departure_train_name,
        from_city: routeState?.departure_from_city_name,
        to_city: routeState?.departure_to_city_name,
    };

    const arrivalTrain = routeState?.arrival_id ? {
        train_name: routeState?.arrival_train_name,
        from_city: routeState?.arrival_from_city_name,
        to_city: routeState?.arrival_to_city_name,
    } : null;

    return (
        <div className="order-train train">
            <div className="train__name-wrapper" style={{ height: routeState && routeState.arrival_id ? "360px" : "350px" }}>
                <div className="train__name-icon">
                    <SVGicon name={"train"} />
                </div>
                <TrainInfo train={departureTrain} />
                {arrivalTrain && <TrainInfo train={arrivalTrain} />}
            </div>

            <TripInfo route={routeState} />

            <div className="train__price-wrapper" style={{ height: routeState && routeState.arrival_id ? "360px" : "350px" }}>
                <PriceInfo />
                <div className="train__price-icons">
                    <SVGicon name={"have_air_conditioning"} />
                    <SVGicon name={"have_wifi"} />
                    <SVGicon name={"is_express"} />
                </div>
                <button className="confirm-info__btn" type="button">Изменить</button>
            </div>
        </div>
    );
}

export default ConfirmTrain;