import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../redux/actions/productActions";

function Home() {
  const products = useSelector((state) => state.allProduct?.products);

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const increasement = () => {
    setCount(count + 1);
  };

  // console.log("our product is ", products);

  // const getProduct = () => {

  //   const cancelToken = axios.CancelToken;
  //   const source = cancelToken.source();
  //   // const config = { cancelToken: source.token };
  //   axios
  //     .get(`https://fakestoreapi.com/products`,{cancelToken:source.token})
  //     .then((response) => dispatch(setProducts(response.data)))
  //     .catch((error) => {
  //       console.log(error.message);
  //       if (axios.isCancel(error)) {
  //         console.log("Request canceled", error.message);
  //       } else {
  //         console.log("error from server");
  //       }
  //     });
  //  return () => {
  //   console.log("AxiosCancel: unmounting");
  //   source.cancel();
  // };
  // }
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const loadData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products", {
          cancelToken: source.token,
        });
        dispatch(setProducts(response.data));
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("AxiosCancel", error.message);
        } else {
          throw error;
        }
      }
    };
    loadData();

    return () => {
      console.log("AxiosCancel: unmounting");
      source.cancel();
    };
  }, [count]);

  // useEffect(() => {
  //   // getProduct();
  // }, [count]);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col-lg-3" key={id}>
        <Link to={`/productDetails/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      {count}
      <button onClick={increasement}>+</button>
      {renderList}
    </>
  );
}

export default Home;
