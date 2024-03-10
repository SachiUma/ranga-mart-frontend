import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector(state => state.handleCart);

    return (
        <div>
            <div className="yellow-section" style={{ backgroundColor: '#fad390', height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, position: 'fixed', top: 0 }}>
                <h8 style={{ color: '#b71540' }}>You see, You buy, You make our Day. Get 20% discount when you buy 3 items or more.</h8>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm" style={{ marginTop: '50px', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/dashboard">
                        RANGA<span style={{ color: '#c23616' }}>MART</span> COLLECTION
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/about">Deals</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Essentials</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Serenity</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Kids Collection</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Gift Vouchers</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-sign-in me-1"></i>
                                Login
                            </NavLink>

                            <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>
                                Register
                            </NavLink>

                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>
                                Cart ({state.length})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Add padding or margin to prevent content from being covered by the fixed navbar */}
            <div style={{ paddingTop: '120px' }}> {/* Adjust this value based on your needs */}
                {/* Your content goes here */}
            </div>
        </div>
    );
}

export default Navbar;
