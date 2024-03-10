import React from "react";
import Products from "./Products";
import Map from "./Map";
import Contact from "./Contact";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <div className="card-img" style={{ backgroundImage: `url("/assets/1.jpg")`, height: "625px", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="card-img-overlay d-flex align-items-center justify-content-end">
                        <div className="container text-end">
                            <h5 className="card-title display-3 fw-bold mb-0">NEW SEASON</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5"> {/* Add margin top to create space */}
                <Products /> {/* Render the Products component */}
            </div>
            <div className="container mt-5"> {/* Add margin top to create space */}
                <Map /> {/* Render the Products component */}
            </div>
            <div className="container mt-5"> {/* Add margin top to create space */}
                <Contact /> {/* Render the Products component */}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <div className="container mt-5">
                <Footer /> 
            </div> */}
        </div>
    );
};

export default Home