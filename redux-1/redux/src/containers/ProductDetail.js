import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productid } = useParams();
  const dispatch = useDispatch();
  // console.log(product);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((err) => console.error(err));
    dispatch(selectedProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    if (productid && productid !== "") fetchProductDetail();
  }, [productid]);
  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  );
};

export default ProductDetail;
