import React, { useContext } from "react";
import PropTypes from "prop-types";
import RouteContext from "#context/routeContext";
import SeatsWagonDetailsBody from "./SeatsWagonDetailsBody/SeatsWagonDetailsBody";
import SeatsScheme from "../SeatsScheme/SeatsScheme";
import "./SeatsWagonDetails.css";

function SeatsWagonDetails({ data, identity }) {
    const { routeState } = useContext(RouteContext);

    const renderWagonDetails = (item, index, type) => (
        <div
            className="seats__wagon-details wagon-details"
            id={`wagon-details-${type}_${index}`}
            key={`${type}_${index}`}
        >
            <SeatsWagonDetailsBody
                data={item}
                wagonType={type === "departure" ? routeState.departureClass : routeState.arrivalClass}
            />
            <SeatsScheme data={item} />
        </div>
    );

    return (
        <>
            {data.map((item, i) => renderWagonDetails(item, i, identity))}
        </>
    );
}

SeatsWagonDetails.propTypes = {
    data: PropTypes.array.isRequired,
    identity: PropTypes.string.isRequired,
};

export default SeatsWagonDetails;