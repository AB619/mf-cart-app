import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import Header from './Header';
import Spinner from 'react-bootstrap/Spinner';

function RouteComponent() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={
                    <Suspense fallback={<Spinner animation="border" variant="dark"/>}>
                        <Homepage />
                    </Suspense>
                } />
                <Route path="payment" element={
                    <Suspense fallback={<Spinner animation="border" variant="dark"/>}>
                        <Homepage />
                    </Suspense>
                } />
            </Routes>
        </>
    )
}

export default RouteComponent;