import './App.css';
import * as React from 'react';

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";

import { Route, Switch } from 'react-router-dom';
import Cart from './component/Cart';
import Map from './component/Map';

import Login from './component/Login';
import Register from './component/Register';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Payment from './component/Payment';
import OrderDetails from './component/OrderDetails';



function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/products/:id" component={Product} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/map" component={Map} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/orderDetails" component={OrderDetails} />
                {/* <Route exact path="/footer" component={Footer} /> */}

            </Switch>
            <Footer/>
        </>
    );
}

export default App;