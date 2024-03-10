import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [id]);

    const Loading = () => {
        return (
            <div className="row">
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={400} />
                </div>

                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </div>
        );
    };




    const ShowProduct = () => {
        if (!product) {
            return <div>Loading...</div>; // or any placeholder while product is loading
        }
    
        return (
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
    
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}<i className="fa fa-star"></i></p>
                    <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 pt-2" onClick={() => addProduct(product)}>Add to Cart</button>
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                </div>
                <div> <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                </div>
               


                
            </div>
        );
    };

    return (
        <div className="container py-5">
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    );
};

export default Product;
