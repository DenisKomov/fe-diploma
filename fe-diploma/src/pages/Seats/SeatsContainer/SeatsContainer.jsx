import React, { useContext, useState, useEffect } from "react";
import AppContext from "#context/appContext";
import useGetSeats from "#services/useGetSeats";
import SeatsExchange from "../SeatsExchange/SeatsExchange";
import SeatsTrain from "../SeatsTrain/SeatsTrain";
import SeatsTicketAmount from "../SeatsTicketAmount/SeatsTicketAmount";
import SeatsWagonTypes from "../SeatsWagonTypes/SeatsWagonTypes";
import SeatsWagonHeader from "../SeatsWagonHeader/SeatsWagonHeader";
import SeatsWagonDetails from "../SeatsWagonDetails/SeatsWagonDetails";
import SeatsTotalCost from "../SeatsTotalCost/SeatsTotalCost";
import "./SeatsContainer.css";

function SeatsContainer() {
    const { appState } = useContext(AppContext);
    const { resultDeparture } = useGetSeats(appState, "departure");
    const { resultArrival } = useGetSeats(appState, "arrival");
    const [targetClass, setTargetClass] = useState({});
    const [depClass, setDepClass] = useState();
    const [arrClass, setArrClass] = useState();

    const handleWagonClass = (value) => {
        setDepClass(value.departureClass || depClass);
        setArrClass(value.arrivalClass || arrClass);
    };

    useEffect(() => {
        setTargetClass({ depClass, arrClass });
    }, [depClass, arrClass]);

    const renderSeatsContainer = (identity, result, classType) => (
        <div className="seats__container" id={appState[`${identity}_id`]} data-name={identity}>
            <SeatsExchange data={identity === "arrival"} />
            <SeatsTrain data={identity} />
            {result.length ? (
                <>
                    <SeatsTicketAmount />
                    <SeatsWagonTypes
                        data={Array.isArray(result) ? result : Array.from(result)}
                        identity={identity}
                        onChange={handleWagonClass}
                    />
                    {classType && (
                        <>
                            <SeatsWagonHeader
                                identity={identity}
                                wagonClass={targetClass}
                                data={result}
                            />
                            <SeatsWagonDetails data={result} identity={identity} />
                            <SeatsTotalCost identity={identity} />
                        </>
                    )}
                </>
            ) : (
                <p className="seats__container-error-string">Мест по вашему запросу не обнаружено</p>
            )}
        </div>
    );

    return (
        <>
            {appState?.departure_id && renderSeatsContainer("departure", resultDeparture.result, depClass)}
            {appState?.arrival_id && renderSeatsContainer("arrival", resultArrival.result, arrClass)}
        </>
    );
}

export default SeatsContainer;