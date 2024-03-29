import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://fakestoreapi.com/products");
            if (componentMounted) {
                const products = await response.json();
                setData(products);
                setFilter(products);
                setLoading(false);
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []);

    const Loading = () => (
        <>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
        </>
    );

    const showProducts = () => {
        return(
            <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={() =>setFilter(data)}> All </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
            </div>
            </>
        )
    }


    const ShowProduct = () => (
        <>
            {filter.map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                    <div className="card h-100 text-center p-4">
                        {product.image ? (
                            <img src={product.image} className="img-img-top" alt={product.title} height="250px" />
                        ) : (
                            <div>No Image Available</div>
                        )}
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                            <p className="card-text lead fw-bold">${product.price}</p>
                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                                Buy Now
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    return (
        <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {showProducts()}
                <ShowProduct />
            </div>
        </div>
    </div>
    );
};

export default Products;
