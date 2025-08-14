import React from "react";
import HeaderOrder from "../Header/HeaderOrder/HeaderOrder";
import OrderLine from "../Order/OrderLine/OrderLine";
import OrderFilters from "../Order/OrderFilters/OrderFilters";
import OrderLastTickets from "../Order/OrderLastTickets/OrderLastTickets";
import Seats from "../Seats/Seats";
import Footer from "../Footer/Footer";
import "./SeatsPage.css";

function SeatsPage() {
    return (
        <>
            <HeaderOrder />
            <OrderLine />
            <div className="order-container">
                <div className="container">
                    <div className="order-content">
                        <aside className="order-sidebar">
                            <OrderFilters />
                            <OrderLastTickets />
                        </aside>
                        <main className="seats seats-wrapper">
                            <Seats />
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SeatsPage;