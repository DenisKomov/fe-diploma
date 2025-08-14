import React, { useContext, useState, useEffect } from "react";
import AppContext from "#context/appContext";
import OrderFilters from "../OrderFilters/OrderFilters";
import OrderLastTickets from "../OrderLastTickets/OrderLastTickets";
import OrderResultsControl from "../OrderResultsControl/OrderResultsControl";
import OrderPagination from "../OrderPagination/OrderPagination";
import useGetRoutes from "#services/useGetRoutes";
import Modal from "#components/Modal/Modal";
import Load from "#components/Load/Load";
import "./OrderContainer.css";

function OrderContainer() {
    const { appState, setAppState } = useContext(AppContext);
    const { result, isLoading } = useGetRoutes(appState);
    const [modal, setModal] = useState("none");
    const [loadApp, setLoadApp] = useState(false);
    const [newOffset, setNewOffset] = useState(null);

    const handleSort = (value) => {
        if (value === "price") {
            setModal("flex");
        }
    };

    const handleModal = (value) => {
        if (value === "none") {
            setModal(value);
        } else {
            setModal(value);
        }
    };

    const handlePage = (value) => {
        setNewOffset(value);
        setLoadApp(true);
    };

    useEffect(() => {
        if (!loadApp || newOffset === null) return;

        setAppState(prevState => ({
            ...prevState,
            offset: newOffset,
        }));

        setLoadApp(false);
    }, [loadApp, newOffset, setAppState]);

    return (
        <div className="order-container">
            <div className="container">
                <div className="order-content">
                    <div className="order-sidebar">
                        <OrderFilters />
                        <OrderLastTickets />
                    </div>
                    <div className="order-results">
                        {isLoading ?
                            <Load /> :
                            <>
                                <OrderResultsControl
                                    count={result?.total_count || 0}
                                    onChange={handleSort}
                                />
                                <div className="order-results__wrapper">
                                    <OrderPagination
                                        routes={result?.items || []}
                                        onChange={handlePage}
                                    />
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <Modal
                status={result?.error ? "error" : "info"}
                display={modal}
                text={result?.error || ""}
                onChange={handleModal}
            />
        </div>
    );
}

export default OrderContainer;