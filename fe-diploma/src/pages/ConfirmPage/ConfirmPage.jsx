import React from "react";
import HeaderOrder from "../Header/HeaderOrder/HeaderOrder";
import OrderLine from "../Order/OrderLine/OrderLine";
import OrderDetails from "../Order/OrderDetails/OrderDetails";
import ConfirmInfo from "../ConfirmPage/ConfirmInfo/ConfirmInfo";
import Footer from "../Footer/Footer";

function ConfirmPage() {
    return (
        <>
            <HeaderOrder />
            <OrderLine />
            <div className="order-container">
                <div className="container">
                    <div className="order-content">
                        <OrderDetails className="order-sidebar" />
                        <ConfirmInfo />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ConfirmPage;