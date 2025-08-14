import React from "react";
import HeaderOrder from "../Header/HeaderOrder/HeaderOrder";
import OrderLine from "../Order/OrderLine/OrderLine";
import OrderDetails from "../Order/OrderDetails/OrderDetails";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import Footer from "../Footer/Footer";

function PaymentPage() {
    return (
        <div className="payment-page">
            <header>
                <HeaderOrder />
            </header>

            <main>
                <OrderLine />
                <div className="order-container">
                    <div className="container">
                        <div className="order-content">
                            <aside className="order-sidebar">
                                <OrderDetails />
                            </aside>
                            <PaymentInfo />
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default PaymentPage;