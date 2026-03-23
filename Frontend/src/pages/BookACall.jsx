import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingSection from "../components/BookingSection";

import "../styling/bookacall.css";

const BookACall = () => {
    return (
        <div className="bookacall-page">
            <Navbar />

            <main className="bookacall-main">
                <BookingSection />
            </main>

            <Footer />
        </div>
    );
};

export default BookACall;