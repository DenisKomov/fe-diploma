import React, { useContext } from "react";
import PropTypes from "prop-types";
import OrderContext from "#context/orderContext";
import WagonHeader from "#assets/wagon-header.png";
import WagonFooter from "#assets/wagon-footer.png";
import SeatsSchemeFourthClass from "./SeatsSchemeFourthClass/SeatsSchemeFourthClass";
import SeatsSchemeThirdClass from "./SeatsSchemeThirdClass/SeatsSchemeThirdClass";
import SeatsSchemeSecondClass from "./SeatsSchemeSecondClass/SeatsSchemeSecondClass";
import SeatsSchemeFirstClass from "./SeatsSchemeFirstClass/SeatsSchemeFirstClass";
import "./SeatsScheme.css";

const SeatsScheme = ({ data }) => {
    const { orderState, setOrderState } = useContext(OrderContext);

    const handleSeats = (value) => {
        const isDeparture = value.way === "departure";
        const currentSeatsArray = isDeparture
            ? orderState.departure.seats || []
            : orderState.arrival.seats || [];
        const targetWagon = data.coach._id === value.coach_id ? data : null;

        if (!targetWagon) return;

        const targetTicketCost = getTicketCost(value.seatIndex, targetWagon);

        const newSeatData = {
            coach_id: value.coach_id,
            seat_number: value.seatIndex,
            seat_cost: targetTicketCost,
            selected: value.selected,
        };

        const updatedSeatsArray = value.selected
            ? [...currentSeatsArray, newSeatData]
            : currentSeatsArray.filter(item => item.seat_number !== value.seatIndex);

        setOrderState({
            ...orderState,
            [isDeparture ? "departure" : "arrival"]: {
                ...orderState[isDeparture ? "departure" : "arrival"],
                seats: updatedSeatsArray,
            },
        });
    };

    const getTicketCost = (seatIndex, wagon) => {
        switch (wagon.coach.class_type) {
            case "first":
                return wagon.coach.price;
            case "third":
                return +seatIndex > 32
                    ? wagon.coach.side_price
                    : +seatIndex % 2 === 0
                        ? wagon.coach.top_price
                        : wagon.coach.bottom_price;
            case "second":
            case "fourth":
                return +seatIndex % 2 === 0
                    ? wagon.coach.top_price
                    : wagon.coach.bottom_price;
            default:
                return 0;
        }
    };

    const renderSeatsScheme = () => {
        const schemeComponents = {
            fourth: SeatsSchemeFourthClass,
            third: SeatsSchemeThirdClass,
            second: SeatsSchemeSecondClass,
            first: SeatsSchemeFirstClass,
        };

        const SeatsComponent = schemeComponents[data.coach.class_type];
        return SeatsComponent ? <SeatsComponent seats={data.seats} onChange={handleSeats} /> : null;
    };

    return (
        <div className="seats__scheme scheme">
            <p className="scheme__wagon-number">{data.coach.name}</p>
            <div className="scheme__container">
                <img className="scheme__wagon-img" src={WagonHeader} alt="Wagon" />
                <div className="scheme__seats-wrapper">
                    {renderSeatsScheme()}
                </div>
                <img className="scheme__wagon-img" src={WagonFooter} alt="Wagon" />
            </div>
        </div>
    );
};

SeatsScheme.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SeatsScheme;