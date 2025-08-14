import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderOrder from "../Header/HeaderOrder/HeaderOrder";
import OrderLine from "../Order/OrderLine/OrderLine";
import OrderDetails from "../Order/OrderDetails/OrderDetails";
import PassengersInfo from "./PassengersInfo/PassengersInfo";
import Footer from "../Footer/Footer";

function PassengersPage() {
    const [passengerData, setPassengerData] = useState([]);

    useEffect(() => {
        const fetchPassengerData = async () => {
            const data = await fetch("/api/passengers");
            const result = await data.json();
            setPassengerData(result);
        };

        fetchPassengerData();
    }, []);

    return (
        <>
            <HeaderOrder />
            <OrderLine />
            <div className="order-container">
                <div className="container">
                    <div className="order-content">
                        <div className="order-sidebar">
                            <OrderDetails />
                        </div>
                        <PassengersInfo passengers={passengerData} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

PassengersPage.propTypes = {
    passengers: PropTypes.array,
};

export default PassengersPage;